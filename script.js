document.addEventListener("DOMContentLoaded", () => {
  // 1. Control del Menú Lateral (Desplegar y ocultar)
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      sidebar.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
      if (window.innerWidth < 768) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
          sidebar.classList.remove('active');
        }
      }
    });
  }

  // 2. Navegación SPA (Cambiar de vista sin recargar la página)
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.spa-section');
  const pageTitle = document.getElementById('pageTitle');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');

      // Actualizar enlace activo en el menú
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Mostrar únicamente la sección seleccionada
      sections.forEach(sec => {
        sec.classList.remove('active');
        if (sec.id === `section-${target}`) {
          sec.classList.add('active');
        }
      });

      // Actualizar el título de la página
      if (pageTitle) {
        pageTitle.textContent = `Monitoreo - ${link.textContent}`;
      }

      // En móviles, cerrar la barra tras hacer clic
      if (window.innerWidth < 768) {
        sidebar.classList.remove('active');
      }
    });
  });

  // 3. Gráfica de Rendimiento Dinámica (Chart.js)
  const ctx = document.getElementById('performanceChart')?.getContext('2d');
  
  if (ctx) {
    const performanceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['10s', '8s', '6s', '4s', '2s', 'Ahora'],
        datasets: [{
          label: 'Uso de CPU (%)',
          data: [35, 42, 38, 55, 48, 42],
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });

    // Simulación de métricas dinámicas cada 2.5 segundos
    setInterval(() => {
      const newCpu = Math.floor(Math.random() * (75 - 30 + 1)) + 30;
      const newRam = (Math.random() * (12.0 - 5.0) + 5.0).toFixed(1);

      const cpuValueElem = document.getElementById('cpuValue');
      const ramValueElem = document.getElementById('ramValue');

      if (cpuValueElem) cpuValueElem.textContent = `${newCpu}%`;
      if (ramValueElem) ramValueElem.textContent = `${newRam} GB`;

      performanceChart.data.datasets[0].data.shift();
      performanceChart.data.datasets[0].data.push(newCpu);
      performanceChart.update();

    }, 2500);
  }
});