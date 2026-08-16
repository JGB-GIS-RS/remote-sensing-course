# Datos · T1-CAF-001

Esta carpeta contiene resultados derivados de la auditoría exploratoria de disponibilidad óptica realizada para el departamento del Quindío durante 2021–2025.

## Archivos

- `INVENTORY_Quindio_Sentinel2.csv`: inventario general de adquisiciones Sentinel-2.
- `MONTHLY_Quindio_Sentinel2_2021_2025.csv`: resumen mensual de disponibilidad Sentinel-2.
- `PERIODS_Quindio_Sentinel2_2021_2025.csv`: resumen anual y semestral Sentinel-2.
- `PERIODS_Quindio_Landsat_2021_2025.csv`: resumen anual y semestral Landsat 8/9.

## Interpretación

Los archivos se suministran como **evidencia para análisis**, no como conclusiones del caso. Los estudiantes deberán distinguir entre número bruto de imágenes/gránulos, fechas únicas de adquisición y número de observaciones válidas por píxel.

## Advertencia metodológica

La auditoría departamental fue diseñada como una evaluación exploratoria de viabilidad. Para reducir la carga computacional en Google Earth Engine se utilizó una escala estadística de 250 m y, en los conteos espaciales, se trabajó con las imágenes/gránulos originales sin construir mosaicos diarios estrictamente deduplicados. En zonas de solape entre gránulos Sentinel-2, un mismo día puede aportar más de un registro válido al conteo espacial.

Por tanto:

- `unique_dates` sí representa fechas distintas de adquisición;
- `valid_obs_*` debe interpretarse como **densidad aproximada de observaciones válidas** para esta auditoría exploratoria;
- los valores no deben tratarse como una serie temporal definitiva a escala de píxel sin una deduplicación por fecha y una auditoría a la escala de la AOI final.

## Procedencia

Los datos fueron generados mediante Google Earth Engine a partir de:

- `COPERNICUS/S2_SR_HARMONIZED`
- `LANDSAT/LC08/C02/T1_L2`
- `LANDSAT/LC09/C02/T1_L2`

Los límites departamentales utilizados para la auditoría exploratoria provienen de `FAO/GAUL_SIMPLIFIED_500m/2015/level1`.
