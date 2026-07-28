document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('abrir');

  if (boton) {
    boton.addEventListener('click', () => {
      boton.classList.add('oculto');
    });
  }
});
