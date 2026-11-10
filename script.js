// Esperar a que el documento cargue por completo
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle && sidebar) {
    // Alternar la clase 'active' cada vez que se hace clic en el botón
    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation(); // Evita que el clic se propague de más
      sidebar.classList.toggle('active');
    });

    // Opcional: Cerrar la barra si el usuario hace clic en cualquier parte fuera de ella en modo móvil
    document.addEventListener('click', (event) => {
      if (window.innerWidth < 768) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
          sidebar.classList.remove('active');
        }
      }
    });
  }
});