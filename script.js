// Seleccionar el botón y la sidebar
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// Abrir o cerrar la sidebar al hacer clic en el botón
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
