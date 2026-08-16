# Guía para autores · Serie Técnica de Teledetección

**Programa de Ingeniería Topográfica y Geomática · Universidad del Quindío**  
**Asignatura:** Teledetección  
**Versión:** 0.9 · borrador para revisión

Esta guía establece las normas comunes para la preparación de los **Informes Técnicos de la Serie Técnica de Teledetección**. Cada TAREA puede definir requisitos adicionales, pero no debe contradecir estas reglas generales.

El propósito de la Serie no es reproducir el formato de un taller académico. Cada informe debe presentar un problema técnico de teledetección, justificar las decisiones metodológicas, producir evidencia verificable, reconocer sus limitaciones y convertir los resultados en una conclusión y, cuando corresponda, en una recomendación profesional.

> **Se evalúan decisiones técnicamente sustentadas, no secuencias de botones.**

---

## 1. Naturaleza del informe

El producto corresponde a un **artículo/informe técnico corto**, de redacción científica y orientación aplicada. Debe ser:

- técnicamente riguroso;
- compacto y de alta densidad informativa;
- reproducible en sus aspectos esenciales;
- sustentado en datos, fundamentos físicos, análisis y literatura pertinente;
- explícito respecto de alcance, supuestos, limitaciones e incertidumbre.

Un informe no mejora por incluir más texto, más mapas, más software o más procedimientos. Todo elemento debe cumplir una función metodológica, probatoria o argumentativa.

---

## 2. Autoría

Cada informe estudiantil tendrá un máximo de **dos autores**.

Los autores comparten responsabilidad por:

- la exactitud de los datos y resultados;
- la trazabilidad de las fuentes;
- la reproducibilidad del análisis;
- la correcta atribución de material externo;
- la interpretación técnica y las conclusiones;
- el cumplimiento de las normas de integridad académica.

Ambos autores deben poder explicar y defender el flujo metodológico completo del trabajo.

---

## 3. Extensión y formato

Como norma general, el informe tendrá una extensión máxima de **8 páginas**, incluidas figuras, tablas y referencias, salvo que el enunciado de una TAREA establezca expresamente otra condición.

No se utilizarán anexos para eludir el límite de extensión. Los scripts, datos derivados, archivos auxiliares y otros materiales reproducibles deben entregarse por separado o mediante el repositorio/enlace definido para la TAREA.

La plantilla oficial de la Serie deberá conservarse sin alterar arbitrariamente:

- tamaño de página y márgenes;
- tipografías y jerarquía de estilos;
- encabezados y numeración de líneas;
- estilos de títulos, texto, tablas y pies de figura;
- sistema de numeración de ecuaciones.

No se debe ampliar texto para rellenar espacios producidos por la maquetación. Cuando una figura no encaje adecuadamente, se deberá optimizar primero su geometría, márgenes internos, leyenda o disposición antes de añadir texto innecesario.

---

## 4. Arquitectura editorial común

Los grandes apartados permanecen estables en toda la Serie:

1. **Resumen**
2. **Palabras clave**
3. **1. Introducción**
4. **2. Área de estudio y datos**
5. **3. Metodología**
6. **4. Resultados**
7. **5. Discusión**
8. **6. Recomendación técnica**
9. **7. Conclusiones**
10. **Disponibilidad de datos y código**
11. **Referencias**

Las **subsecciones** se adaptan a la naturaleza de cada TAREA. No deben conservarse subsecciones de otro informe cuando no sean pertinentes.

---

## 5. Título, autores y palabras clave

### 5.1. Título

El título debe describir el problema técnico estudiado y, cuando resulte útil, la variable, método o contexto principal. Debe evitar formulaciones genéricas como:

- “TAREA 1 de Teledetección”;
- “Análisis de imágenes satelitales”;
- “Trabajo final”.

El código de la TAREA o del caso se identifica en el documento según la plantilla, pero no sustituye un título científico informativo.

### 5.2. Autores

Los nombres y correos institucionales se presentarán según la plantilla. No se incorporarán títulos académicos dentro de la línea de autores.

### 5.3. Palabras clave

Se utilizarán normalmente **4–6 palabras clave o expresiones breves**. Deben representar conceptos útiles para recuperar temáticamente el trabajo y evitar repetir de manera mecánica todas las palabras del título.

---

## 6. Resumen

El resumen debe permitir comprender el estudio sin consultar el resto del documento. Como referencia editorial, se recomienda una extensión aproximada de **150–200 palabras**.

Debe sintetizar, en este orden lógico:

1. problema u objetivo;
2. datos y enfoque metodológico esencial;
3. resultados cuantitativos o hallazgos principales;
4. conclusión o decisión técnica principal.

El resumen no debe:

- convertirse en una introducción extensa;
- incluir revisión bibliográfica innecesaria;
- presentar citas bibliográficas salvo necesidad excepcional;
- incorporar resultados que no aparezcan posteriormente en el informe;
- utilizar afirmaciones generales sin soporte.

Las abreviaturas no universales utilizadas en el resumen deberán definirse allí, aunque vuelvan a definirse en el cuerpo principal.

---

## 7. Introducción

La Introducción debe responder de forma compacta a cuatro preguntas:

1. ¿Cuál es el problema técnico?
2. ¿Por qué requiere teledetección o análisis geoespacial?
3. ¿Qué conocimiento previo es estrictamente necesario para comprender el enfoque?
4. ¿Cuál es el objetivo específico del informe?

El último párrafo deberá formular claramente el **objetivo**.

La Introducción no es un marco teórico exhaustivo. Se evitarán antecedentes que no condicionen el problema, el método, la interpretación o la decisión.

---

## 8. Área de estudio y datos

### 8.1. Área de estudio

Debe describirse únicamente la información territorial necesaria para interpretar el problema y los resultados, por ejemplo:

- localización;
- extensión y escala;
- relieve;
- clima o estacionalidad cuando sean relevantes;
- coberturas o rasgos directamente vinculados con la TAREA.

No se requiere una descripción enciclopédica del municipio, departamento o región.

### 8.2. Datos

Cada fuente de datos deberá documentarse con el nivel de detalle necesario para identificar qué información se utilizó. Cuando corresponda, se indicarán:

- misión/plataforma;
- sensor;
- producto o colección;
- nivel de procesamiento;
- fecha o periodo;
- resolución espacial, espectral, temporal y radiométrica relevante;
- sistema de referencia;
- fuente de acceso;
- magnitud física disponible;
- factores de escala;
- máscaras o indicadores de calidad;
- correcciones ya incorporadas.

La tabla de datos debe sintetizar especificaciones. El texto debe explicar por qué esos datos son pertinentes y no repetir fila por fila la tabla.

---

## 9. Metodología

La Metodología debe permitir que un lector técnicamente competente comprenda y reproduzca las decisiones esenciales del análisis.

Debe documentar:

- diseño general;
- criterios de selección de datos;
- preprocesamiento realmente aplicado;
- parámetros relevantes;
- variables o transformaciones;
- procedimientos de análisis;
- estrategia de validación cuando corresponda;
- métricas y criterios de decisión.

No debe redactarse como un tutorial de software. Deben describirse **operaciones y decisiones**, no secuencias de menús o botones.

### 9.1. Software y herramientas

El software se menciona cuando su implementación afecta la reproducibilidad o introduce una restricción metodológica. Cuando sea relevante se indicará la versión.

No se considerará justificación metodológica afirmar que un procedimiento fue elegido simplemente porque “estaba disponible en Google Earth Engine”, “era el valor por defecto” o “era la herramienta que tenía el programa”.

### 9.2. Productos ya procesados

No se aplicarán correcciones adicionales por ritual. Si un producto ya contiene calibración, corrección atmosférica u otro procesamiento pertinente, el informe deberá reconocerlo y justificar cualquier procesamiento adicional.

---

## 10. Resultados

Los Resultados responden a:

> **¿Qué se obtuvo?**

Deben presentar evidencia, valores, patrones, tendencias y comparaciones directamente derivadas del análisis.

Los Resultados deben evitar:

- explicaciones causales que el diseño no demuestra;
- afirmaciones de transferibilidad no evaluadas;
- repetir en prosa todos los números de una tabla;
- describir mecánicamente cada elemento de una figura.

Una cifra o diferencia pequeña no debe calificarse automáticamente como “significativa” si no se realizó una prueba inferencial que permita utilizar ese término.

---

## 11. Discusión

La Discusión responde a:

> **¿Qué significan los resultados?**

Debe:

- interpretar los hallazgos;
- contrastarlos con literatura pertinente cuando corresponda;
- explicar posibles mecanismos con cautela;
- analizar compromisos metodológicos;
- establecer alcance y condiciones de validez;
- reconocer fuentes de incertidumbre y limitaciones.

La Discusión no debe repetir los Resultados.

### 11.1. Alcance e incertidumbre

Cada informe deberá incorporar explícitamente el alcance de sus resultados. Una limitación útil identifica **cómo** una condición del diseño restringe la interpretación.

Ejemplos pertinentes incluyen:

- una sola fecha de observación;
- tamaño o distribución de las muestras;
- calidad de la referencia;
- nubosidad o disponibilidad temporal;
- resolución espacial;
- configuración de un algoritmo;
- ausencia de análisis inferencial;
- dependencia de un único territorio o periodo.

Expresiones como “faltó tiempo” o “faltaron recursos” no sustituyen un análisis metodológico de incertidumbre.

---

## 12. Recomendación técnica

La Recomendación técnica responde a:

> **¿Qué debería hacer un analista o responsable técnico a partir de esta evidencia?**

Debe ser:

- operativa;
- específica;
- sustentada en resultados;
- condicionada al alcance real del estudio;
- explícita respecto de sus principales restricciones.

No debe formular recomendaciones universales a partir de un experimento local o limitado.

La Recomendación no es una repetición de las Conclusiones: transforma evidencia en **decisión técnica**.

---

## 13. Conclusiones

Las Conclusiones responden a:

> **¿Qué permitió establecer el estudio?**

Deben:

- responder directamente al objetivo;
- sintetizar los hallazgos principales;
- mantener correspondencia con la evidencia presentada;
- reconocer, cuando sea esencial, la principal condición de validez.

No deben:

- introducir resultados nuevos;
- incorporar bibliografía nueva;
- convertirse en otra discusión;
- presentar recomendaciones disfrazadas;
- terminar con afirmaciones genéricas sobre la importancia de la teledetección.

---

## 14. Figuras y cartografía

### 14.1. Llamada y numeración

Las figuras se numeran consecutivamente como **Figura 1, Figura 2, ...** y deben ser citadas en el texto **antes de su aparición**.

### 14.2. Función

Toda figura debe cumplir una función analítica. Se evitarán imágenes decorativas, capturas de pantalla y gráficos que no aporten evidencia necesaria.

### 14.3. Pie de figura

El pie debe ser autosuficiente e indicar, según corresponda:

- qué se representa;
- significado de paneles (a), (b), etc.;
- significado de símbolos o categorías;
- unidades;
- fecha o periodo;
- fuente cuando proceda.

### 14.4. Calidad gráfica

Las figuras deberán presentar:

- tipografía legible a tamaño final;
- ejes, unidades y categorías inequívocos;
- proporciones equilibradas;
- márgenes internos controlados;
- resolución suficiente para impresión y lectura digital;
- coherencia visual con las demás figuras del informe.

En cartografía deberán incluirse los elementos cartográficos pertinentes al propósito del mapa, así como sistema de referencia y fuentes cuando sean necesarios para su interpretación.

### 14.5. Material externo

Las figuras elaboradas por terceros deberán citarse y utilizarse únicamente cuando sean metodológicamente necesarias. Siempre que sea posible, la evidencia principal será producida por los autores a partir de datos trazables.

---

## 15. Tablas

Las tablas se numeran consecutivamente como **Tabla 1, Tabla 2, ...** y deben ser citadas antes de su aparición.

El título de tabla se ubica según la plantilla y debe describir con precisión su contenido.

Las tablas deben:

- utilizar encabezados inequívocos;
- incluir unidades;
- mantener un número razonable de cifras significativas;
- evitar columnas que no aportan a la interpretación;
- utilizar notas únicamente cuando sean necesarias.

El texto no debe reproducir fila por fila los valores de una tabla. Debe destacar patrones, diferencias e implicaciones.

---

## 16. Ecuaciones, símbolos y notación científica

Las ecuaciones relevantes se elaborarán mediante el editor de ecuaciones y se numerarán consecutivamente al margen derecho cuando deban ser referenciadas posteriormente.

### 16.1. Variables

Las variables matemáticas se escriben en cursiva, por ejemplo:

- *C*;
- γ;
- κ;
- *N*;
- *r*;
- *x*ᵢᵢ.

### 16.2. Abreviaturas técnicas

Las abreviaturas y operadores técnicos se mantienen en letra recta, por ejemplo **OA**, **SVM**, **RT**, **LULC**.

En texto se utilizará **coeficiente Kappa** y, como símbolo matemático, **κ**.

### 16.3. Unidades y números

Se utilizará preferentemente el Sistema Internacional de Unidades (SI).

En texto en español:

- se utiliza coma decimal: `0,86`;
- se deja espacio entre número y símbolo de porcentaje: `60 %`;
- se utiliza `×` para dimensiones: `30 × 30 km`;
- los intervalos se expresan con raya corta (*en dash*): `B2–B8`, `60–100 %`, `0,84–0,86`.

La precisión numérica debe corresponder con la precisión real de los datos y del análisis.

---

## 17. Siglas y abreviaturas

Las abreviaturas no universales se definen en su primera aparición.

El resumen, el cuerpo principal y los pies de figuras/tablas pueden considerarse contextos independientes cuando sea necesario para mantener la comprensión autónoma.

Cuando el acrónimo procede de un término inglés, puede emplearse la forma:

- uso y cobertura del suelo (*land use/land cover*, **LULC**);
- análisis de imágenes basado en objetos (*object-based image analysis*, **OBIA**);
- precisión global (*overall accuracy*, **OA**).

No se crearán abreviaturas para conceptos utilizados una sola vez o pocas veces cuando su uso no mejore la lectura.

---

## 18. Citación y referencias

La Serie utiliza una **variante IEEE compacta**.

Las referencias se numeran según el orden de primera aparición en el texto:

- `[1]`;
- `[2]`;
- `[3]`.

Las citas consecutivas pueden agruparse de forma compacta, por ejemplo `[1,2]` o `[4–6]`.

Las referencias deberán:

- corresponder a fuentes efectivamente consultadas;
- ser pertinentes para la afirmación que respaldan;
- permitir su identificación y recuperación;
- incluir DOI cuando exista;
- conservar consistencia tipográfica y bibliográfica.

Se priorizarán artículos científicos, documentación oficial de misiones/sensores/productos, manuales técnicos, estándares y fuentes institucionales pertinentes. Blogs, páginas comerciales y materiales sin trazabilidad no deben utilizarse como soporte principal de afirmaciones científicas.

No se incluirán referencias que no hayan sido citadas en el texto.

---

## 19. Disponibilidad de datos y código

Todo informe debe incluir una sección no numerada titulada **Disponibilidad de datos y código**.

Debe indicar, según corresponda:

- procedencia de los datos originales;
- datos suministrados por la asignatura;
- datos externos incorporados por los autores;
- productos derivados generados;
- scripts o notebooks empleados;
- software y versiones relevantes;
- ubicación del material necesario para reproducir el análisis;
- restricciones de acceso o licenciamiento, si existen.

No es necesario adjuntar grandes colecciones satelitales que puedan recuperarse de una fuente oficial. Sí debe proporcionarse información suficiente para volver a identificarlas y obtenerlas.

Los productos de terceros conservan sus licencias y términos de uso originales.

---

## 20. Uso responsable de inteligencia artificial generativa

Las herramientas de inteligencia artificial generativa pueden utilizarse como **apoyo**, pero no sustituyen la responsabilidad técnica de los autores.

Pueden apoyar tareas como:

- revisión de claridad y estilo;
- organización preliminar de texto;
- explicación de conceptos durante el proceso de aprendizaje;
- asistencia de programación o depuración;
- traducción o mejora lingüística.

Los autores siguen siendo responsables de verificar:

- ecuaciones y cálculos;
- código;
- nombres y características de productos;
- afirmaciones científicas;
- interpretación de resultados;
- referencias y DOI;
- conclusiones y recomendaciones.

No se acepta:

- presentar como propia una interpretación que los autores no puedan explicar;
- utilizar referencias inventadas o no verificadas;
- incorporar resultados, cifras o procedimientos generados sin comprobación;
- utilizar IA para fabricar evidencia empírica inexistente;
- ocultar un uso de IA que haya intervenido materialmente en la elaboración del informe.

Cuando se haya utilizado IA generativa de manera material en la elaboración del informe, deberá declararse brevemente su propósito al final de **Disponibilidad de datos y código**. Una declaración de uso no exime de responsabilidad a los autores ni modifica los criterios técnicos de evaluación.

---

## 21. Integridad académica y trazabilidad

Toda evidencia debe poder distinguir entre:

- material producido por los autores;
- datos suministrados por la asignatura;
- datos provenientes de terceros;
- material adaptado o reproducido de otras fuentes.

La fabricación o alteración injustificada de datos, resultados, referencias o evidencias constituye una falta de integridad académica.

La reutilización de trabajos previos propios o de terceros debe ser declarada y ajustarse a las instrucciones particulares de la TAREA.

---

## 22. Archivos de entrega

Salvo indicación diferente en la TAREA, el paquete de entrega deberá permitir evaluar el informe y reproducir sus evidencias principales. Se recomienda incluir:

1. informe final en **PDF**;
2. documento fuente editable cuando sea solicitado;
3. scripts/notebooks desarrollados por el equipo;
4. datos derivados no recuperables directamente desde una fuente oficial;
5. archivo `README` o nota equivalente cuando sea necesario explicar la estructura del material reproducible.

El canal de entrega y la convención definitiva de nombres serán establecidos para cada TAREA o semestre.

---

## 23. Lista de verificación antes de entregar

Antes de enviar el informe, los autores deberán comprobar:

### Problema y método
- [ ] El objetivo está formulado de forma explícita.
- [ ] Los datos utilizados están identificados y justificados.
- [ ] El nivel de procesamiento y la magnitud física de los productos se comprenden correctamente.
- [ ] Las decisiones metodológicas importantes están justificadas.
- [ ] El análisis puede reproducirse con la información suministrada.

### Evidencia
- [ ] Toda figura y tabla es citada antes de aparecer.
- [ ] Figuras y tablas cumplen una función analítica.
- [ ] Ejes, unidades, leyendas, fechas y fuentes son suficientes.
- [ ] No se repiten innecesariamente en texto todos los valores de tablas o figuras.

### Interpretación
- [ ] Resultados y Discusión están claramente diferenciados.
- [ ] Las limitaciones e incertidumbres están identificadas.
- [ ] Las Conclusiones responden al objetivo.
- [ ] La Recomendación técnica deriva de la evidencia y declara sus condiciones de validez.

### Escritura y fuentes
- [ ] Las siglas están definidas correctamente.
- [ ] La notación, unidades, rangos y decimales son consistentes.
- [ ] Todas las referencias citadas aparecen en la bibliografía y viceversa.
- [ ] Los DOI y datos bibliográficos han sido verificados.
- [ ] El texto no contiene prosa de relleno ni afirmaciones sin soporte.
- [ ] El uso material de IA generativa, si existió, está declarado.

---

## 24. Principio editorial final

La calidad del informe no se determina por su longitud ni por la cantidad de productos incluidos. Un Informe Técnico de la Serie debe permitir reconstruir una cadena clara:

`problema → datos → decisiones → método → evidencia → interpretación → incertidumbre → conclusión → recomendación`

Cuando un elemento no contribuye a esa cadena, debe reconsiderarse su inclusión.

---

**Estado del documento:** versión 0.9 para revisión antes de su adopción como Guía para autores v1.0 de la Serie Técnica de Teledetección.
