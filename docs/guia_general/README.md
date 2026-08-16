# Guía general del curso de Teledetección

Esta guía documenta la arquitectura académica del curso y la lógica de la **Serie Técnica de Teledetección**.

## Documentos de referencia

- [`Guía para autores · Serie Técnica de Teledetección`](guia_para_autores.md) — **versión 1.0 · norma editorial oficial**.
- [`Normas editoriales`](../normas_editoriales/README.md).
- [`Rúbricas`](../rubricas/README.md).

## Principio formativo

El curso se organiza alrededor de problemas técnicos, no de secuencias de software. La evaluación prioriza la capacidad del estudiante para formular el problema, seleccionar y comprender los datos, justificar el método, producir evidencia, reconocer incertidumbre y convertir los resultados en una decisión técnica.

> **Se evalúan decisiones técnicamente sustentadas, no secuencias de botones.**

## Progresión

`observar → medir el cambio → transformar e interpretar → clasificar, validar y modelar`

### T1 · Observación

Pregunta guía: **¿Cómo debe observarse el fenómeno?**

Fundamentos físicos, interacción radiación–materia, sensores, resoluciones, productos y estrategia de observación.

### T2 · Cambio biofísico

Pregunta guía: **¿Qué información biofísica puede derivarse y cómo cambia espacial y temporalmente?**

Integra control metodológico de productos y correcciones con variables derivadas, series temporales y composiciones temporales justificadas.

### T3 · Transformaciones

Pregunta guía: **¿Qué transformación o representación espectral caracteriza mejor las estructuras y coberturas del área estudiada?**

Composiciones, firmas espectrales, índices, PCA y Tasseled Cap, con énfasis en interpretación y reducción de redundancia.

### T4 · Clasificación y modelado

Pregunta guía: **¿Cómo clasificar, validar y modelar el cambio territorial?**

Clasificación LULC, validación independiente, análisis de transición y, cuando sea defendible, modelación prospectiva condicionada.

## Capítulo 2 como requisito transversal

La calibración y corrección de imágenes no se convierten en una TAREA independiente. En los trabajos posteriores el estudiante debe reconocer qué producto utiliza, su nivel de procesamiento, la magnitud física disponible, factores de escala, correcciones incorporadas y mecanismos de control de calidad.

No se exige reprocesar por ritual un producto que ya incorpora las correcciones necesarias.

## Informes técnicos

Cada TAREA culmina en un Informe Técnico de la Serie. La estructura editorial principal es común; las subsecciones se adaptan al problema.

Los informes deben separar con claridad **Resultados**, **Discusión**, **Recomendación técnica** y **Conclusiones**, documentar la reproducibilidad y declarar alcance, limitaciones e incertidumbre.

## Banco de casos

Los casos se identifican con el esquema `TAREA–FAMILIA–NÚMERO`, por ejemplo `T1-CAF-001`. El código identifica el caso y permite controlar versiones sin incorporar territorio, sensor o periodo en el identificador.

El repositorio público contiene los materiales necesarios para desarrollar y reproducir los casos. Las claves docentes, soluciones esperadas, historial de asignación y decisiones internas de rotación no forman parte del repositorio estudiantil.
