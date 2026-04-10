---
title: Mi experiencia con las IAs y recomendaciones
preview_description: Cómo sacarle partido al uso de la IA.
translationKey: ia-exp
create_at: 2026-04-10T13:25:00.000z
---

Antes que todo, mi opinión frente a la IA es la que comúnmente se denominaría de retractor, no en el sentido de que la odie; me parece una muy buena herramienta según qué uso y de qué forma. Lo que sí digo es que estoy cansado de empresas que continuamente bombardean con su narrativa de que van a cambiar el futuro, que la IA va a mejorar las cosas, y un largo etcétera de acciones de relaciones públicas para embaucar inversores con poco o ningún conocimiento del tema.

# Mi crítica

Desde demasiados sitios se está comenzando a ver los efectos que tiene el abuso de la IA: desde las grandes compañías que han llevado al absurdo el mercado de *hardware*, pasando por empresas que han eliminado gran parte de sus plantillas para sustituirlas por LLM, en un burdo intento de abaratar costes *(PD: no sale bien)*. Estoy de acuerdo en que puede aumentar la eficiencia de trabajo a corto plazo; yo mismo lo he probado, e incluso puede llegar a dar ese falso efecto de velocidad, pero como he dicho, en el corto plazo. Los primeros síntomas se notan cuando llegas a hacer la tarea a la que probablemente más tiempo dedicas como programador: *debuguear*, o solventar los fallos —para quien no sea del rubro—. Si llevas unas cuantas horas trabajando en lo mismo, al final puedes saber dónde ocurre un fallo; también mientras trabajas puedes ver los *edge cases*, casos límite. Pero cuando es una IA la que genera todo, y llegan esos fallos —porque llegan, quieras o no—, no solo te toca ver dónde está el error, sino comprender qué te ha "escupido" la IA durante la última media hora. Al final acabas gastando el mismo o más tiempo que si lo hubieras hecho tú, y mucho más frustrado.

Otro punto donde notas esto es en proyectos grandes. Al final, por la pura naturaleza de los LLM, tienen un límite del contexto de información. Un humano, aunque tiene un límite, tiene la capacidad de despreciar o resumir las cosas que "no importan" y seguir ampliando el contexto; por no hablar de que somos capaces de saber no solo que tenemos que hacer un paso más adelante, sino varios más, a diferencia de nuestras algorítmicas compañeras. Esto acaba mostrándose en el efecto de que, si no especificas todo lo que tienes en mente de cabo a rabo desde el principio, el modelo acabará desviando de lo que tenías en mente para resolver. Lo cual nos ha llevado a algo totalmente distópico como el **Spec Driven Development**, o en castellano, desarrollo guiado por especificaciones. Para el que sea ajeno al tema, dejo [aquí](https://www.youtube.com/watch?v=nnUMJX9013Y) un enlace que explica bastante bien en qué consiste, pero para resumir: tú dejas de hacer lo que estudiaste, o sea, programar (lo digo por aquellos como yo que estudiamos programación) y, en cambio, te dedicas a hacer un manual superdetallado de qué debe implementar la IA, qué patrones seguir, qué arquitectura, y básicamente todo, para que la IA lo haga por ti. Puede que algún jefe esté encantado con esta idea, pero desde mi vista, tanto como persona y como programador, me parece una aberración. Uno, porque es inevitable que seas capaz de detallar con palabras completamente todo lo que se necesita hacer; la lengua natural deja demasiado espacio para interpretaciones implícitas. Y segundo, en relación con lo anteriormente dicho: es cuando estás trabajando en ese código donde ves muchos casos extraños que se pueden dar. Si tienes que hacer un modelo mental de una aplicación entera, está —mientras no seas un prodigio— garantizado que vas a dejar casos sin cubrir, porque simplemente tu cerebro abstrae todo eso y lo da por sentado.

Y todo esto solo hablando a corto plazo. Si miramos un poco más allá, ¿qué podemos predecir? Bueno:
- Si nadie contrata juniors o a los que se contratan se les elimina su capacidad de aprendizaje mediante golpearse con el código, dentro de 7 años la demanda de seniors va a ser graciosa.
- Aunque esto ya comienza a notarse, las brechas de vulnerabilidad serán nefastas.
- Creo que esto no hay que decirlo, pero el consumo esperado de estas IAs está siendo mucho menor del consumo real, y cuando pasa eso, la única forma de justificar el gasto es aumentando el precio de uso, cosa que ya se está mostrando con los sistemas de consumo dinámico de TOKENs según hora y plan del usuario. Si el precio sigue aumentando, ¿seguirá siendo rentable haber despedido a esos juniors y sustituirlos por LLMs?

# ¿Son todo malas críticas?

Puede parecer que odio con toda mi alma el uso de ChatGPT o Claude, entre otras, pero está lejos de la realidad. Es más, prácticamente a diario lo utilizo, pero de formas muy controladas y específicas. Con esto tengo un experimento que realicé: [viendo mi post anterior](https://gasparkral.github.io/portafolio/blog/es/dnd/), sabréis que me gustan los juegos de rol, más específicamente Dragones y Mazmorras. Entre ello, decidí hacer una aplicación para ayudarme en mis aventuras fantásticas, y para ello utilicé Claude, pero no simplemente como asistente, sino específicamente haciendo lo que he dicho arriba: detallando qué quiero y que Claude lo implemente como crea que es lo más óptimo. ¿Con qué me he encontrado al final de este proceso?
    1. D&D es realmente muy complejo de programar, tiene demasiados casos específicos.
    2. Cuando me quedaba sin TOKENs, pues nada, a esperar al día siguiente para seguir; todo un caso de productividad máxima.
    3. La interfaz gráfica es la cosa más genérica que he visto nunca. A pesar de que di direcciones artísticas para hacer una aplicación interesante, tenía 0 personalidad.
    4. La aplicación funciona así, así; la parte móvil deja mucho que desear, y la parte desktop... bueno, es "utilizable".
Algunos dirán que no fui suficientemente específico, que seguro que no explicaba bien las cosas, que le faltaba contexto... La verdad es que, después de un manual de 13 páginas en Calibri 11, y acceso directo a mi disco para que pudiera leer los archivos en caso de necesitar más contexto, si no es capaz de hacer el trabajo, es difícil echar la culpa.

Los LLM, desde mi opinión, no deberían ser sustitutivos del trabajo de uno. Aún recuerdo el momento en el que se comenzaron a utilizar en los sistemas de autocompletado de los *IDEs*; ya ahí comencé a sentir efectos que no me gustaban: quedarme parado esperando que saliera el autocompletado, que parecía que había olvidado cómo era la sintaxis de un lenguaje con el que llevaba muchas horas de trabajo en mi espalda. Sinceramente, creo que el mejor uso es el explicativo: tener un profesor que se puede ajustar a tu nivel justo, que pueda crear ejemplos *in situ* si no comprendes algo cuando estás estudiando una nueva tecnología, o para tareas muy repetitivas, donde se tenga un contexto lo suficientemente similar para que el LLM lo haga solo sin generar error. Son buenos puntos.

# Cómo yo utilizo la IA

Como he dicho, utilizo principalmente Claude, en su formato aplicación de escritorio; ahora entro en detalle del porqué. También ChatGPT y DeepSeek para ciertas tareas.

## ChatGPT
Sobre todo, su uso recae en cosas creativas. Los modelos de OpenAI han sido entrenados en una buena cantidad de cuestiones humanitarias, artísticas y de diseño; probablemente mucho de ello sin atribuir nada a sus creadores originales. Todo lo que caiga en **UI/UX** o en generación de imágenes, cosas por el estilo. También lo utilizo para ciertas traducciones, ya que suele ajustar bien el tono que tengo a otros idiomas, aunque si tengo tiempo, prefiero hacerlo yo directamente.

## DeepSeek
Esta tiene un poco de truco. La utilizo para tareas repetitivas o que requieran ajustes menores que no tengan mucha lógica de por medio. Digamos que es el LLM que utilizo cuando quiero ahorrar TOKENs en los otros.

## Claude
Finalmente, el grande, el que más he hecho trabajar hasta el punto que me lo bloquearon por tres días. Si se le guía, puede hacer buen trabajo y que no requiera invertir mucho tiempo a posteriori. Yo lo utilizo de la siguiente forma: como he dicho, en su modalidad desktop, permite crear "Proyectos", donde puedes agregar mucho contexto inicial, puedes decirle el tono de desarrollo a usar, ajustar la memoria de las conversaciones y, entre otras cosas, darle acceso mediante los *MCPs* a habilidades como leer archivos o escribirlos. Primero preparo el contexto del proyecto, le digo qué se va a desarrollar, qué se espera que el modelo haga. Luego le doy una lista de normas que debe cumplir, entre las que más destacan:
- No modificar archivos sin consentimiento explícito; esto lo hago para que me permita leer lo que va a hacer antes de lanzarse.
- Tras cualquier petición, hacer una explicación resumida de qué va a hacer, cómo y qué necesita de contexto para desarrollarlo. Sé que esto quema muchos TOKENs, pero así puedo corregir antes de pasar a la siguiente actividad, lo cual me ha salvado varias veces.
Otra cosa que me gusta hacer es usar un tono de escritura personalizado: básicamente actúa como un mentor senior. Cuando le hago una pregunta referente a conocimientos, este no me da la respuesta directamente, sino que me hace preguntas para guiarme a la respuesta por mí mismo. Si ve que no soy capaz, me responde de manera directa, y luego me hace una pregunta hipotética sobre el caso para asegurarse de que lo he comprendido.

Con estos ajustes puedo trabajar sin miedo a ir dando palos de ciego.
