# Remote Sensing Course · Serie Técnica de Teledetección

Repositorio académico del curso de **Teledetección** del Programa de Ingeniería Topográfica y Geomática de la Universidad del Quindío.

El curso se organiza mediante problemas técnicos que exigen justificar decisiones de observación, procesamiento, interpretación, validación y modelación. Cada TAREA culmina en un **Informe Técnico de la Serie Técnica de Teledetección** con énfasis en reproducibilidad, evidencia y argumentación técnica.

## Arquitectura del curso

| TAREA | Núcleo técnico | Pregunta guía |
|---|---|---|
| [**T1 · Observación**](tareas/T1_observacion/) | Fundamentos, sensores y estrategia de observación | ¿Cómo debe observarse el fenómeno? |
| [**T2 · Cambio biofísico**](tareas/T2_cambio_biofisico/) | Variables derivadas y análisis espacio-temporal | ¿Qué información biofísica puede derivarse y cómo cambia? |
| [**T3 · Transformaciones**](tareas/T3_transformaciones/) | Composiciones, índices, PCA y Tasseled Cap | ¿Qué representación espectral caracteriza mejor el territorio? |
| [**T4 · Clasificación y modelado**](tareas/T4_clasificacion_modelado/) | Clasificación, validación y modelación de cambio | ¿Cómo clasificar, validar y modelar el cambio territorial? |

La progresión general es:

`observar → medir el cambio → transformar e interpretar → clasificar, validar y modelar`

## Serie Técnica de Teledetección

Los informes conservan una arquitectura editorial común.

**Elementos preliminares no numerados:** Título, Autores, Resumen y Palabras clave.

**Secciones numeradas:**

1. Introducción
2. Área de estudio y datos
3. Metodología
4. Resultados
5. Discusión
6. Recomendación técnica
7. Conclusiones

**Elementos finales no numerados:** Disponibilidad de datos y código; Referencias.

Las subsecciones se adaptan al problema específico de cada TAREA.

Documentación del curso:

- [Guía general](docs/guia_general/)
- [Normas editoriales](docs/normas_editoriales/)
- [Marco de rúbricas](docs/rubricas/)
- [Informe técnico de referencia y base editable](examples/informe_tecnico_02/)

El **Informe Técnico No. 02** funciona simultáneamente como ejemplo editorial terminado y como base editable de trabajo. El estudiante conserva su configuración, estilos y arquitectura principal, pero debe sustituir completamente el contenido científico y adaptar las subsecciones al problema específico de cada TAREA.

## Primer caso disponible

### T1-CAF-001 · Cultivos de café en el Quindío

**Diseño de una estrategia de observación remota para cultivos de café en el departamento del Quindío.**

El caso evalúa la pertinencia de diferentes sistemas de teledetección pasiva mediante el análisis conjunto de respuesta espectral, escala espacial, disponibilidad temporal efectiva y características de los productos de datos.

- [Enunciado del caso](tareas/T1_observacion/casos/T1-CAF-001/)
- [Datos y cartografía](tareas/T1_observacion/casos/T1-CAF-001/datos/)
- [Script reproducible de auditoría en GEE](tareas/T1_observacion/casos/T1-CAF-001/scripts/auditoria_disponibilidad_optica_gee.js)
- [Referencias del caso](tareas/T1_observacion/casos/T1-CAF-001/referencias/)

## Organización del repositorio

```text
remote-sensing-course/
├── docs/
│   ├── guia_general/
│   ├── normas_editoriales/
│   └── rubricas/
├── tareas/
│   ├── T1_observacion/
│   ├── T2_cambio_biofisico/
│   ├── T3_transformaciones/
│   └── T4_clasificacion_modelado/
├── scripts/
│   ├── gee/
│   └── python/
└── examples/
    └── informe_tecnico_02/
```

## Principio de evaluación

> **Se evalúan decisiones técnicamente sustentadas, no secuencias de botones.**

Un producto cartográfico o computacional solo constituye evidencia cuando la selección de datos, el método, la validación, las limitaciones y la interpretación están justificadas.

## Reproducibilidad

Los casos pueden incluir datos derivados, scripts y documentación necesaria para reproducir los análisis. Las fuentes externas deben conservar su atribución y condiciones de uso originales.

Los archivos de un caso deben permitir reconstruir, hasta donde lo permitan las fuentes externas, la cadena:

`datos → procesamiento → evidencia → interpretación → decisión`

## Citación y licencia

El repositorio incluye metadatos de citación en [`CITATION.cff`](CITATION.cff) y conserva la licencia definida en [`LICENSE`](LICENSE). Los datos de terceros mantienen sus propias licencias y términos de uso.

---

**Universidad del Quindío · Facultad de Ingeniería · Programa de Ingeniería Topográfica y Geomática**
