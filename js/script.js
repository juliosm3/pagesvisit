const contadorVisitasElemento = document.getElementById('contadorVisitas');
const btnRestablecer = document.getElementById('btnRestablecer');

// Función para inicializar el contador de visitas
function inicializarContador() {
// Obtener el contador actual del localStorage, o inicializar en 0 si no existe
  let visitas = parseInt(localStorage.getItem('contadorVisitas')) || 0;

  // Incrementar el contador
  visitas += 1;

  // Actualizar el contador en el DOM y en el localStorage
  contadorVisitasElemento.textContent = visitas;
  localStorage.setItem('contadorVisitas', visitas);
}

// Función para reestablecer el contador
function reestablecerContador() {
  // Reiniciar el contador en localStorage y en el DOM
  localStorage.setItem('contadorVisitas', 0);
  contadorVisitasElemento.textContent = 0;
}

// Inicializar el contador al cargar la página
inicializarContador();

// Añadir evento al botón de reestablecer
btnReestablecer.addEventListener('click', reestablecerContador);
