document.addEventListener("DOMContentLoaded", () => {

const paginas = [
    {
        fecha: "Para Ivantxu",
        titulo: "Nuestro Diario",
        texto: "Hay cosas de este diario que sí llegaron al papel.\nOtras se quedaron guardadas en mi memoria.\nHoy, por fin, también puedes leerlas tú. ❤️",
        observacion: "Una historia que hoy verás a través de mis ojos",
        decoracion: "✨"
    }
];

let paginaActual = 0;
const fecha = document.getElementById("fecha");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const observacion = document.getElementById("observacion");
const decoracion = document.getElementById("decoracion");

function cargarPagina(){

    const pagina = paginas[paginaActual];

    fecha.textContent = pagina.fecha;
    titulo.textContent = pagina.titulo;
    texto.textContent = pagina.texto;
    observacion.textContent = pagina.observacion;
    decoracion.textContent = pagina.decoracion;

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

    });

});