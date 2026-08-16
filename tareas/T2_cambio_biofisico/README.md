# T2 · Variables biofísicas y cambio espacio-temporal

## Pregunta guía

> **¿Qué información biofísica puede derivarse de las observaciones remotas y cómo ha cambiado espacial y temporalmente?**

## Núcleo técnico

T2 integra el control metodológico de los productos de teledetección con la derivación y análisis de variables continuas o cambios retrospectivos.

El estudiante deberá reconocer el producto utilizado, su nivel de procesamiento, magnitud física, factores de escala, correcciones incorporadas y máscara de calidad antes de comparar observaciones en el tiempo.

## Líneas de trabajo

### T2-A · Variables biofísicas continuas

Ejemplos: NDVI, NDMI, NBR, NDWI, SAVI, LST u otra variable técnicamente justificada.

La TAREA puede incorporar series temporales, diferencias, anomalías, estadística espacial y relaciones con variables externas cuando sean pertinentes.

### T2-B · Cambio categórico retrospectivo

Puede utilizar dos mapas LULC existentes para estudiar persistencias, ganancias, pérdidas, transiciones y localización espacial del cambio. En esta modalidad no se exige que el estudiante clasifique las imágenes ni se realiza predicción.

## Composiciones temporales

Cuando la nubosidad o la densidad de observaciones lo requieran, se utilizarán composiciones temporales justificadas, inicialmente mediante mediana por píxel:

`colección → máscara QA/nubes → ventana temporal → mediana por píxel → producto derivado`

La composición es un estadístico temporal, no una observación instantánea. La ventana temporal y el soporte de observaciones válidas por píxel deben documentarse y justificarse.

## Frontera con las demás TAREAS

T2 no debe convertirse en un ejercicio de PCA/Tasseled Cap ni en una clasificación supervisada. Las transformaciones espectrales dominantes corresponden a T3; clasificación, validación y modelación prospectiva corresponden a T4.

## Estado

Arquitectura académica definida. Los casos específicos de T2 se incorporarán progresivamente al Banco de Casos.
