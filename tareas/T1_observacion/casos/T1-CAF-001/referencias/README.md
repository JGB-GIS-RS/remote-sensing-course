# Referencias · T1-CAF-001

Esta carpeta reúne una **bibliografía de partida** para T1-CAF-001. Su función es orientar la búsqueda y aportar fuentes técnicas confiables; **no constituye una bibliografía cerrada ni entrega la respuesta del caso**. Cada equipo deberá incorporar las fuentes adicionales que requiera su tercera alternativa, su interpretación espectral y su estrategia final.

El repositorio no almacena copias de artículos con restricciones de copyright. Se proporcionan referencias bibliográficas, DOI y documentación oficial.

> **Alcance del curso:** aunque algunas revisiones citadas discuten sensores activos, T1-CAF-001 se desarrolla dentro del alcance de **teledetección pasiva** definido para la asignatura.

## 1. Teledetección aplicada al cultivo de café

### R1 · Panorama general de métodos y sensores

D. A. Hunt, K. Tabor, J. H. Hewson, M. A. Wood, L. Reymondin, K. Koenig, M. Schmitt-Harsh, and F. Follett, “Review of remote sensing methods to map coffee production systems,” *Remote Sensing*, vol. 12, no. 12, Art. no. 2041, 2020. DOI: [10.3390/rs12122041](https://doi.org/10.3390/rs12122041).

**Utilidad en T1:** comprender los principales desafíos para observar y cartografiar café, incluyendo escala de parcela, similitud espectral con otras coberturas vegetales, sombra, topografía y restricciones de disponibilidad de imágenes.

### R2 · Complejidad estructural y resolución espacial

A. Escobar-López, M. Á. Castillo-Santiago, J. F. Mas, J. L. Hernández-Stefanoni, and J. O. López-Martínez, “Identification of coffee agroforestry systems using remote sensing data: a review of methods and sensor data,” *Geocarto International*, vol. 39, no. 1, Art. no. 2297555, 2024. DOI: [10.1080/10106049.2023.2297555](https://doi.org/10.1080/10106049.2023.2297555).

**Utilidad en T1:** analizar cómo estructura del cultivo, cobertura de sombra, heterogeneidad topográfica y resolución espacial condicionan la discriminación remota de áreas cafeteras.

## 2. Sentinel-2 MSI

### R3 · Características de la misión y del instrumento

European Space Agency, *Sentinel-2 User Handbook*. Disponible en: [Sentinel-2 User Handbook](https://sentinels.copernicus.eu/documents/247904/685211/Sentinel-2_User_Handbook).

**Utilidad en T1:** especificaciones de MSI, bandas, resoluciones espaciales, cobertura, productos y fundamentos de uso de la misión.

### R4 · Producto Level-2A de reflectancia de superficie

European Space Agency, *Copernicus Sentinel-2 MSI Level-2A BOA Reflectance Product, Collection 1*. DOI: [10.5270/S2_-znk9xsj](https://doi.org/10.5270/S2_-znk9xsj).

**Utilidad en T1:** distinguir producto, nivel de procesamiento y magnitud física disponible, y comprender qué correcciones ya incorpora un producto de reflectancia de superficie.

## 3. Landsat 8/9

### R5 · Producto Collection 2 Level-2

U.S. Geological Survey, *Landsat 8-9 Collection 2 Level 2 Science Product Guide*, LSDS-1619. Disponible en: [USGS Landsat 8-9 Collection 2 Level-2 Science Product Guide](https://www.usgs.gov/media/files/landsat-8-9-collection-2-level-2-science-product-guide).

Dataset asociado: Earth Resources Observation and Science (EROS) Center, *Landsat 8-9 Operational Land Imager / Thermal Infrared Sensor Level-2, Collection 2*, 2020. DOI: [10.5066/P9OGBGM6](https://doi.org/10.5066/P9OGBGM6).

**Utilidad en T1:** documentar Surface Reflectance, Surface Temperature, bandas QA, nivel de procesamiento y características del producto Landsat empleado en la auditoría.

## 4. Integración Landsat–Sentinel-2

### R6 · Fundamento científico de HLS

M. Claverie, J. Ju, J. G. Masek, J. L. Dungan, E. F. Vermote, J.-C. Roger, S. V. Skakun, and C. Justice, “The Harmonized Landsat and Sentinel-2 surface reflectance data set,” *Remote Sensing of Environment*, vol. 219, pp. 145–161, 2018. DOI: [10.1016/j.rse.2018.09.002](https://doi.org/10.1016/j.rse.2018.09.002).

**Utilidad en T1:** comprender por qué Landsat y Sentinel-2 no deben asumirse como directamente intercambiables y qué operaciones de armonización pueden requerirse al construir una serie multisensor.

### R7 · HLS versión 2.0

J. Ju et al., “The Harmonized Landsat and Sentinel-2 version 2.0 surface reflectance dataset,” *Remote Sensing of Environment*, vol. 324, Art. no. 114723, 2025. DOI: [10.1016/j.rse.2025.114723](https://doi.org/10.1016/j.rse.2025.114723).

Documentación operativa: [NASA Harmonized Landsat Sentinel-2](https://hls.gsfc.nasa.gov/).

**Utilidad en T1:** conocer el estado actual de la familia HLS y evaluar una alternativa de integración cuando la estrategia propuesta combine observaciones Landsat y Sentinel-2.

> **Importante:** HLS es un **producto armonizado / constelación virtual**, no un sensor. Asimismo, `COPERNICUS/S2_SR_HARMONIZED` en Earth Engine no es HLS.

## 5. Documentación de implementación en Google Earth Engine

Estas fuentes documentan los datasets y operaciones utilizadas por el script suministrado. Sirven para **reproducibilidad computacional**, pero no sustituyen literatura científica para justificar interpretaciones biofísicas.

- Sentinel-2 SR: [`COPERNICUS/S2_SR_HARMONIZED`](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED)
- Landsat 8 C2 L2: [`LANDSAT/LC08/C02/T1_L2`](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_L2)
- Landsat 9 C2 L2: [`LANDSAT/LC09/C02/T1_L2`](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC09_C02_T1_L2)
- Conteo de valores distintos no nulos: [`ee.Reducer.countDistinctNonNull()`](https://developers.google.com/earth-engine/apidocs/ee-reducer-countdistinctnonnull)

## Cómo utilizar esta bibliografía

La fuente debe elegirse según la afirmación que se quiera sustentar:

| Necesidad | Fuente recomendada |
|---|---|
| Desafíos específicos de observar café | R1–R2 |
| Especificaciones de Sentinel-2 | R3–R4 |
| Especificaciones y procesamiento Landsat | R5 |
| Compatibilidad e integración Landsat–Sentinel-2 | R6–R7 |
| Dataset o función concreta usada en GEE | documentación de implementación |

No es correcto utilizar el catálogo de Earth Engine como única evidencia para explicar el comportamiento espectral del café, ni utilizar una revisión científica para atribuir parámetros específicos a un producto satelital cuando existe documentación oficial de la misión.

---

**Estado:** bibliografía base v1.0 · T1-CAF-001.
