# T1-CAF-001 · Diseño de una estrategia de observación remota para cultivos de café en el departamento del Quindío

**Serie Técnica de Teledetección · Informe Técnico No. 01**

## Planteamiento del caso

La caficultura del Quindío se desarrolla en un paisaje andino caracterizado por relieve complejo, alta heterogeneidad espacial, unidades productivas de diferentes tamaños, coexistencia con otras coberturas vegetales y una disponibilidad de observaciones ópticas condicionada por la nubosidad.

Se requiere diseñar una **estrategia de observación remota** que permita caracterizar y realizar seguimiento de los cultivos de café mediante teledetección pasiva.

La selección de una plataforma, sensor o producto no deberá fundamentarse exclusivamente en especificaciones nominales como resolución espacial, número de bandas o frecuencia de revisita. La pertinencia de la estrategia dependerá de la relación entre:

`fenómeno → respuesta observable → escala → disponibilidad temporal → sistema de observación`

El problema no consiste en determinar qué sensor es “mejor”, sino en establecer qué sistema o combinación de sistemas responde de manera técnicamente consistente a las condiciones del territorio y al propósito de observación.

## Desafío técnico

> **¿Qué sistema o combinación de sistemas de teledetección pasiva resulta técnicamente más adecuado para caracterizar y realizar seguimiento de cultivos de café en el departamento del Quindío, considerando la observabilidad espectral del fenómeno, la escala espacial, la disponibilidad temporal efectiva y las limitaciones de los productos disponibles?**

La respuesta deberá culminar en una **estrategia de observación técnicamente sustentada**. No existe una misión o sensor establecido previamente como respuesta correcta.

## Objetivo

**Diseñar y justificar una estrategia de observación remota para cultivos de café en el Quindío mediante el análisis integrado de los requerimientos de observación, la respuesta espectral esperada, la adecuación espacial, la disponibilidad temporal efectiva y las capacidades y limitaciones de diferentes sistemas de teledetección pasiva.**

## Sistemas de observación

Cada equipo deberá analizar **como mínimo tres alternativas técnicamente plausibles**.

Dos son comunes a todos los equipos:

- Sentinel-2 MSI.
- Landsat 8/9.

La tercera alternativa será seleccionada por el equipo y deberá responder a una razón técnica explícita. Podrán considerarse otras misiones satelitales, productos armonizados, sensores de mayor o menor resolución espacial, plataformas UAV u otros sistemas pasivos pertinentes.

La alternativa adicional no será evaluada por su sofisticación, sino por la calidad de la justificación que sustente su inclusión. Concluir que una alternativa no resulta recomendable también constituye un resultado válido si la decisión está técnicamente demostrada.

## Información suministrada

El caso dispone de información base para que el análisis se concentre en la toma de decisiones:

- delimitación y cartografía básica del territorio de referencia;
- información de contexto sobre el paisaje cafetero;
- inventario de adquisiciones Sentinel-2 para 2021–2025;
- inventario de adquisiciones Landsat 8/9 para 2021–2025;
- estadísticas mensuales de disponibilidad;
- estadísticas anuales y semestrales de observaciones válidas.

Los datos suministrados constituyen **evidencia para ser interpretada**, no conclusiones del ejercicio.

## Decisiones técnicas que debe resolver el informe

### 1. ¿Qué necesita ser observado?

Antes de seleccionar un sensor, el equipo deberá establecer qué propiedades del sistema cafetero son relevantes para una estrategia de caracterización y seguimiento, diferenciando entre:

`fenómeno → variable o propiedad biofísica → respuesta observable por el sensor`

No deberá atribuirse a una imagen capacidad para medir directamente propiedades que solo puedan inferirse de manera indirecta.

### 2. ¿Dónde se encuentra la información espectral relevante?

El análisis deberá relacionar las propiedades de interés con las regiones del espectro potencialmente útiles, particularmente **VIS, NIR y SWIR**, y cuando exista justificación técnica, **TIR**.

No será suficiente afirmar que una banda “sirve para vegetación”. La argumentación deberá relacionar la respuesta observada con procesos de absorción, reflexión, transmisión, pigmentos, estructura foliar, contenido de agua o temperatura, según corresponda.

### 3. ¿La resolución espacial responde a la escala del problema?

El estudiante deberá analizar explícitamente la relación:

`estructura y tamaño del objeto ↔ tamaño del píxel`

La discusión deberá considerar, cuando corresponda, tamaño de las unidades productivas, fragmentación, mosaicos de coberturas, vegetación asociada, topografía, sombras, píxeles mixtos y diferencias entre escalas de planta, predio, paisaje y región.

No se aceptará como argumento suficiente que una resolución espacial menor sea automáticamente “mejor”.

### 4. ¿Con qué frecuencia puede observarse realmente el territorio?

Deberá diferenciarse explícitamente entre **frecuencia nominal de revisita** y **disponibilidad efectiva de observaciones**.

Los datos 2021–2025 deberán utilizarse para analizar número de adquisiciones, fechas disponibles, observaciones válidas, variabilidad interanual e intraanual, periodos favorables, periodos restrictivos y efecto de nubes y sombras.

### 5. ¿Qué producto de datos resulta apropiado?

Para las alternativas consideradas deberá identificarse, cuando corresponda:

- misión y sensor;
- producto y nivel de procesamiento;
- magnitud física disponible;
- resolución espacial, espectral, temporal y radiométrica;
- bandas relevantes;
- información de calidad;
- principales correcciones incorporadas.

El propósito no es reproducir una ficha técnica, sino comprender **qué dato se está utilizando y qué procesamiento recibió antes de llegar al usuario**.

### 6. ¿Pueden integrarse directamente observaciones de diferentes misiones?

Si el equipo propone una estrategia multisensor, deberá establecer si los productos seleccionados pueden integrarse directamente en una misma serie temporal.

La discusión deberá considerar posibles diferencias espectrales, radiométricas, espaciales, geométricas, de resolución y de geometría de observación. Cuando corresponda, deberá investigarse si existen procedimientos o productos diseñados específicamente para mejorar la comparabilidad entre las misiones consideradas.

No se exige encontrar una tecnología concreta por su nombre: se evalúa la capacidad para **identificar el problema de compatibilidad y proponer una solución metodológicamente defendible**.

## Evidencias técnicas obligatorias

### E1. Contexto territorial

Mapa técnicamente elaborado que permita comprender localización, configuración territorial, relieve cuando sea pertinente y contexto general de las áreas cafeteras.

### E2. Evidencia espectral

Al menos una figura elaborada por el equipo que permita analizar el comportamiento espectral de superficies relevantes. La información podrá provenir de bibliotecas espectrales, datos satelitales, mediciones documentadas, literatura científica u otras fuentes trazables.

### E3. Evidencia de adecuación espacial

Representación o análisis que permita sustentar la relación entre resolución espacial y escala del sistema cafetero.

### E4. Evidencia temporal

Al menos una representación gráfica propia obtenida a partir de los datos suministrados que permita caracterizar la disponibilidad efectiva de observaciones. No se aceptará como evidencia principal una captura de pantalla de los archivos CSV.

### E5. Comparación de alternativas

Matriz técnica que permita contrastar, como mínimo:

- capacidad espectral;
- adecuación espacial;
- disponibilidad temporal efectiva;
- restricciones atmosféricas;
- producto y nivel de procesamiento;
- accesibilidad de los datos;
- principales limitaciones.

Si se utilizan puntuaciones o ponderaciones, deberán explicarse y justificarse.

## Producto técnico principal

El resultado fundamental de la TAREA será una:

> **Estrategia de observación remota para cultivos de café en el Quindío.**

La estrategia deberá establecer, como mínimo:

- sistema principal recomendado;
- sistema complementario, si resulta necesario;
- producto o productos de datos;
- regiones o bandas espectrales prioritarias;
- escala espacial de aplicación;
- estrategia temporal;
- tratamiento de las restricciones atmosféricas;
- condiciones bajo las cuales la estrategia es válida;
- principales limitaciones e incertidumbres.

## Estructura del Informe Técnico No. 01

La estructura principal conserva la arquitectura editorial de la **Serie Técnica de Teledetección**.

### Resumen

Problema, enfoque de evaluación, alternativas consideradas, principal resultado, estrategia recomendada y limitación fundamental.

### 1. Introducción

Problema técnico, pertinencia de la teledetección, antecedentes estrictamente necesarios y objetivo del estudio.

### 2. Área de estudio y datos

#### 2.1. Área de estudio

Caracterización breve del Quindío en función del problema de observación.

#### 2.2. Datos

Sistemas evaluados, productos, características relevantes, estadísticas de disponibilidad suministradas y fuentes complementarias.

### 3. Metodología

#### 3.1. Diseño de la evaluación

Flujo general recomendado:

`requerimientos → observabilidad espectral → adecuación espacial → disponibilidad temporal → comparación → estrategia`

#### 3.2. Requerimientos de observación y análisis espectral

#### 3.3. Evaluación de la adecuación espacial

#### 3.4. Evaluación de la disponibilidad temporal efectiva

#### 3.5. Comparación de los sistemas de observación

#### 3.6. Compatibilidad e integración de observaciones

Esta subsección se incluirá cuando la estrategia considere combinar diferentes misiones.

### 4. Resultados

#### 4.1. Observabilidad espectral y adecuación espacial

#### 4.2. Disponibilidad temporal efectiva

#### 4.3. Comparación de alternativas

#### 4.4. Estrategia de observación resultante

Los Resultados deberán presentar **qué se obtuvo**, evitando repetir el procedimiento descrito en Metodología.

### 5. Discusión

Interpretación de los compromisos entre resolución espacial y temporal, nubosidad, píxeles mixtos, complementariedad entre sistemas, integración de misiones y transferibilidad de la estrategia.

#### 5.1. Alcance de los resultados e incertidumbre metodológica

Identificación explícita de incertidumbres, restricciones de la auditoría temporal, limitaciones de escala, restricciones de los productos, supuestos realizados y aspectos que no pueden inferirse con la evidencia disponible.

### 6. Recomendación técnica

Debe convertir los resultados en una decisión profesional y responder: **¿qué sistema utilizaría, con qué producto, para qué escala, con qué estrategia temporal y bajo qué condiciones confiaría en la información obtenida?**

### 7. Conclusiones

Conclusiones derivadas directamente de los resultados y vinculadas con el objetivo.

### Disponibilidad de datos y código

Identificación de datos suministrados, datos externos, fuentes, scripts o procedimientos desarrollados y productos generados.

### Referencias

Según las normas editoriales de la Serie Técnica de Teledetección.

## Alcance de la TAREA

T1 **no exige** cálculo sistemático de índices, generación de composiciones temporales, PCA, Tasseled Cap, clasificación supervisada, mapas LULC, matrices de confusión, MOLUSCE ni modelación de cambios. Estos procedimientos podrán mencionarse como etapas posteriores, pero no constituyen productos de evaluación de esta TAREA.

## Condiciones de desarrollo

- Máximo dos autores por informe.
- El análisis deberá ser reproducible y las fuentes deberán quedar documentadas.
- Figuras y tablas deberán citarse en el texto antes de su aparición.
- Los resultados no deberán duplicarse simultáneamente en texto, figura y tabla.
- Toda afirmación técnica relevante deberá sustentarse en datos, fundamentos físicos o literatura científica.
- La recomendación deberá derivarse de la evidencia presentada.
- Las limitaciones e incertidumbres deberán declararse explícitamente.

## Criterio de éxito

La TAREA no se considera resuelta por haber seleccionado correctamente el nombre de un sensor. El trabajo será satisfactorio cuando exista coherencia demostrable entre:

`problema + fundamento físico + escala + evidencia temporal + producto + decisión`

Un informe técnicamente sólido podrá concluir que una misión es suficiente, que dos sistemas son complementarios, que una solución armonizada es conveniente, que una alternativa resulta inadecuada o que determinadas escalas no pueden resolverse satisfactoriamente mediante sensores satelitales.

## Pregunta integradora final

> **Si usted fuera responsable de diseñar el sistema de observación de los cultivos de café del Quindío, ¿qué información adquiriría, mediante qué sistema, con qué frecuencia y bajo qué condiciones confiaría en ella?**

---

**Versión del caso:** 1.0 · **Estado:** piloto desarrollado, pendiente de aplicación estudiantil.
