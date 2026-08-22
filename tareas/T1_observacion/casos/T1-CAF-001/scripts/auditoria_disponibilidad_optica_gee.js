/******************************************************************************
 * AUDITORÍA DE DISPONIBILIDAD ÓPTICA — T1-CAF-001
 * Serie Técnica de Teledetección · Universidad del Quindío
 * Versión 2.2 · 2026-08-21
 *
 * PROPÓSITO
 * ---------------------------------------------------------------------------
 * Cuantificar la disponibilidad temporal efectiva de observaciones ópticas
 * sobre el departamento del Quindío durante 2021–2025, diferenciando entre:
 *
 *   1. número bruto de imágenes o gránulos;
 *   2. número de fechas únicas de adquisición; y
 *   3. número de fechas únicas con observación válida por píxel.
 *
 * El script forma parte del caso T1-CAF-001: Diseño de una estrategia de
 * observación remota para cultivos de café en el departamento del Quindío. Su finalidad es
 * caracterizar la disponibilidad real del archivo óptico; no determina por sí
 * solo la idoneidad espectral, espacial o biofísica de una misión.
 *
 * PRINCIPIO METODOLÓGICO
 * ---------------------------------------------------------------------------
 * La frecuencia nominal de revisita no equivale a disponibilidad efectiva.
 * Nubes, sombras, saturación, cobertura de escena y otras restricciones reducen
 * el número de observaciones realmente utilizables.
 *
 * Para evitar sobreconteo cuando varios gránulos o escenas del mismo día cubren
 * un mismo píxel, esta versión no construye mosaicos diarios. Cada píxel válido
 * recibe un código numérico de fecha calendario y se aplica
 * countDistinctNonNull() a través de la colección. Por tanto:
 *
 *   valid_obs_* = número de FECHAS CALENDARIO ÚNICAS con observación válida
 *                 por píxel.
 *
 * Si varios gránulos válidos corresponden al mismo día, contienen el mismo
 * código y esa fecha se cuenta una sola vez.
 *
 * ÁREA DE ESTUDIO
 * ---------------------------------------------------------------------------
 * Asset oficial del caso:
 *   users/juliangarzonb/limite_quindio
 *
 * aoi_area_km2 corresponde al área calculada por ee.Geometry.area(). Las
 * estadísticas espaciales se reducen explícitamente a 250 m en EPSG:32618.
 *
 * SISTEMAS
 * ---------------------------------------------------------------------------
 * Sentinel-2: COPERNICUS/S2_SR_HARMONIZED
 * Landsat:    LANDSAT/LC08/C02/T1_L2 + LANDSAT/LC09/C02/T1_L2
 *
 * FORMA DE USO
 * ---------------------------------------------------------------------------
 * 1. Seleccione una opción en SENSOR: 'Sentinel-2' o 'Landsat'.
 * 2. Ejecute el script en Google Earth Engine Code Editor.
 * 3. Verifique en Console el AOI, periodo, fuente, número bruto de imágenes,
 *    fechas únicas, máscara, escala y CRS.
 * 4. Ejecute en Tasks las tres exportaciones CSV.
 * 5. Cambie únicamente SENSOR y repita para el segundo sistema.
 *
 * SALIDAS
 * ---------------------------------------------------------------------------
 * INVENTORY_Quindio_<SENSOR>.csv
 *   Disponibilidad total del archivo y configuración metodológica.
 *
 * MONTHLY_Quindio_<SENSOR>_2021_2025.csv
 *   Patrón estacional mensual agregado. Enero reúne todos los eneros de
 *   2021–2025, febrero todos los febreros, etc.; no es una serie de 60 meses.
 *
 * PERIODS_Quindio_<SENSOR>_2021_2025.csv
 *   Variación anual y semestral de la disponibilidad.
 *
 * MÉTRICAS PRINCIPALES
 * ---------------------------------------------------------------------------
 * raw_images
 *   Número de imágenes/gránulos originales que intersectan el AOI.
 *
 * unique_dates
 *   Número de fechas calendario distintas con adquisición sobre el AOI.
 *
 * valid_obs_p10 / valid_obs_median / valid_obs_p90
 *   Percentiles espaciales del número de fechas únicas con observación válida
 *   por píxel.
 *
 * valid_date_rate_*
 *   Los mismos percentiles expresados como porcentaje respecto al número de
 *   fechas únicas disponibles en el periodo.
 *
 * area_ge_N_obs_pct
 *   Porcentaje del AOI que alcanza al menos N fechas válidas.
 *
 * CRITERIO DE OBSERVACIÓN VÁLIDA
 * ---------------------------------------------------------------------------
 * Sentinel-2: SCL excluye 0, 1, 3, 8, 9, 10 y 11. Las clases 2 y 7 son
 * configurables; en esta versión ambas se excluyen como criterio conservador.
 * Se controla además el footprint mediante B4.
 *
 * Landsat 8/9: QA_PIXEL bits 0–5 deben ser 0; QA_RADSAT debe ser 0 y el
 * footprint se controla mediante SR_B4.
 *
 * ESCALA ESTADÍSTICA
 * ---------------------------------------------------------------------------
 * Las estadísticas espaciales se calculan a 250 m en EPSG:32618. Esta escala
 * es exclusivamente analítica y no modifica la resolución nativa de los
 * productos.
 *
 * LIMITACIONES
 * ---------------------------------------------------------------------------
 * - Los resultados dependen del AOI, periodo y criterio de máscara.
 * - La auditoría cuantifica disponibilidad temporal, no capacidad de
 *   discriminar café u otras coberturas.
 * - MONTHLY representa un patrón estacional agregado 2021–2025.
 * - Un análisis parcelario posterior puede requerir otra escala estadística.
 *
 * REPRODUCIBILIDAD
 * ---------------------------------------------------------------------------
 * Si cambia AOI, periodo, máscara, escala o definición de observación válida,
 * deben regenerarse todas las salidas. El repositorio incluye CITATION.cff.
 ******************************************************************************/

// ============================================================================
// 0. CONFIGURACIÓN
// ============================================================================

var REGION = 'Quindio';
var AOI_ASSET = 'users/juliangarzonb/limite_quindio';

// Opciones: 'Sentinel-2' | 'Landsat'
var SENSOR = 'Sentinel-2';

var START_YEAR = 2021;
var END_YEAR   = 2025;

// Escala exclusivamente estadística; no altera la resolución nativa.
var AUDIT_SCALE = 250;
var AUDIT_CRS   = 'EPSG:32618';
var TILE_SCALE  = 8;
var MAX_PIXELS  = 1e13;

// Sentinel-2: criterio conservador para el relieve del Quindío.
var S2_EXCLUDE_SCL_2 = true;
var S2_EXCLUDE_SCL_7 = true;

var DRIVE_FOLDER  = 'GEE_AUDITORIA_CAFETERA';
var SCRIPT_VERSION = '2.2';
var METHOD_ID = 'distinct_calendar_dates_at_valid_pixels';
var EPOCH = ee.Date('1970-01-01');

// ============================================================================
// 1. VALIDACIÓN DE CONFIGURACIÓN
// ============================================================================

if (SENSOR !== 'Sentinel-2' && SENSOR !== 'Landsat') {
  throw new Error('SENSOR no válido. Use exactamente "Sentinel-2" o "Landsat".');
}

if (END_YEAR < START_YEAR) {
  throw new Error('END_YEAR debe ser mayor o igual que START_YEAR.');
}

if (AUDIT_SCALE <= 0) {
  throw new Error('AUDIT_SCALE debe ser mayor que cero.');
}

// ============================================================================
// 2. FECHAS Y ÁREA DE ESTUDIO
// ============================================================================

var START_DATE = ee.Date.fromYMD(START_YEAR, 1, 1);
var END_DATE   = ee.Date.fromYMD(END_YEAR + 1, 1, 1);

var aoiFc = ee.FeatureCollection(AOI_ASSET);
var AOI = aoiFc.geometry();
var AOI_AREA_KM2 = AOI.area(1).divide(1e6);

Map.centerObject(aoiFc, 9);
Map.addLayer(
  ee.Image().byte().paint(aoiFc, 1, 2),
  {palette: ['yellow']},
  'Límite Quindío'
);

// ============================================================================
// 3. IDENTIFICADOR NUMÉRICO DE FECHA
// ============================================================================

function dateCode(image) {
  return image.date().difference(EPOCH, 'day').floor();
}

// ============================================================================
// 4. SENTINEL-2 — CÓDIGO DE FECHA EN PÍXELES VÁLIDOS
// ============================================================================

function prepareS2DateImage(image) {
  var scl = image.select('SCL');

  var valid = scl.neq(0)
    .and(scl.neq(1))
    .and(scl.neq(3))
    .and(scl.neq(8))
    .and(scl.neq(9))
    .and(scl.neq(10))
    .and(scl.neq(11));

  if (S2_EXCLUDE_SCL_2) {
    valid = valid.and(scl.neq(2));
  }

  if (S2_EXCLUDE_SCL_7) {
    valid = valid.and(scl.neq(7));
  }

  valid = valid.and(image.select('B4').mask());

  return ee.Image.constant(dateCode(image))
    .rename('date_code')
    .toInt32()
    .updateMask(valid)
    .set('system:time_start', image.get('system:time_start'))
    .set('date_string', image.date().format('YYYY-MM-dd'));
}

// ============================================================================
// 5. LANDSAT 8/9 — CÓDIGO DE FECHA EN PÍXELES VÁLIDOS
// ============================================================================

function prepareLandsatDateImage(image) {
  var qa = image.select('QA_PIXEL');

  var valid = qa.bitwiseAnd(1 << 0).eq(0)
    .and(qa.bitwiseAnd(1 << 1).eq(0))
    .and(qa.bitwiseAnd(1 << 2).eq(0))
    .and(qa.bitwiseAnd(1 << 3).eq(0))
    .and(qa.bitwiseAnd(1 << 4).eq(0))
    .and(qa.bitwiseAnd(1 << 5).eq(0));

  valid = valid.and(image.select('QA_RADSAT').eq(0));
  valid = valid.and(image.select('SR_B4').mask());

  return ee.Image.constant(dateCode(image))
    .rename('date_code')
    .toInt32()
    .updateMask(valid)
    .set('system:time_start', image.get('system:time_start'))
    .set('date_string', image.date().format('YYYY-MM-dd'));
}

// ============================================================================
// 6. COLECCIONES
// ============================================================================

var rawCollection;
var validDateCollection;
var DATA_SOURCE;
var MASK_DEFINITION;

if (SENSOR === 'Sentinel-2') {
  rawCollection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(AOI)
    .filterDate(START_DATE, END_DATE);

  validDateCollection = rawCollection.map(prepareS2DateImage);
  DATA_SOURCE = 'COPERNICUS/S2_SR_HARMONIZED';

  var excludedScl = ['0', '1', '3', '8', '9', '10', '11'];
  if (S2_EXCLUDE_SCL_2) excludedScl.push('2');
  if (S2_EXCLUDE_SCL_7) excludedScl.push('7');

  MASK_DEFINITION = 'SCL excluded=' + excludedScl.join(',') + '; B4 footprint';
}

if (SENSOR === 'Landsat') {
  var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
    .filterBounds(AOI)
    .filterDate(START_DATE, END_DATE);

  var l9 = ee.ImageCollection('LANDSAT/LC09/C02/T1_L2')
    .filterBounds(AOI)
    .filterDate(START_DATE, END_DATE);

  rawCollection = l8.merge(l9);
  validDateCollection = rawCollection.map(prepareLandsatDateImage);
  DATA_SOURCE = 'LANDSAT/LC08/C02/T1_L2 + LANDSAT/LC09/C02/T1_L2';
  MASK_DEFINITION = 'QA_PIXEL bits 0-5=0; QA_RADSAT=0; SR_B4 footprint';
}

// ============================================================================
// 7. INVENTARIO GENERAL
// ============================================================================

var RAW_IMAGES = rawCollection.size();
var UNIQUE_DATES = validDateCollection.aggregate_count_distinct('date_string');
var OBS_DEFINITION = 'unique_valid_calendar_dates_per_pixel';
var DEDUPLICATION = 'pixelwise_count_distinct_calendar_date_code';

var inventory = ee.FeatureCollection([
  ee.Feature(null, {
    region: REGION,
    sensor: SENSOR,
    script_version: SCRIPT_VERSION,
    method_id: METHOD_ID,
    data_source: DATA_SOURCE,
    aoi_asset: AOI_ASSET,
    aoi_area_km2: AOI_AREA_KM2,
    start_date: START_DATE.format('YYYY-MM-dd'),
    end_date: END_DATE.advance(-1, 'day').format('YYYY-MM-dd'),
    start_year: START_YEAR,
    end_year: END_YEAR,
    raw_images: RAW_IMAGES,
    unique_dates: UNIQUE_DATES,
    audit_scale_m: AUDIT_SCALE,
    audit_crs: AUDIT_CRS,
    obs_definition: OBS_DEFINITION,
    mask_definition: MASK_DEFINITION,
    deduplication: DEDUPLICATION
  })
]);

// ============================================================================
// 8. NÚMERO DE FECHAS ÚNICAS VÁLIDAS POR PÍXEL
// ============================================================================

function validDateCount(collection) {
  var n = collection.size();
  var zero = ee.Image.constant(0).rename('n_valid').toInt16();

  var count = ee.Image(
    ee.Algorithms.If(
      n.gt(0),
      collection.select('date_code')
        .reduce(ee.Reducer.countDistinctNonNull())
        .rename('n_valid')
        .toInt16(),
      zero
    )
  );

  return count.unmask(0, false);
}

// ============================================================================
// 9. RESUMEN DE UN SUBCONJUNTO TEMPORAL
// ============================================================================

function summarizeSubset(rawSubset, validSubset, metadata) {
  var numberDates = validSubset.aggregate_count_distinct('date_string');
  var count = validDateCount(validSubset);

  var countStats = count.reduceRegion({
    reducer: ee.Reducer.percentile([10, 50, 90]),
    geometry: AOI,
    crs: AUDIT_CRS,
    scale: AUDIT_SCALE,
    bestEffort: false,
    maxPixels: MAX_PIXELS,
    tileScale: TILE_SCALE
  });

  var thresholds = ee.Image.cat([
    count.gte(1).rename('ge1'),
    count.gte(3).rename('ge3'),
    count.gte(5).rename('ge5'),
    count.gte(10).rename('ge10')
  ]).toByte();

  var thresholdStats = thresholds.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: AOI,
    crs: AUDIT_CRS,
    scale: AUDIT_SCALE,
    bestEffort: false,
    maxPixels: MAX_PIXELS,
    tileScale: TILE_SCALE
  });

  var p10 = ee.Number(countStats.get('n_valid_p10'));
  var p50 = ee.Number(countStats.get('n_valid_p50'));
  var p90 = ee.Number(countStats.get('n_valid_p90'));

  var rateP10 = ee.Algorithms.If(
    ee.Number(numberDates).gt(0),
    p10.divide(numberDates).multiply(100),
    null
  );

  var rateP50 = ee.Algorithms.If(
    ee.Number(numberDates).gt(0),
    p50.divide(numberDates).multiply(100),
    null
  );

  var rateP90 = ee.Algorithms.If(
    ee.Number(numberDates).gt(0),
    p90.divide(numberDates).multiply(100),
    null
  );

  return ee.Feature(null, metadata).set({
    region: REGION,
    sensor: SENSOR,
    script_version: SCRIPT_VERSION,
    method_id: METHOD_ID,
    data_source: DATA_SOURCE,
    aoi_asset: AOI_ASSET,
    mask_definition: MASK_DEFINITION,
    deduplication: DEDUPLICATION,
    raw_images: rawSubset.size(),
    unique_dates: numberDates,
    valid_obs_p10: p10,
    valid_obs_median: p50,
    valid_obs_p90: p90,
    valid_date_rate_p10_pct: rateP10,
    valid_date_rate_median_pct: rateP50,
    valid_date_rate_p90_pct: rateP90,
    area_ge_1_obs_pct: ee.Number(thresholdStats.get('ge1')).multiply(100),
    area_ge_3_obs_pct: ee.Number(thresholdStats.get('ge3')).multiply(100),
    area_ge_5_obs_pct: ee.Number(thresholdStats.get('ge5')).multiply(100),
    area_ge_10_obs_pct: ee.Number(thresholdStats.get('ge10')).multiply(100),
    aoi_area_km2: AOI_AREA_KM2,
    audit_scale_m: AUDIT_SCALE,
    audit_crs: AUDIT_CRS,
    obs_definition: OBS_DEFINITION
  });
}

// ============================================================================
// 10. RESÚMENES ANUALES Y SEMESTRALES
// ============================================================================

var years = ee.List.sequence(START_YEAR, END_YEAR);

var annualSummary = ee.FeatureCollection(
  years.map(function(year) {
    year = ee.Number(year);
    var start = ee.Date.fromYMD(year, 1, 1);
    var end = start.advance(1, 'year');

    return summarizeSubset(
      rawCollection.filterDate(start, end),
      validDateCollection.filterDate(start, end),
      {
        year: year,
        period: 'ANUAL',
        start: start.format('YYYY-MM-dd'),
        end: end.advance(-1, 'day').format('YYYY-MM-dd')
      }
    );
  })
);

var semester1Summary = ee.FeatureCollection(
  years.map(function(year) {
    year = ee.Number(year);
    var start = ee.Date.fromYMD(year, 1, 1);
    var end = ee.Date.fromYMD(year, 7, 1);

    return summarizeSubset(
      rawCollection.filterDate(start, end),
      validDateCollection.filterDate(start, end),
      {
        year: year,
        period: 'SEMESTRE_1',
        start: start.format('YYYY-MM-dd'),
        end: end.advance(-1, 'day').format('YYYY-MM-dd')
      }
    );
  })
);

var semester2Summary = ee.FeatureCollection(
  years.map(function(year) {
    year = ee.Number(year);
    var start = ee.Date.fromYMD(year, 7, 1);
    var end = ee.Date.fromYMD(year.add(1), 1, 1);

    return summarizeSubset(
      rawCollection.filterDate(start, end),
      validDateCollection.filterDate(start, end),
      {
        year: year,
        period: 'SEMESTRE_2',
        start: start.format('YYYY-MM-dd'),
        end: end.advance(-1, 'day').format('YYYY-MM-dd')
      }
    );
  })
);

var periodSummary = annualSummary
  .merge(semester1Summary)
  .merge(semester2Summary);

// ============================================================================
// 11. CLIMATOLOGÍA MENSUAL 2021–2025
// ============================================================================

var months = ee.List.sequence(1, 12);
var MONTH_NAMES = ee.List([
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]);

var monthlySummary = ee.FeatureCollection(
  months.map(function(month) {
    month = ee.Number(month);

    var rawSubset = rawCollection.filter(
      ee.Filter.calendarRange(month, month, 'month')
    );

    var validSubset = validDateCollection.filter(
      ee.Filter.calendarRange(month, month, 'month')
    );

    return summarizeSubset(
      rawSubset,
      validSubset,
      {
        period: 'MONTHLY_CLIMATOLOGY',
        month: month,
        month_name: MONTH_NAMES.get(month.subtract(1)),
        start_year: START_YEAR,
        end_year: END_YEAR,
        aggregation: 'same_calendar_month_pooled_across_years'
      }
    );
  })
);

// ============================================================================
// 12. CONTROL DE EJECUCIÓN
// ============================================================================

print('============================================================');
print('AUDITORÍA ÓPTICA — T1-CAF-001 v' + SCRIPT_VERSION);
print('AOI asset:', AOI_ASSET);
print('Área AOI [km²]:', AOI_AREA_KM2);
print('Sistema:', SENSOR);
print('Fuente:', DATA_SOURCE);
print('Periodo:', START_YEAR + '–' + END_YEAR);
print('Escala estadística:', AUDIT_SCALE + ' m');
print('CRS estadístico:', AUDIT_CRS);
print('Máscara:', MASK_DEFINITION);
print('Imágenes/gránulos brutos:', RAW_IMAGES);
print('Fechas únicas:', UNIQUE_DATES);
print('Método:', METHOD_ID);
print('Definición valid_obs_*:', OBS_DEFINITION);
print('============================================================');

// ============================================================================
// 13. ESQUEMA DE EXPORTACIÓN
// ============================================================================

var SENSOR_TAG = SENSOR === 'Sentinel-2' ? 'Sentinel2' : 'Landsat';

var INVENTORY_SELECTORS = [
  'region', 'sensor', 'script_version', 'method_id', 'data_source',
  'aoi_asset', 'aoi_area_km2', 'start_date', 'end_date', 'start_year',
  'end_year', 'raw_images', 'unique_dates', 'audit_scale_m', 'audit_crs',
  'obs_definition', 'mask_definition', 'deduplication'
];

var PERIOD_SELECTORS = [
  'region', 'sensor', 'script_version', 'method_id', 'data_source',
  'aoi_asset', 'mask_definition', 'deduplication', 'year', 'period',
  'start', 'end', 'raw_images', 'unique_dates', 'valid_obs_p10',
  'valid_obs_median', 'valid_obs_p90', 'valid_date_rate_p10_pct',
  'valid_date_rate_median_pct', 'valid_date_rate_p90_pct',
  'area_ge_1_obs_pct', 'area_ge_3_obs_pct', 'area_ge_5_obs_pct',
  'area_ge_10_obs_pct', 'aoi_area_km2', 'audit_scale_m', 'audit_crs',
  'obs_definition'
];

var MONTHLY_SELECTORS = [
  'region', 'sensor', 'script_version', 'method_id', 'data_source',
  'aoi_asset', 'mask_definition', 'deduplication', 'month', 'month_name',
  'period', 'start_year', 'end_year', 'aggregation', 'raw_images',
  'unique_dates', 'valid_obs_p10', 'valid_obs_median', 'valid_obs_p90',
  'valid_date_rate_p10_pct', 'valid_date_rate_median_pct',
  'valid_date_rate_p90_pct', 'area_ge_1_obs_pct', 'area_ge_3_obs_pct',
  'area_ge_5_obs_pct', 'area_ge_10_obs_pct', 'aoi_area_km2',
  'audit_scale_m', 'audit_crs', 'obs_definition'
];

// ============================================================================
// 14. EXPORTACIONES
// ============================================================================

Export.table.toDrive({
  collection: inventory,
  description: 'INVENTORY_' + REGION + '_' + SENSOR_TAG,
  folder: DRIVE_FOLDER,
  fileNamePrefix: 'INVENTORY_' + REGION + '_' + SENSOR_TAG,
  fileFormat: 'CSV',
  selectors: INVENTORY_SELECTORS
});

Export.table.toDrive({
  collection: monthlySummary,
  description: 'MONTHLY_' + REGION + '_' + SENSOR_TAG,
  folder: DRIVE_FOLDER,
  fileNamePrefix:
    'MONTHLY_' + REGION + '_' + SENSOR_TAG + '_' + START_YEAR + '_' + END_YEAR,
  fileFormat: 'CSV',
  selectors: MONTHLY_SELECTORS
});

Export.table.toDrive({
  collection: periodSummary,
  description: 'PERIODS_' + REGION + '_' + SENSOR_TAG,
  folder: DRIVE_FOLDER,
  fileNamePrefix:
    'PERIODS_' + REGION + '_' + SENSOR_TAG + '_' + START_YEAR + '_' + END_YEAR,
  fileFormat: 'CSV',
  selectors: PERIOD_SELECTORS
});

// ============================================================================
// 15. FINAL
// ============================================================================

print('Se generaron tres tareas de exportación:');
print('1. INVENTORY');
print('2. MONTHLY');
print('3. PERIODS');
print('');
print('La deduplicación temporal se realiza mediante conteo de códigos de fecha distintos por píxel.');
print('No se construyen mosaicos diarios.');
print('No se materializa una capa raster de cinco años.');
print('Revise Tasks y ejecute las exportaciones.');
