# Diccionario de datos · Auditoría óptica T1-CAF-001

Este documento define las variables exportadas por [`../scripts/auditoria_disponibilidad_optica_gee.js`](../scripts/auditoria_disponibilidad_optica_gee.js), versión 2.2.

Los archivos se diseñaron para distinguir tres conceptos que **no deben confundirse**:

```text
raw_images   = imágenes o gránulos originales
unique_dates = fechas calendario distintas con adquisición
valid_obs_*  = fechas calendario únicas con observación válida por píxel
```

## Archivos

| Archivo | Pregunta que responde |
|---|---|
| `INVENTORY_Quindio_<SENSOR>.csv` | ¿Cuánto archivo existe para el periodo completo? |
| `MONTHLY_Quindio_<SENSOR>_2021_2025.csv` | ¿Qué meses suelen ofrecer mejores o peores condiciones de observación? |
| `PERIODS_Quindio_<SENSOR>_2021_2025.csv` | ¿Cómo cambia la disponibilidad entre años y semestres? |

`MONTHLY` es una **climatología mensual agregada**: cada fila agrupa el mismo mes calendario de todos los años 2021–2025. No representa una serie temporal continua de 60 meses.

## Variables de identificación y trazabilidad

| Variable | Significado |
|---|---|
| `region` | Nombre de la región analizada. |
| `sensor` | Sistema evaluado: `Sentinel-2` o `Landsat`. |
| `script_version` | Versión del script que generó la salida. |
| `method_id` | Identificador corto del método de conteo de fechas válidas. |
| `data_source` | Colección o colecciones de Google Earth Engine utilizadas. |
| `aoi_asset` | Asset de Earth Engine utilizado como área de estudio. |
| `aoi_area_km2` | Área del AOI, en km², calculada mediante `ee.Geometry.area()`. |
| `audit_scale_m` | Escala espacial, en metros, utilizada para las estadísticas. |
| `audit_crs` | Sistema de referencia empleado en las reducciones espaciales. |
| `obs_definition` | Definición operacional de la observación válida. |
| `mask_definition` | Resumen del criterio de máscara de calidad aplicado. |
| `deduplication` | Regla utilizada para impedir que una misma fecha se cuente varias veces por píxel. |

## Variables temporales

| Variable | Significado |
|---|---|
| `start_date` | Fecha inicial del inventario general. |
| `end_date` | Fecha final del inventario general. |
| `start_year` | Año inicial del intervalo representado. |
| `end_year` | Año final del intervalo representado. |
| `year` | Año al que corresponde una fila de `PERIODS`. |
| `period` | Tipo de resumen: `ANUAL`, `SEMESTRE_1`, `SEMESTRE_2` o `MONTHLY_CLIMATOLOGY`. |
| `start` | Fecha inicial del periodo anual o semestral. |
| `end` | Fecha final del periodo anual o semestral. |
| `month` | Número del mes, de 1 a 12. |
| `month_name` | Nombre del mes. |
| `aggregation` | Regla de agregación utilizada en `MONTHLY`. |

## Disponibilidad del archivo

| Variable | Significado |
|---|---|
| `raw_images` | Número de imágenes o gránulos originales que intersectan el AOI durante el periodo. Puede ser mayor que `unique_dates` cuando existen varios gránulos o escenas en una misma fecha. |
| `unique_dates` | Número de fechas calendario distintas con al menos una adquisición que intersecta el AOI. |

## Observaciones válidas por píxel

La versión 2.2 asigna a cada píxel válido un código de fecha calendario y cuenta valores distintos. Por ello, una fecha contribuye **como máximo una vez por píxel**, incluso si varios gránulos válidos coinciden ese día.

| Variable | Significado |
|---|---|
| `valid_obs_p10` | Percentil 10 espacial del número de fechas únicas válidas por píxel. El 90 % del territorio presenta un valor igual o superior aproximadamente a este nivel. |
| `valid_obs_median` | Mediana espacial (P50) del número de fechas únicas válidas por píxel. |
| `valid_obs_p90` | Percentil 90 espacial del número de fechas únicas válidas por píxel. |

Estos percentiles describen **variabilidad espacial dentro del AOI**, no percentiles entre fechas.

## Tasa de fechas válidas

Estas variables normalizan `valid_obs_*` respecto al número de fechas únicas disponibles en el periodo:

\[
\text{valid\_date\_rate} = \frac{\text{fechas válidas por píxel}}{\text{unique\_dates}}\times 100
\]

| Variable | Significado |
|---|---|
| `valid_date_rate_p10_pct` | P10 espacial de fechas válidas expresado como porcentaje de `unique_dates`. |
| `valid_date_rate_median_pct` | Mediana espacial de fechas válidas expresada como porcentaje de `unique_dates`. |
| `valid_date_rate_p90_pct` | P90 espacial de fechas válidas expresado como porcentaje de `unique_dates`. |

Esta normalización ayuda a comparar periodos o sistemas con distinta densidad de adquisiciones.

## Cobertura territorial por umbral

| Variable | Significado |
|---|---|
| `area_ge_1_obs_pct` | Porcentaje del AOI con al menos 1 fecha válida. |
| `area_ge_3_obs_pct` | Porcentaje del AOI con al menos 3 fechas válidas. |
| `area_ge_5_obs_pct` | Porcentaje del AOI con al menos 5 fechas válidas. |
| `area_ge_10_obs_pct` | Porcentaje del AOI con al menos 10 fechas válidas. |

Los umbrales permiten evaluar no solo cuántas observaciones existen en promedio, sino **qué proporción del territorio alcanza una densidad temporal mínima**.

## Lectura recomendada

La interpretación debe avanzar desde la disponibilidad nominal hacia la disponibilidad efectiva:

```text
imágenes/gránulos
      ↓
fechas únicas
      ↓
fechas válidas por píxel
      ↓
distribución espacial de la disponibilidad
      ↓
implicaciones para la estrategia de observación
```

Los CSV constituyen evidencia para el análisis del caso. No representan por sí mismos una conclusión sobre cuál sensor es el más adecuado.
