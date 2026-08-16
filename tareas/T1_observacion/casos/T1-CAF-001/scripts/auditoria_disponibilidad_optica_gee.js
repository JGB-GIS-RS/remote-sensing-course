/***************************************************************
 AUDITORÍA ÓPTICA LIGERA — T1-CAF-001
 Serie Técnica de Teledetección

 OBJETIVO
 Evaluar la disponibilidad temporal de observaciones ópticas
 sobre un departamento del Eje Cafetero sin construir mosaicos
 diarios, evitando exceder los límites interactivos de memoria
 de Google Earth Engine.

 EJECUCIÓN
 Una región + un sistema por ejecución.

 Regiones:
   Quindio
   Caldas
   Risaralda

 Sistemas:
   Sentinel-2
   Landsat  (Landsat 8 + Landsat 9)

 PERIODO PREDETERMINADO
   2021-2025

 SALIDAS
   INVENTORY_<REGION>_<SENSOR>.csv
   MONTHLY_<REGION>_<SENSOR>_2021_2025.csv
   PERIODS_<REGION>_<SENSOR>_2021_2025.csv

 ADVERTENCIA METODOLÓGICA
 Esta versión fue diseñada para auditoría exploratoria a escala
 departamental. `unique_dates` está deduplicado temporalmente,
 pero `valid_obs_*` se calcula sobre los gránulos/escenas
 originales. En zonas de solape, dos gránulos del mismo día
 pueden contribuir al conteo espacial. Los valores de
 `valid_obs_*` deben interpretarse como densidad aproximada de
 observaciones válidas, no como una serie diaria estrictamente
 deduplicada.
***************************************************************/


// =============================================================
// 0. CONFIGURACIÓN
// =============================================================

// Opciones: 'Quindio', 'Caldas', 'Risaralda'
var REGION = 'Quindio';

// Opciones: 'Sentinel-2', 'Landsat'
var SENSOR = 'Sentinel-2';

var START_YEAR = 2021;
var END_YEAR   = 2025;

// Escala exclusivamente estadística para la auditoría regional.
// No modifica la resolución original de los productos.
var AUDIT_SCALE = 250;

var TILE_SCALE = 8;
var MAX_PIXELS = 1e13;

// Sentinel-2: excluir SCL=7 (low probability cloud/unclassified).
var MASK_SCL_7 = true;

var DRIVE_FOLDER = 'GEE_AUDITORIA_CAFETERA';


// =============================================================
// 1. FECHAS
// =============================================================

var START_DATE = ee.Date.fromYMD(START_YEAR, 1, 1);
var END_DATE   = ee.Date.fromYMD(END_YEAR + 1, 1, 1);


// =============================================================
// 2. ÁREA DE ESTUDIO
// =============================================================

var gaul = ee.FeatureCollection(
  'FAO/GAUL_SIMPLIFIED_500m/2015/level1'
);

var colombia = gaul.filter(
  ee.Filter.eq('ADM0_NAME', 'Colombia')
);

var regionFeature;

if (REGION === 'Quindio') {
  regionFeature = ee.Feature(
    colombia
      .filter(ee.Filter.stringStartsWith('ADM1_NAME', 'Quind'))
      .first()
  );
}

if (REGION === 'Caldas') {
  regionFeature = ee.Feature(
    colombia
      .filter(ee.Filter.eq('ADM1_NAME', 'Caldas'))
      .first()
  );
}

if (REGION === 'Risaralda') {
  regionFeature = ee.Feature(
    colombia
      .filter(ee.Filter.eq('ADM1_NAME', 'Risaralda'))
      .first()
  );
}

var AOI = regionFeature.geometry();
var AOI_AREA_KM2 = AOI.area(1).divide(1e6);

Map.centerObject(regionFeature, 9);
Map.addLayer(
  ee.Image().byte().paint(regionFeature, 1, 2),
  {palette: ['yellow']},
  REGION
);

print('==============================================');
print('AUDITORÍA ÓPTICA');
print('Región:', REGION);
print('Sensor:', SENSOR);
print('Periodo:', START_YEAR + '–' + END_YEAR);
print('Área [km²]:', AOI_AREA_KM2);
print('Escala estadística:', AUDIT_SCALE + ' m');
print('==============================================');


// =============================================================
// 3. SENTINEL-2: MÁSCARA DE OBSERVACIÓN VÁLIDA
// =============================================================

function prepareS2Valid(image) {
  var scl = image.select('SCL');

  /*
    SCL
    0  = No data
    1  = Saturated / defective
    2  = Dark area pixels
    3  = Cloud shadows
    4  = Vegetation
    5  = Not vegetated
    6  = Water
    7  = Unclassified / low probability cloud
    8  = Medium probability cloud
    9  = High probability cloud
    10 = Cirrus
    11 = Snow / ice
  */

  var valid = scl.neq(0)
    .and(scl.neq(1))
    .and(scl.neq(3))
    .and(scl.neq(8))
    .and(scl.neq(9))
    .and(scl.neq(10))
    .and(scl.neq(11));

  if (MASK_SCL_7) {
    valid = valid.and(scl.neq(7));
  }

  // Excluir el exterior real del gránulo.
  valid = valid.and(image.select('B4').mask());

  return valid
    .rename('valid')
    .selfMask()
    .toByte()
    .set('system:time_start', image.get('system:time_start'))
    .set('date_string', image.date().format('YYYY-MM-dd'))
    .set('year', image.date().get('year'))
    .set('month', image.date().get('month'));
}


// =============================================================
// 4. LANDSAT 8/9: MÁSCARA DE OBSERVACIÓN VÁLIDA
// =============================================================

function prepareLandsatValid(image) {
  var qa = image.select('QA_PIXEL');

  /*
    QA_PIXEL — Collection 2
    bit 0 = Fill
    bit 1 = Dilated cloud
    bit 2 = Cirrus
    bit 3 = Cloud
    bit 4 = Cloud shadow
    bit 5 = Snow
  */

  var valid = qa.bitwiseAnd(1 << 0).eq(0)
    .and(qa.bitwiseAnd(1 << 1).eq(0))
    .and(qa.bitwiseAnd(1 << 2).eq(0))
    .and(qa.bitwiseAnd(1 << 3).eq(0))
    .and(qa.bitwiseAnd(1 << 4).eq(0))
    .and(qa.bitwiseAnd(1 << 5).eq(0));

  // Excluir saturación radiométrica.
  valid = valid.and(image.select('QA_RADSAT').eq(0));

  // Excluir exterior de la escena.
  valid = valid.and(image.select('SR_B4').mask());

  return valid
    .rename('valid')
    .selfMask()
    .toByte()
    .set('system:time_start', image.get('system:time_start'))
    .set('date_string', image.date().format('YYYY-MM-dd'))
    .set('year', image.date().get('year'))
    .set('month', image.date().get('month'));
}


// =============================================================
// 5. COLECCIÓN SELECCIONADA
// =============================================================

var rawCollection;
var validCollection;

if (SENSOR === 'Sentinel-2') {
  rawCollection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(AOI)
    .filterDate(START_DATE, END_DATE);

  validCollection = rawCollection.map(prepareS2Valid);
}

if (SENSOR === 'Landsat') {
  var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
    .filterBounds(AOI)
    .filterDate(START_DATE, END_DATE);

  var l9 = ee.ImageCollection('LANDSAT/LC09/C02/T1_L2')
    .filterBounds(AOI)
    .filterDate(START_DATE, END_DATE);

  rawCollection = l8.merge(l9);
  validCollection = rawCollection.map(prepareLandsatValid);
}


// =============================================================
// 6. INVENTARIO
// =============================================================

var RAW_IMAGES = validCollection.size();
var UNIQUE_DATES = validCollection.aggregate_count_distinct('date_string');

var inventory = ee.FeatureCollection([
  ee.Feature(null, {
    region: REGION,
    sensor: SENSOR,
    start_year: START_YEAR,
    end_year: END_YEAR,
    area_km2: AOI_AREA_KM2,
    raw_images: RAW_IMAGES,
    unique_dates: UNIQUE_DATES
  })
]);

print('Número bruto de imágenes/gránulos:', RAW_IMAGES);
print('Número de fechas únicas:', UNIQUE_DATES);


// =============================================================
// 7. CONTEO DE OBSERVACIONES VÁLIDAS
// =============================================================

function validObservationCount(collection) {
  var n = collection.size();

  return ee.Image(
    ee.Algorithms.If(
      n.gt(0),
      collection.select('valid').count().rename('n_valid'),
      ee.Image.constant(0).rename('n_valid')
    )
  ).unmask(0);
}


// =============================================================
// 8. RESUMEN DE UN PERIODO
// =============================================================

function summarizePeriod(collection, start, end, periodName, yearLabel) {
  var subset = collection.filterDate(start, end);

  var numberImages = subset.size();
  var numberDates = subset.aggregate_count_distinct('date_string');

  var count = validObservationCount(subset).clip(AOI);

  var countStats = count.reduceRegion({
    reducer: ee.Reducer.percentile([10, 50, 90]),
    geometry: AOI,
    scale: AUDIT_SCALE,
    bestEffort: true,
    maxPixels: MAX_PIXELS,
    tileScale: TILE_SCALE
  });

  var thresholds = ee.Image.cat([
    count.gte(1).rename('ge1'),
    count.gte(3).rename('ge3'),
    count.gte(5).rename('ge5'),
    count.gte(10).rename('ge10')
  ])
  .unmask(0)
  .toByte();

  var thresholdStats = thresholds.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: AOI,
    scale: AUDIT_SCALE,
    bestEffort: true,
    maxPixels: MAX_PIXELS,
    tileScale: TILE_SCALE
  });

  return ee.Feature(null, {
    region: REGION,
    sensor: SENSOR,
    year: yearLabel,
    period: periodName,
    start: ee.Date(start).format('YYYY-MM-dd'),
    end: ee.Date(end).advance(-1, 'day').format('YYYY-MM-dd'),
    raw_images: numberImages,
    unique_dates: numberDates,
    valid_obs_p10: countStats.get('n_valid_p10'),
    valid_obs_median: countStats.get('n_valid_p50'),
    valid_obs_p90: countStats.get('n_valid_p90'),
    area_ge_1_obs_pct: ee.Number(thresholdStats.get('ge1')).multiply(100),
    area_ge_3_obs_pct: ee.Number(thresholdStats.get('ge3')).multiply(100),
    area_ge_5_obs_pct: ee.Number(thresholdStats.get('ge5')).multiply(100),
    area_ge_10_obs_pct: ee.Number(thresholdStats.get('ge10')).multiply(100)
  });
}


// =============================================================
// 9. RESUMEN ANUAL Y SEMESTRAL
// =============================================================

var years = ee.List.sequence(START_YEAR, END_YEAR);

var annualSummary = ee.FeatureCollection(
  years.map(function(year) {
    year = ee.Number(year);
    var start = ee.Date.fromYMD(year, 1, 1);
    var end = start.advance(1, 'year');
    return summarizePeriod(validCollection, start, end, 'ANUAL', year);
  })
);

var semester1Summary = ee.FeatureCollection(
  years.map(function(year) {
    year = ee.Number(year);
    var start = ee.Date.fromYMD(year, 1, 1);
    var end = ee.Date.fromYMD(year, 7, 1);
    return summarizePeriod(validCollection, start, end, 'SEMESTRE_1', year);
  })
);

var semester2Summary = ee.FeatureCollection(
  years.map(function(year) {
    year = ee.Number(year);
    var start = ee.Date.fromYMD(year, 7, 1);
    var end = ee.Date.fromYMD(year.add(1), 1, 1);
    return summarizePeriod(validCollection, start, end, 'SEMESTRE_2', year);
  })
);

var periodSummary = annualSummary
  .merge(semester1Summary)
  .merge(semester2Summary);


// =============================================================
// 10. RESUMEN MENSUAL
//     Enero de todos los años juntos, febrero de todos los años,
//     etc.
// =============================================================

var months = ee.List.sequence(1, 12);

var monthlySummary = ee.FeatureCollection(
  months.map(function(month) {
    month = ee.Number(month);

    var subset = validCollection.filter(
      ee.Filter.calendarRange(month, month, 'month')
    );

    var count = validObservationCount(subset).clip(AOI);
    var numberImages = subset.size();
    var numberDates = subset.aggregate_count_distinct('date_string');

    var countStats = count.reduceRegion({
      reducer: ee.Reducer.percentile([10, 50, 90]),
      geometry: AOI,
      scale: AUDIT_SCALE,
      bestEffort: true,
      maxPixels: MAX_PIXELS,
      tileScale: TILE_SCALE
    });

    return ee.Feature(null, {
      region: REGION,
      sensor: SENSOR,
      month: month,
      raw_images: numberImages,
      unique_dates: numberDates,
      valid_obs_p10: countStats.get('n_valid_p10'),
      valid_obs_median: countStats.get('n_valid_p50'),
      valid_obs_p90: countStats.get('n_valid_p90')
    });
  })
);


// =============================================================
// 11. EXPORTACIONES
// =============================================================

var SENSOR_TAG = SENSOR === 'Sentinel-2' ? 'Sentinel2' : 'Landsat';

Export.table.toDrive({
  collection: inventory,
  description: 'INVENTORY_' + REGION + '_' + SENSOR_TAG,
  folder: DRIVE_FOLDER,
  fileNamePrefix: 'INVENTORY_' + REGION + '_' + SENSOR_TAG,
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: monthlySummary,
  description: 'MONTHLY_' + REGION + '_' + SENSOR_TAG,
  folder: DRIVE_FOLDER,
  fileNamePrefix:
    'MONTHLY_' + REGION + '_' + SENSOR_TAG + '_' +
    START_YEAR + '_' + END_YEAR,
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: periodSummary,
  description: 'PERIODS_' + REGION + '_' + SENSOR_TAG,
  folder: DRIVE_FOLDER,
  fileNamePrefix:
    'PERIODS_' + REGION + '_' + SENSOR_TAG + '_' +
    START_YEAR + '_' + END_YEAR,
  fileFormat: 'CSV'
});

print('==============================================');
print('Se generaron tres tareas:');
print('1. INVENTORY');
print('2. MONTHLY');
print('3. PERIODS');
print('Revise Tasks y ejecute las tres exportaciones.');
print('==============================================');
