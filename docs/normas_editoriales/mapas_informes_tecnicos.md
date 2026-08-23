# Presentación de mapas · Informes técnicos de la Serie

Los mapas de la **Serie Técnica de Teledetección** deben concebirse como **figuras científico-técnicas**, no como planos cartográficos administrativos o de ingeniería. Por tanto, no requieren rótulo o cajetín formal.

La composición debe ser limpia, jerarquizada y suficiente para que el lector interprete correctamente el contenido temático y su referencia espacial. Todo elemento gráfico debe cumplir una función informativa.

> **Principio rector:** un mapa científico debe contener toda la información necesaria para ser espacialmente interpretable y reproducible, pero ningún elemento gráfico que no contribuya directamente a esa interpretación.

---

## 1. Elementos espaciales

Todo mapa debe incorporar, **cuando corresponda a su propósito y escala**:

- área de estudio claramente identificada;
- barra de escala gráfica, con unidades apropiadas;
- orientación, cuando su ausencia pueda generar ambigüedad;
- coordenadas o referencias espaciales visibles;
- sistema de referencia de coordenadas (CRS), preferiblemente con código EPSG cuando esté disponible;
- mapa de localización (*inset*) cuando el área de estudio no sea inmediatamente reconocible para un lector externo.

La información espacial debe ser suficiente, pero no redundante. Una flecha norte o un *inset* no se incorporan de forma automática si no aportan información necesaria.

---

## 2. Leyenda y simbología

La leyenda debe contener únicamente los elementos necesarios para interpretar el mapa.

- La simbología de la leyenda debe coincidir exactamente con la utilizada en el mapa.
- Los nombres deben ser breves y técnicamente correctos.
- No deben aparecer nombres internos de capas SIG, códigos de archivo ni nomenclaturas de trabajo.
- Las unidades deben indicarse cuando sean necesarias.
- En mapas cuantitativos, los intervalos de clase deben expresarse con claridad y mantener consistencia matemática.

---

## 3. Composición y lenguaje gráfico

La variable o fenómeno principal debe dominar visualmente. La información territorial de contexto debe conservar una jerarquía secundaria.

- Utilizar paletas coherentes con la naturaleza de los datos: secuenciales, divergentes o categóricas según corresponda.
- Evitar combinaciones rojo-verde como único mecanismo de diferenciación.
- Mantener tipografía, simbología, grosores y tamaños de texto consistentes entre mapas.
- Garantizar que las etiquetas sean legibles al tamaño final y evitar solapamientos.
- Incorporar límites administrativos, hidrografía, vías, centros poblados o fondos cartográficos únicamente cuando contribuyan a interpretar el fenómeno.
- Mantener los fondos con menor jerarquía visual que la información temática.
- Evitar efectos 3D, sombras decorativas, iconografía ornamental, retículas densas, colores saturados simultáneamente y bordes excesivamente gruesos.

Cuando varios mapas representen una misma variable, deben mantenerse, siempre que sea metodológicamente válido, los mismos intervalos, colores y criterios de representación.

---

## 4. Integración del mapa en el informe

Un mapa presentado como figura numerada **no necesita repetir un título dentro del área gráfica** si esa información ya aparece en el pie de figura.

No se utilizarán cajetines o rótulos formales con autor, institución, proyecto, código de plano, revisión, firma, logotipos o escala numérica. Estos elementos corresponden a planos técnicos o productos cartográficos administrativos, no a figuras científicas.

El pie de figura debe complementar el mapa y permitir identificar, cuando sea pertinente:

- fenómeno representado;
- área geográfica;
- fecha o periodo;
- fuente de datos;
- CRS;
- resolución espacial;
- procesamiento relevante.

Las fuentes cartográficas y temáticas deben quedar documentadas en el pie de figura, la metodología o una nota asociada, según resulte más claro.

---

## 5. Calidad gráfica

El mapa debe diseñarse considerando desde el inicio el espacio disponible en el informe y verificarse al **tamaño final de reproducción**.

- Preferir formatos vectoriales cuando la naturaleza de la figura lo permita.
- Para formatos raster, utilizar PNG o TIFF con resolución suficiente; como referencia, se recomienda **600 dpi** para figuras cartográficas destinadas a publicación.
- Evitar compresión que produzca artefactos.
- Las líneas, textos y símbolos deben conservar nitidez y legibilidad después de la reducción.
- Evitar áreas vacías, leyendas sobredimensionadas e *insets* mayores de lo necesario.

---

## 6. Lista de verificación

Antes de incorporar un mapa al informe, verificar:

- [ ] El área de estudio se identifica inequívocamente.
- [ ] La escala gráfica es legible y apropiada.
- [ ] La orientación se indica cuando es necesaria.
- [ ] Existen referencias espaciales y el CRS está identificado.
- [ ] El *inset* permite ubicar el área cuando es necesario.
- [ ] La leyenda contiene únicamente información relevante.
- [ ] La simbología y los colores corresponden a la naturaleza de los datos.
- [ ] La variable principal domina visualmente sobre el contexto.
- [ ] Las etiquetas son legibles y no se superponen.
- [ ] Las fuentes de datos están documentadas.
- [ ] El mapa mantiene legibilidad y calidad al tamaño final.
- [ ] La composición es coherente con los demás mapas del informe.
- [ ] No existe información redundante entre el mapa y el pie de figura.
- [ ] No se incluye un cajetín o rótulo formal innecesario.
