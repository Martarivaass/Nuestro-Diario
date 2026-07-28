document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('abrir');
  const diario = document.getElementById('diario');

  if (boton && diario) {
    boton.addEventListener('click', () => {
      boton.classList.add('oculto');
      diario.classList.add('abierto');
    });
  }
});
