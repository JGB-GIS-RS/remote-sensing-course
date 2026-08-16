# Remote Sensing Course · Serie Técnica de Teledetección

Repositorio académico del curso de **Teledetección** del Programa de Ingeniería Topográfica y Geomática de la Universidad del Quindío.

El curso se organiza mediante problemas técnicos que exigen justificar decisiones de observación, procesamiento, interpretación, validación y modelación. Cada TAREA culmina en un **Informe Técnico de la Serie Técnica de Teledetección** con énfasis en reproducibilidad, evidencia y argumentación técnica.

## Arquitectura del curso

| TAREA | Núcleo técnico | Pregunta guía |
|---|---|---|
| **T1 · Observación** | Fundamentos, sensores y estrategia de observación | ¿Cómo debe observarse el fenómeno? |
| **T2 · Cambio biofísico** | Variables derivadas y análisis espacio-temporal | ¿Qué información biofísica puede derivarse y cómo cambia? |
| **T3 · Transformaciones** | Composiciones, índices, PCA y Tasseled Cap | ¿Qué representación espectral caracteriza mejor el territorio? |
| **T4 · Clasificación y modelado** | Clasificación, validación y modelación de cambio | ¿Cómo clasificar, validar y modelar el cambio territorial? |

La progresión general es:

`observar → medir el cambio → transformar e interpretar → clasificar, validar y modelar`

## Serie Técnica de Teledetección

Los informes conservan una estructura editorial común:

1. Introducción
2. Área de estudio y datos
3. Metodología
4. Resultados
5. Discusión
6. Recomendación técnica
7. Conclusiones
8. Disponibilidad de datos y código
9. Referencias

Las subsecciones se adaptan al problema específico de cada TAREA.

## Primer caso disponible

### T1-CAF-001 · Sistemas cafeteros del Quindío

**Diseño de una estrategia de observación remota para sistemas cafeteros del Quindío.**

El caso evalúa la pertinencia de diferentes sistemas de teledetección pasiva mediante el análisis conjunto de respuesta espectral, escala espacial, disponibilidad temporal efectiva y características de los productos de datos.

Ruta: [`tareas/T1_observacion/casos/T1-CAF-001`](tareas/T1_observacion/casos/T1-CAF-001/)

## Organización del repositorio

```text
remote-sensing-course/
├── docs/                 # Guías, normas editoriales y rúbricas
├── template/             # Plantilla de la Serie Técnica
├── tareas/               # T1–T4 y banco de casos
├── scripts/              # Flujos reproducibles de GEE/Python
└── examples/             # Ejemplos docentes y productos de referencia
```

## Principio de evaluación

> **Se evalúan decisiones técnicamente sustentadas, no secuencias de botones.**

Un producto cartográfico o computacional solo constituye evidencia cuando la selección de datos, el método, la validación, las limitaciones y la interpretación están justificadas.

## Reproducibilidad

Los casos pueden incluir datos derivados, scripts y documentación necesaria para reproducir los análisis. Las fuentes externas deben conservar su atribución y condiciones de uso originales.

## Licencia

Este repositorio conserva la licencia definida en [`LICENSE`](LICENSE). Los datos de terceros mantienen sus propias licencias y términos de uso.

---

**Universidad del Quindío · Facultad de Ingeniería · Programa de Ingeniería Topográfica y Geomática**
