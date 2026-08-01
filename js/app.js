document.addEventListener("DOMContentLoaded", () => {

const paginas = [
    {
        fecha: "Para Ivantxu",
        titulo: "Nuestro Diario",
        texto: "Hay cosas de este diario que sí llegaron al papel.\nOtras se quedaron guardadas en mi memoria.\nHoy, por fin, también puedes leerlas tú. ❤️",
        observacion: "Una historia que hoy verás a través de mis ojos",
        decoracion: "✨"
    },

    {
    fecha: "Verano 2016 · Día 1",
    titulo: "Nos conocimos",
    texto: "Hoy he conocido a un chico muy callado que me ha llamado mucho la atención.",
    observacion: "No tenía ni idea de todo lo que estaba por venir. 🌿",
    decoracion: "☀️"
},
{
    fecha: "Verano 2016 · Día 2",
    titulo: "Es encantador",
    texto: "Hoy hemos hablado mucho más. Es muy atento y cada vez me apetece más pasar tiempo con él. 😊",
    observacion: "",
    decoracion: "☀️"
},
{
    fecha: "Verano 2016 · Día 3",
    titulo: "Cada vez me habla más",
    texto: "Estamos empezando a bajar todos los días juntos. Y cada vez me habla más. Me parece un poco desastre, pero es muy tierno. <3",
    observacion: "",
    decoracion: "☀️"
},
{
    fecha: "Verano 2016 · Día 4",
    titulo: "Le encanta Pokémon",
    texto: "Le encanta Pokémon. Sabe un montón de cosas y hoy ha empezado a contar datos súper curiosos sobre animales. No me lo esperaba, pero se nota que le encantan los documentales. 🐘🎮",
    observacion: "",
    decoracion: "☀️"
},
{
    fecha: "Verano 2016 · Día 5",
    titulo: "Se ha ido",
    texto: "Se ha ido. Es vasco, pero ha prometido que el verano que viene nos volveremos a ver. ❤️",
    observacion: "",
    decoracion: "🌅"
},
{
    fecha: "Verano 2017 · Día 1",
    titulo: "Nos vemos otra vez",
    texto: "Hoy lo he visto otra vez. Se comporta diferente, habla un poco más. La verdad es que me parece muy majo. 😊",
    observacion: "",
    decoracion: "🌻"
},
{
    fecha: "Verano 2017 · Día 2",
    titulo: "Qué pesados",
    texto: "Qué pesados... No paran de hablar de chicas. Los metí en un grupo con dos amigas mías, pero si soy sincera espero que no hagan click. Hay algo que no sé qué es, pero me llama muchísimo la atención de él.\n\n(Me han dado un poco de asco porque me estaban preguntando si tenían buenas «tetas». Odio a los chicos. 🙄😂)",
    observacion: "",
    decoracion: "🌻"
},
{
    fecha: "Verano 2017 · Día 3",
    titulo: "Quedamos",
    texto: "Quedé con unos amigos para las fiestas y nos encontramos. Estuvimos un rato hablando, pero luego dijo que se tenía que ir... Qué pena, la verdad. 🥺",
    observacion: "",
    decoracion: "🌻"
},
{
    fecha: "Verano 2017 · Día 4",
    titulo: "Conocerlo más",
    texto: "Hoy hemos estado un rato solos hablando y, la verdad, me ha parecido una persona muy distinta a cuando está con más gente. Es muy interesante. Me encanta hablar con él... Quiero conocerlo más. 💛",
    observacion: "",
    decoracion: "🌻"
},
{
    fecha: "Verano 2017 · Día 5",
    titulo: "Se va",
    texto: "Se ha despedido de todos. Se va y es una pena. Me dio su teléfono y un amigo me pasó su Instagram. Me da muchísima vergüenza hablarle, pero supongo que lo intentaré... Deséame suerte. 🍀",
    observacion: "",
    decoracion: "🌻"
},
{
    fecha: "Verano 2018 · Día 1",
    titulo: "Vuelvo a verlo ;)",
    texto: "Hoy lo he vuelto a ver. Está... diferente. No mal, solo diferente. Llevo todo el año pensando en volver a verlo y ahora resulta que en tres días se va otra vez. Me siento triste. Además, solo me responde a las historias cuando subo cosas de opinión y esas cosas. Creo que intenta ir de chulo, pero en realidad es muuuy tímidillo.",
    observacion: "",
    decoracion: "🌊"
},
{
    fecha: "Verano 2018 · Día 2",
    titulo: "Qué tierno",
    texto: "Hemos ido a las fiestas y me han llenado las piernas de balazos de agua. Él me ha defendido y, aunque ha sido entre risas, pidió que pararan. Creo que quería ayudarme, pero le daba corte decirlo. Qué tierno. ❤️",
    observacion: "",
    decoracion: "🌊"
},
{
    fecha: "Verano 2018 · Día 3",
    titulo: "NOOOOOOOO!!! se va...",
    texto: "Mañana por la mañana se va. Hoy fuimos a pasear y hablamos muchísimo más. Pasamos por un sitio y me dijo que por allí vivía su tía. Cuando vuelva el verano que viene voy a pasar por ahí... a ver si me lo encuentro de sorpresa. Jijiji. 🤭",
    observacion: "",
    decoracion: "🌊"
},
{
    fecha: "Verano 2019 · Día 1",
    titulo: "¡¡LLEGÓ!!",
    texto: "Hoy me ha avisado para bajar y le he dicho que sí, pero yo ya había quedado con unos amigos y con Iker. ¡¡NO SABES QUÉ RABIAAA!! 😭\n\nNos juntamos todos, pero él estaba bastante separado. No creo que fuera porque estuviera enfadado... creo que es porque le gusta Nayara.\n\nEstado: 😔 Triste y estresada.",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 2",
    titulo: "",
    texto: "Hoy me ha avisado para bajar. Son las fiestas de Ribeira y hemos ido a dar una vuelta con unos amigos. Me lo he pasado súper bien.Lo que más me ha sorprendido ha sido el final de la noche. Me bajó las gafas, se acercó y me dijo: «No son las gafas... tienes los ojos muy grandes y muy bonitos.» \n\nYa antes de eso lo sabía, pero ahí me di cuenta de que llevaba mucho tiempo gustándome.\n\nMe acompañó a casa y nos despedimos.\n\nEstado: 😊 Contenta.",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 2 (madrugada)",
    titulo: "",
    texto: "¿Qué está pasando?\n\nNo pude dormir en toda la noche. Como me había hablado varias veces para preguntarme cosas sobre mis amigas, nunca habría pensado que pudiera gustarle yo.\n\nLe escribí de madrugada para decirle que me lo había pasado muy bien y preguntarle si le gustaba mi amiga.\n\nMe respondió que no... que la que le gustaba era yo.\n\nEstoy en shock. 😳",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 2 (continuación)",
    titulo: "",
    texto: "Hemos quedado mañana por la mañana para bajar con mi hermana pequeña.\n\nNo sé ni qué me voy a poner.\nNo sé ni cómo voy a hablarle.\n\nAHHHHHH. 💖",
    observacion: "Estado: Shockeada.",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 3",
    titulo: "",
    texto: "Guau...\n\nCreo que hoy ha sido el mejor día de mi vida.\n\nPor la mañana quedamos para dar una vuelta con mi hermana Sara. Bajé súper nerviosa, pero en cuanto empezamos a hablar las palabras salieron solas.\n\nCasi me pongo a llorar de la emoción. ❤️",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 3",
    titulo: "",
    texto: "Mi hermana es súper tímida. No habla con casi nadie y muchísimo menos le da la mano a la gente.\n\nPero esa mañana estuvo hablando con él como si lo conociera de toda la vida.\n\nPrimero fuimos a comprar una riñonera que quería y, cuando íbamos a tomar algo, pasamos por una tienda de chuches.\n\nSara dijo que quería entrar...",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 3",
    titulo: "",
    texto: "Yo le dije que no, porque íbamos a comer después.\n\nPero él salió corriendo con Sara hacia la tienda y le compró chuches igualmente.\n\nAunque me hice la ofendida... por dentro no podía dejar de sonreír. ❤️",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 3",
    titulo: "",
    texto: "Después fuimos a tomar algo a una cafetería que se llamaba Kukua, justo delante de un parque.\n\nMientras Sara jugaba, nosotros hablamos y nos reímos durante un buen rato.\n\nAl final nos acompañó a casa.\n\nLe dijo a Sara que subiera primero.\n\nY ella le hizo caso.",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 3",
    titulo: "",
    texto: "Cuando me despedí para vernos por la tarde...\n\nMe sonrió.\n\nMe dijo:\n\n«Hazlo bien.»\n\nY me besó. ❤️",
    observacion: "Estado: Completamente enamorada.",
    decoracion: "💋"
},
{
    fecha: "Verano 2019 · Día 3",
    titulo: "",
    texto: "No sé cómo explicar lo que sentí.\n\nSolo recuerdo que me fui a casa con una sonrisa que no había manera de borrar.\n\nCreo que, sin darme cuenta, ese día empezó la historia más bonita de mi vida. ❤️",
    observacion: "",
    decoracion: "✨"
},
{
    fecha: "Verano 2019 · Día 4",
    titulo: "",
    texto: "Desde ayer estoy como en una nube. No soy capaz de parar de sonreír.\n\nHoy hemos estado solos y hemos hablado un montón. No sabía quién era Blake, pero como me dijo que le gustaba le dije que a mí también... Ahora me va a tocar buscar quién es. Jajajaja. 🤭",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 4",
    titulo: "",
    texto: "También descubrí que es Tauro, como mi hermana, pero él nació en mayo. Lo apunté enseguida en el calendario del móvil para que no se me olvidara nunca. 📅\n\nLuego me habló de sus amigos de allí. Hay uno que se llama Caballo y creo que es su mejor amigo. Hoy hablaron por teléfono y me pareció súper gracioso. 😂",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 4",
    titulo: "",
    texto: "Ha sido un día muy guay.\n\nNo sé qué tiene, pero cuanto más tiempo paso con él, más ganas tengo de seguir conociéndolo. ❤️",
    observacion: "",
    decoracion: "✨"
},
{
    fecha: "Verano 2019 · Día 5",
    titulo: "",
    texto: "Cada vez que paso más tiempo con él no quiero que se vaya.\n\nMe gusta muchísimo. Es muy gracioso, muy interesante y me dice cosas muy bonitas.\n\nYa les he hablado de él a mis amigas y están igual de emocionadas que yo. Como nunca les hablo de ningún chico, siempre me dicen que me voy a quedar para ser la tía chula. 😂",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 5",
    titulo: "",
    texto: "Solo hay una cosa que me da un poco de miedo.\n\nQuiero presentárselo a mis amigas porque estoy segura de que les va a caer súper bien...Pero, al mismo tiempo, me da cosa que le pueda gustar alguna de ellas. Es una sensación rara. No me gusta. 🥺",
    observacion: "",
    decoracion: "❤️"
},
{
    fecha: "Verano 2019 · Día 6",
    titulo: "",
    texto: "Hoy hemos quedado primero solos y luego con Adrián.\n\nCuando estábamos solos pasó algo que no voy a olvidar nunca.Yo llevaba una pulsera de España. Bueno... la llevaba hasta hoy. ❤️",
    observacion: "",
    decoracion: "🖤🤍"
},
{
    fecha: "Verano 2019 · Día 6",
    titulo: "",
    texto: "Él me agarró de la mano y, sin decirme nada, me cambió mi pulsera por la suya.Ahora la llevo yo.Es de cuerda negra con una franja de cuero blanco en el centro. Es muy bonita.\n\nMe dijo que no sabía si podría usar la mía donde él vivía, pero que así los dos nos llevaríamos un recuerdo del otro.\n\nSentía que el corazón me iba a explotar en un millón de trozos. ❤️",
    observacion: "",
    decoracion: "🖤🤍"
},
{
    fecha: "Verano 2019 · Día 6",
    titulo: "",
    texto: "Después nos fuimos con Adri.\n\nSe dio cuenta enseguida de que llevaba otra pulsera y preguntó qué había pasado.\n\nIván sonrió y le respondió:«Son cosas nuestras... me gustaba su pulsera.»Y luego me miró con una sonrisa.\n\nMe lo quiero comeeeer. ❤️",
    observacion: "",
    decoracion: "🖤🤍"
},
{
    fecha: "Verano 2019 · Despedida",
    titulo: "",
    texto: "Y ya está...Se acabó.\n\nHoy se ha vuelto a ir.\n\nNo puedo parar de llorar. 😢",
    observacion: "",
    decoracion: "🌙"
},
{
    fecha: "Verano 2019 · Final",
    titulo: "",
    texto: "Hoy hemos subido al monte con Adrián.\n\nIntenté hacer lo que dice la gente... ahogar las penas en alcohol.Decidido. No pienso volver a hacerlo nunca más. Ni yo me sentí bien, ni él tampoco. Se enfadó conmigo y casi ni pudimos despedirnos.Durante días tuve miedo de haberlo estropeado todo.\n\nPero después de todo este tiempo entendí una cosa...Me había enamorado de él.\n\nHasta los huesos. ❤️",
    observacion: "",
    decoracion: "✨"
},
{
    fecha: "",
    titulo: "Aquí supe que ya me tenías atrapada. ❤️",
    texto: "",
    observacion: "",
    decoracion: ""
}
];

let paginaActual = 0;
const fecha = document.getElementById("fecha");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const observacion = document.getElementById("observacion");
const decoracion = document.getElementById("decoracion");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

function cargarPagina(){

    const pagina = paginas[paginaActual];

    fecha.textContent = pagina.fecha;
    titulo.textContent = pagina.titulo;
    texto.textContent = pagina.texto;
    observacion.textContent = pagina.observacion;
    decoracion.textContent = pagina.decoracion;
    if (paginaActual === 0) {

    botonAnterior.style.display = "none";
    botonSiguiente.textContent = "Comenzar →";

} else {

    botonAnterior.style.display = "";
    botonSiguiente.textContent = "Siguiente →";

}

}

cargarPagina();
    const libro = document.getElementById("libro");
    const abrir = document.getElementById("abrir");

    if (!libro || !abrir) {
        console.error("No se encontró el libro o el botón abrir.");
        return;
    }

    abrir.addEventListener("click", () => {

        libro.classList.add("abierto");
        abrir.classList.add("oculto");
botonSiguiente.addEventListener("click", () => {

    if (paginaActual < paginas.length - 1) {

        paginaActual++;
        cargarPagina();

    }

});

botonAnterior.addEventListener("click", () => {

    if (paginaActual > 0) {

        paginaActual--;
        cargarPagina();

    }

});
    });

});