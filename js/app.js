document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("abrir");
    const libro = document.getElementById("libro");

    if (!boton || !libro) return;

    boton.addEventListener("click", () => {

        boton.classList.add("oculto");

        libro.classList.add("abierto");

    });

});
