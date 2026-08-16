# Rúbrica de evaluación · TAREA 1

## Diseño de una estrategia de observación remota

**Serie Técnica de Teledetección · Versión 1.0**

Esta rúbrica evalúa la calidad de las decisiones técnicas, la solidez de la evidencia y la coherencia entre problema, fundamentos físicos, datos, análisis y recomendación. No se califican secuencias de software, cantidad de productos ni sofisticación de las herramientas por sí mismas.

## Escala de desempeño

| Nivel | Rango | Significado general |
|---|---:|---|
| Sobresaliente | 4.5–5.0 | Decisión rigurosa, integrada, sustentada y crítica. |
| Sólido | 3.8–4.4 | Trabajo correcto y bien sustentado, con limitaciones menores. |
| Aceptable | 3.0–3.7 | Cumple lo esencial, pero presenta debilidades de profundidad, integración o justificación. |
| Insuficiente | 1.0–2.9 | Evidencia incompleta, errores conceptuales o decisiones débilmente justificadas. |
| Sin evidencia | 0 | El criterio no fue abordado o no existe evidencia verificable. |

## Ponderación

| Criterio | Peso |
|---|---:|
| 1. Formulación del problema y requerimientos de observación | 8 % |
| 2. Fundamentación física y observabilidad espectral | 15 % |
| 3. Adecuación de la resolución espacial | 10 % |
| 4. Disponibilidad temporal efectiva | 15 % |
| 5. Comprensión del producto y nivel de procesamiento | 8 % |
| 6. Comparación de alternativas e integración multisensor | 10 % |
| 7. Estrategia de observación y recomendación técnica | 15 % |
| 8. Discusión, alcance e incertidumbre | 7 % |
| 9. Calidad de la evidencia técnica | 5 % |
| 10. Reproducibilidad, escritura científica y cumplimiento editorial | 7 % |
| **Total** | **100 %** |

La nota final se calcula como:

`Nfinal = 0.08N1 + 0.15N2 + 0.10N3 + 0.15N4 + 0.08N5 + 0.10N6 + 0.15N7 + 0.07N8 + 0.05N9 + 0.07N10`

Cada criterio se califica en escala de 0 a 5.

---

## 1. Formulación del problema y requerimientos de observación · 8 %

**Sobresaliente.** Define con precisión el problema de observación y establece una cadena coherente entre fenómeno, propiedades de interés, variables potencialmente observables y requerimientos del sistema. Distingue claramente aquello que puede observarse directamente de lo que únicamente puede inferirse y delimita explícitamente la escala espacial y temporal del problema.

**Sólido.** El problema y los requerimientos están correctamente definidos y existe correspondencia general entre fenómeno, variables y necesidades de observación. Presenta pequeñas omisiones o simplificaciones que no comprometen la selección posterior de los sistemas.

**Aceptable.** Identifica el problema general y algunas variables relevantes, pero la relación entre fenómeno, variable observable y requerimiento del sensor es parcial o poco desarrollada. La escala o el propósito de seguimiento quedan definidos de forma genérica.

**Insuficiente.** Selecciona sensores o productos antes de definir qué necesita observar; confunde fenómeno, variable y medición; atribuye capacidades no demostradas a los datos o formula un problema demasiado amplio para establecer requerimientos técnicos consistentes.

**Sin evidencia.** No existe formulación técnica reconocible del problema ni de sus requerimientos.

---

## 2. Fundamentación física y observabilidad espectral · 15 %

**Sobresaliente.** Relaciona correctamente las propiedades del sistema estudiado con procesos de absorción, reflexión, transmisión o emisión y con las regiones espectrales pertinentes. Explica la utilidad y las limitaciones de VIS, NIR, SWIR y, cuando corresponda, TIR sin recurrir a asociaciones memorísticas. La evidencia espectral producida por el equipo es trazable, técnicamente correcta y utilizada para sustentar decisiones concretas.

**Sólido.** Presenta una interpretación físicamente correcta de las principales regiones espectrales y las relaciona adecuadamente con las propiedades de interés. La evidencia espectral es pertinente, aunque alguna relación física, limitación o implicación para la selección del sensor podría desarrollarse con mayor profundidad.

**Aceptable.** Reconoce las regiones espectrales relevantes y describe correctamente varios comportamientos generales, pero predominan afirmaciones descriptivas del tipo «esta banda sirve para…» con explicación limitada de los mecanismos físicos. La figura espectral está presente, pero se utiliza poco en la argumentación.

**Insuficiente.** Presenta errores conceptuales en la interacción radiación–materia, interpreta incorrectamente regiones espectrales, utiliza afirmaciones sin sustento físico o incorpora una curva espectral sin procedencia o sin relación analítica con el problema.

**Sin evidencia.** No existe análisis de observabilidad espectral.

---

## 3. Adecuación de la resolución espacial · 10 %

**Sobresaliente.** Analiza explícitamente la relación objeto–píxel y determina para qué escalas son defendibles los sistemas considerados. Integra tamaño y fragmentación de las unidades, cobertura asociada, píxeles mixtos, sombras, relieve y otras fuentes relevantes de mezcla espacial. Reconoce con claridad los límites de inferencia entre escala de planta, predio, paisaje y región.

**Sólido.** Establece adecuadamente la relación entre resolución espacial y escala del problema e identifica las principales implicaciones de fragmentación y píxeles mixtos. Presenta pequeñas simplificaciones, pero la conclusión sobre adecuación espacial permanece bien sustentada.

**Aceptable.** Compara las resoluciones disponibles y reconoce algunas limitaciones de escala, pero el análisis objeto–píxel es principalmente cualitativo o genérico. La discusión de fragmentación, mezcla o contexto espacial es incompleta.

**Insuficiente.** Supone que una resolución espacial más fina es automáticamente superior; no relaciona píxel y objeto real; propone observaciones a una escala que los datos no pueden sustentar o ignora de manera importante los efectos de mezcla espacial.

**Sin evidencia.** No se analiza la adecuación espacial.

---

## 4. Disponibilidad temporal efectiva · 15 %

**Sobresaliente.** Distingue claramente frecuencia nominal de revisita y disponibilidad efectiva. Analiza correctamente la evidencia 2021–2025, identifica patrones interanuales e intraanuales, reconoce periodos favorables y restrictivos y traduce dichos resultados en decisiones sobre frecuencia, ventana temporal y confiabilidad del seguimiento. Diferencia adecuadamente adquisiciones brutas, fechas únicas y observaciones válidas y reconoce las limitaciones de la auditoría suministrada.

**Sólido.** Interpreta correctamente la disponibilidad efectiva y utiliza los datos suministrados para comparar años, periodos o sensores. Relaciona los resultados con la estrategia temporal, aunque alguna implicación o limitación metodológica podría desarrollarse mejor.

**Aceptable.** Produce correctamente la representación solicitada e identifica patrones básicos de disponibilidad, pero la interpretación permanece principalmente descriptiva. La conexión entre los resultados temporales y la estrategia propuesta es limitada.

**Insuficiente.** Confunde revisita nominal con observación útil; interpreta incorrectamente los archivos; se limita a mostrar gráficos sin analizarlos o formula una frecuencia de seguimiento incompatible con la evidencia disponible.

**Sin evidencia.** No existe análisis de disponibilidad temporal efectiva.

---

## 5. Comprensión del producto y nivel de procesamiento · 8 %

**Sobresaliente.** Identifica correctamente misión, sensor, producto, nivel de procesamiento, magnitud física, escalas o factores pertinentes, información de calidad y principales correcciones ya incorporadas. Distingue adecuadamente entre DN, radiancia, reflectancia, temperatura u otras magnitudes cuando corresponda y evita aplicar correcciones redundantes. Utiliza este conocimiento para evaluar la pertinencia y comparabilidad de los productos.

**Sólido.** Caracteriza correctamente los productos y comprende su nivel de procesamiento y magnitud física. Presenta alguna omisión menor en factores de escala, información de calidad o procesamiento previo, sin afectar la interpretación principal.

**Aceptable.** Identifica correctamente el producto y varias de sus características, pero demuestra comprensión parcial de las correcciones ya aplicadas, las magnitudes físicas o la información de calidad.

**Insuficiente.** Confunde producto, sensor o nivel de procesamiento; interpreta valores digitales como magnitudes físicas sin justificación; aplica o propone correcciones innecesarias o compara productos sin reconocer diferencias fundamentales de procesamiento.

**Sin evidencia.** El producto utilizado no está técnicamente caracterizado.

---

## 6. Comparación de alternativas e integración multisensor · 10 %

**Sobresaliente.** Compara al menos tres alternativas mediante criterios derivados explícitamente del problema. La matriz permite identificar compromisos reales entre capacidad espectral, escala, temporalidad, restricciones atmosféricas, producto, accesibilidad y limitaciones. Si utiliza pesos o puntuaciones, estos están justificados y son consistentes. Cuando propone integración multisensor, identifica adecuadamente problemas de compatibilidad y propone una estrategia defendible para resolverlos.

**Sólido.** La comparación es técnicamente coherente, utiliza criterios pertinentes y conduce a una diferenciación clara entre alternativas. La integración multisensor, cuando corresponde, es correctamente considerada aunque no se analicen todas sus implicaciones.

**Aceptable.** Presenta una comparación funcional, pero varios criterios se apoyan principalmente en especificaciones nominales o reciben igual importancia sin suficiente justificación. La matriz ayuda a decidir, aunque la integración entre criterios es limitada.

**Insuficiente.** La comparación consiste esencialmente en copiar fichas técnicas, utiliza puntuaciones arbitrarias, omite criterios determinantes o selecciona la alternativa antes de realizar el análisis. Cuando propone combinar misiones, asume que sus observaciones son directamente intercambiables sin discutir compatibilidad.

**Sin evidencia.** No existe comparación técnica entre alternativas.

**Regla específica.** La ausencia de HLS no constituye por sí misma una penalización. Solo existe debilidad metodológica cuando el equipo propone integrar Landsat y Sentinel-2 sin analizar adecuadamente su comparabilidad.

---

## 7. Estrategia de observación y recomendación técnica · 15 %

**Sobresaliente.** La estrategia final constituye una consecuencia directa y verificable de la evidencia presentada. Define sistema principal, sistema complementario cuando corresponda, producto, regiones espectrales prioritarias, escala de aplicación, estrategia temporal, condiciones de uso y limitaciones. La recomendación técnica es específica, operacional y reconoce explícitamente cuándo la solución dejaría de ser adecuada.

**Sólido.** La estrategia es coherente con los resultados y define adecuadamente los principales componentes de observación. Existen pequeñas omisiones o aspectos que podrían concretarse mejor, pero la decisión permanece técnicamente defendible.

**Aceptable.** Propone una estrategia plausible y relacionada con parte de la evidencia, pero varios componentes permanecen genéricos o no se derivan claramente de los análisis anteriores. La recomendación identifica qué utilizar, pero desarrolla de manera limitada las condiciones de aplicación.

**Insuficiente.** La estrategia se basa principalmente en preferencias, disponibilidad de software o especificaciones aisladas; contradice resultados previos; recomienda un sistema sin definir escala o temporalidad, o presenta una decisión que no puede reconstruirse a partir de la evidencia del informe.

**Sin evidencia.** No existe estrategia de observación ni recomendación técnica identificable.

---

## 8. Discusión, alcance e incertidumbre · 7 %

**Sobresaliente.** Interpreta críticamente los resultados y analiza los principales compromisos entre información espectral, detalle espacial, densidad temporal, nubosidad y escala. Diferencia limitaciones de los datos, del método y de la propia estrategia; declara supuestos y condiciones de validez y evita extrapolaciones que la evidencia no permite.

**Sólido.** Discute adecuadamente los principales resultados y reconoce limitaciones e incertidumbres relevantes. Presenta alguna generalización o aspecto poco desarrollado, sin comprometer las conclusiones fundamentales.

**Aceptable.** Incluye una discusión diferenciada de los Resultados y reconoce algunas limitaciones, pero predomina la reiteración de hallazgos y existe poca profundización en sus implicaciones o condiciones de validez.

**Insuficiente.** La discusión repite los Resultados, presenta afirmaciones categóricas sin considerar incertidumbre, omite limitaciones evidentes o extrapola la estrategia a escalas, variables o condiciones no evaluadas.

**Sin evidencia.** No existe discusión técnica ni análisis de incertidumbre.

---

## 9. Calidad de la evidencia técnica · 5 %

**Sobresaliente.** Mapas, figuras, gráficos y tablas tienen una función analítica clara, permiten verificar afirmaciones importantes y presentan información suficiente para ser interpretados de manera autónoma. La simbología, unidades, escalas, leyendas, ejes, títulos y fuentes son adecuados. No existe duplicación innecesaria de información.

**Sólido.** La evidencia gráfica y tabular es correcta, pertinente y legible. Presenta detalles menores de diseño o documentación que no afectan su función analítica.

**Aceptable.** Las evidencias requeridas están presentes y son comprensibles, pero varias funcionan principalmente como ilustración; presentan problemas menores de jerarquía gráfica, rotulado, unidades, fuentes o redundancia.

**Insuficiente.** Figuras o tablas son difíciles de interpretar, carecen de elementos esenciales, presentan información incorrecta, utilizan capturas de pantalla como evidencia principal o no sustentan las afirmaciones para las cuales son invocadas.

**Sin evidencia.** Faltan las evidencias técnicas esenciales del caso.

---

## 10. Reproducibilidad, escritura científica y cumplimiento editorial · 7 %

**Sobresaliente.** Los datos, fuentes, procedimientos y productos generados son trazables; los scripts o pasos necesarios para reproducir el análisis están documentados. La redacción es técnica, precisa y concisa; existe separación clara entre Metodología, Resultados, Discusión, Recomendación y Conclusiones. Figuras y tablas son llamadas antes de aparecer, las referencias son consistentes y se cumplen las normas de la Serie Técnica.

**Sólido.** El trabajo es reproducible en sus aspectos esenciales, las fuentes están correctamente identificadas y la escritura es clara. Presenta errores menores de estilo, referencias, organización o documentación que no dificultan comprender ni reproducir el análisis.

**Aceptable.** La mayor parte de los datos y fuentes puede identificarse, pero existen omisiones en scripts, parámetros, procedencia o documentación. La escritura es comprensible aunque presenta redundancias, imprecisiones terminológicas o algunas desviaciones de la estructura editorial.

**Insuficiente.** El análisis no puede reconstruirse adecuadamente; faltan fuentes o parámetros relevantes; existen referencias no trazables; se mezclan resultados y discusión; la escritura dificulta la interpretación técnica o se incumplen de manera reiterada las normas editoriales.

**Sin evidencia.** No existe documentación suficiente para establecer procedencia, reproducibilidad o autoría técnica del análisis.

---

## Reglas de aplicación

- No existen techos globales de nota asociados a una misión, sensor, plataforma o herramienta específica.
- Una alternativa puede ser descartada y aun así recibir máxima valoración si el descarte está técnicamente demostrado.
- La ausencia de una evidencia obligatoria afecta el criterio correspondiente; no se aplicarán penalizaciones globales adicionales por el mismo hecho.
- Un mismo error puede tener consecuencias en varios criterios únicamente cuando produce efectos técnicamente distintos. Por ejemplo, ignorar la nubosidad puede afectar tanto el análisis temporal como la estrategia final, pero no debe penalizarse repetidamente por una misma deficiencia editorial.
- La calidad gráfica no compensa errores conceptuales o metodológicos.
- La selección de software no constituye criterio de mérito.
- Se evaluará la coherencia entre evidencia y decisión, no la coincidencia con una respuesta predeterminada.

**Caso piloto de referencia:** `T1-CAF-001` · Sistemas cafeteros del Quindío.
