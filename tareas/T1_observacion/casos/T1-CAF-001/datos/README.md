# Datos · T1-CAF-001

Esta carpeta reúne la cartografía base y los resultados derivados de la **auditoría de disponibilidad óptica v2.2** para el departamento del Quindío durante 2021–2025.

La auditoría se diseñó para apoyar una decisión metodológica central del caso: distinguir entre la frecuencia nominal de revisita y la **disponibilidad temporal efectiva de observaciones útiles**.

## Qué responde cada archivo

El script produce tres tipos de salida por sistema de observación:

- **`INVENTORY` — cuánto archivo existe.** Resume imágenes o gránulos, fechas únicas, periodo, AOI y parámetros metodológicos.
- **`MONTHLY` — qué meses suelen ofrecer mejores o peores condiciones de observación.** Agrupa todos los eneros de 2021–2025, todos los febreros, etc.; representa un patrón estacional agregado.
- **`PERIODS` — cómo cambia la disponibilidad entre años y semestres.** Presenta resultados anuales y para enero–junio y julio–diciembre de cada año.

En forma resumida:

```text
INVENTORY = disponibilidad total del archivo
MONTHLY   = patrón estacional mensual agregado
PERIODS   = variación anual y semestral
```

## Archivos disponibles

### Cartografía del área de estudio

- [`limite_quindio.geojson`](limite_quindio.geojson): límite departamental suministrado para T1-CAF-001 y referencia espacial del AOI utilizado en la auditoría. El archivo está definido en **EPSG:32618**.

En Google Earth Engine, la misma geometría se utiliza mediante el asset:

`users/juliangarzonb/limite_quindio`

El GeoJSON se suministra para elaboración cartográfica, inspección espacial y reproducibilidad del caso. No representa por sí mismo la distribución de cultivos de café dentro del departamento.

### Sentinel-2 · v2.2 validada

- `INVENTORY_Quindio_Sentinel2.csv`
- `MONTHLY_Quindio_Sentinel2_2021_2025.csv`
- `PERIODS_Quindio_Sentinel2_2021_2025.csv`

### Landsat 8/9 · v2.2 validada

- `INVENTORY_Quindio_Landsat.csv`
- `MONTHLY_Quindio_Landsat_2021_2025.csv`
- `PERIODS_Quindio_Landsat_2021_2025.csv`

Los seis CSV fueron generados con el mismo AOI, periodo, escala estadística y método de deduplicación. Cada sistema conserva su propio criterio de control de calidad, documentado en `mask_definition`.

## Definiciones esenciales

Los estudiantes deben diferenciar explícitamente:

```text
raw_images   = número de imágenes o gránulos originales
unique_dates = número de fechas calendario distintas con adquisición
valid_obs_*  = número de fechas calendario únicas con observación válida por píxel
```

La definición completa de cada columna se encuentra en [`DICCIONARIO_DATOS.md`](DICCIONARIO_DATOS.md).

## Deduplicación temporal

La versión 2.2 evita el sobreconteo producido cuando varios gránulos o escenas del mismo día cubren un mismo píxel. Cada píxel válido recibe un código de fecha y se cuentan códigos distintos mediante reducción temporal.

Por tanto, `valid_obs_*` representa **fechas calendario únicas válidas por píxel** y no el número bruto de escenas válidas.

## Escala y área de estudio

Las estadísticas espaciales se calculan a **250 m** en **EPSG:32618**. Esta escala es exclusivamente estadística y no modifica la resolución nativa de los productos.

El campo `aoi_area_km2` documenta el área calculada por `ee.Geometry.area()` para la geometría utilizada por Earth Engine. Las reducciones espaciales se realizan explícitamente con la escala y CRS indicados anteriormente.

## Reproducibilidad

El código utilizado para generar los resultados se encuentra en:

[`../scripts/auditoria_disponibilidad_optica_gee.js`](../scripts/auditoria_disponibilidad_optica_gee.js)

La documentación metodológica del script está disponible en:

[`../scripts/README.md`](../scripts/README.md)

Los CSV incluyen metadatos como `script_version`, `method_id`, `data_source`, `aoi_asset`, `mask_definition`, `deduplication`, `audit_scale_m`, `audit_crs` y `obs_definition` para facilitar su trazabilidad.

## Procedencia de los datos satelitales

Los resultados se generan mediante Google Earth Engine a partir de:

- `COPERNICUS/S2_SR_HARMONIZED`
- `LANDSAT/LC08/C02/T1_L2`
- `LANDSAT/LC09/C02/T1_L2`

> `COPERNICUS/S2_SR_HARMONIZED` corresponde a la colección Sentinel-2 de reflectancia de superficie armonizada internamente en Earth Engine y **no** debe confundirse con NASA Harmonized Landsat and Sentinel-2 (HLS).

## Uso en T1-CAF-001

Los archivos se suministran como **evidencia para análisis**, no como conclusiones. El estudiante deberá relacionar la disponibilidad temporal observada con la escala del problema, las características del sistema de observación, las restricciones atmosféricas y la estrategia final recomendada.

---

**Estado:** cartografía base y auditoría Sentinel-2/Landsat 8/9 v2.2 incorporadas y documentadas.
