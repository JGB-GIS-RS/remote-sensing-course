# Auditoría de disponibilidad óptica · T1-CAF-001

Esta carpeta contiene el script reproducible utilizado para cuantificar la **disponibilidad temporal efectiva de observaciones ópticas** sobre el departamento del Quindío durante 2021–2025.

## Script

[`auditoria_disponibilidad_optica_gee.js`](auditoria_disponibilidad_optica_gee.js) · **versión 2.2**

El script se ejecuta en Google Earth Engine y permite analizar, una misión por ejecución:

- Sentinel-2 MSI mediante `COPERNICUS/S2_SR_HARMONIZED`;
- Landsat 8/9 mediante `LANDSAT/LC08/C02/T1_L2` y `LANDSAT/LC09/C02/T1_L2`.

El área de estudio corresponde al asset `users/juliangarzonb/limite_quindio`.

## Qué responde cada salida

El script genera tres archivos CSV por sistema de observación:

- **`INVENTORY` — cuánto archivo existe.** Resume el número bruto de imágenes o gránulos, el número de fechas únicas, el periodo, el AOI y los principales parámetros metodológicos.
- **`MONTHLY` — qué meses suelen ofrecer mejores o peores condiciones de observación.** Agrupa todos los eneros de 2021–2025, todos los febreros, etc.; por tanto, representa un patrón estacional agregado y no una serie continua de 60 meses.
- **`PERIODS` — cómo cambia la disponibilidad entre años y semestres.** Presenta resultados anuales y para enero–junio y julio–diciembre de cada año.

En forma resumida:

```text
INVENTORY = disponibilidad total del archivo
MONTHLY   = patrón estacional mensual agregado
PERIODS   = variación anual y semestral
```

## Definición operacional de observación válida

La métrica `valid_obs_*` representa el **número de fechas calendario únicas con observación válida por píxel**.

Para evitar sobreconteo en zonas donde varios gránulos o escenas coinciden el mismo día, cada píxel válido recibe un código numérico de fecha y el script cuenta códigos distintos mediante `countDistinctNonNull()`. En consecuencia, una fecha puede contribuir como máximo una vez por píxel, aunque existan varios gránulos válidos ese día.

### Sentinel-2

La máscara utiliza la banda SCL. La versión 2.2 excluye las clases 0, 1, 2, 3, 7, 8, 9, 10 y 11, y controla el footprint mediante B4. Las exclusiones de SCL 2 y SCL 7 se mantienen como parámetros configurables en el script.

### Landsat 8/9

La máscara exige que los bits 0–5 de `QA_PIXEL` sean 0, que `QA_RADSAT = 0` y que el píxel pertenezca al footprint de `SR_B4`.

## Escala de la auditoría

Las estadísticas espaciales se calculan a **250 m** en **EPSG:32618**. Esta escala es exclusivamente estadística y no modifica la resolución nativa de Sentinel-2 ni Landsat.

El campo `aoi_area_km2` corresponde al área calculada por `ee.Geometry.area()` en Earth Engine. Su función es documentar la extensión del AOI utilizado; las reducciones espaciales de la auditoría emplean explícitamente la escala y el CRS indicados anteriormente.

## Uso

1. Abra el script en Google Earth Engine Code Editor.
2. Defina `SENSOR = 'Sentinel-2'` o `SENSOR = 'Landsat'`.
3. Ejecute el código y verifique en Console el AOI, periodo, fuente, máscara, número bruto de imágenes, fechas únicas, escala y CRS.
4. Ejecute en **Tasks** las exportaciones `INVENTORY`, `MONTHLY` y `PERIODS`.
5. Cambie únicamente `SENSOR` y repita para la segunda misión.

Los archivos resultantes se documentan en [`../datos/`](../datos/).

## Reproducibilidad y control de versiones

Si cambia el AOI, el periodo, el criterio de máscara, la escala estadística o la definición de observación válida, deberán regenerarse todas las salidas. Los CSV incluyen `script_version`, `method_id`, `mask_definition`, `deduplication`, `audit_scale_m`, `audit_crs` y otros metadatos para conservar trazabilidad.

La versión 2.2 evita construir mosaicos diarios y evita materializar una capa raster de todo el quinquenio, reduciendo el consumo de memoria sin cambiar la definición científica de la variable de interés.

---

**Estado:** método v2.2 validado con Sentinel-2; ejecución Landsat v2.2 pendiente de incorporación al repositorio.
