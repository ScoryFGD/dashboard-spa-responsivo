# Dashboard SPA Responsivo para Monitoreo Cloud

Proyecto desarrollado como una aplicación de página única (**SPA**) responsiva para el monitoreo de servidores y recursos en la nube, utilizando tecnologías web estándar (*HTML5, CSS3 y JavaScript vanilla*).

## 🚀 Características Principales
- **Diseño Responsivo (Mobile-First):** Adaptable de forma fluida a dispositivos móviles y pantallas de escritorio mediante CSS Grid y Flexbox.
- **Navegación SPA:** Sistema de vistas internas dinámicas (*Inicio, Servidores y Métricas*) integradas desde la barra lateral sin necesidad de recargar la página.
- **Menú Hamburguesa Interactivo:** Barra lateral desplegable optimizada para dispositivos móviles con control de eventos táctiles y de cierre automático.
- **Monitoreo en Tiempo Real:** 
  - Visualización gráfica interactiva de rendimiento de CPU integrada mediante **Chart.js**.
  - Tarjetas con métricas simuladas en tiempo real (CPU y uso de RAM) con iconos representativos (💻 y 🧠).
  - Listado de estado operativo de servidores cloud (*En línea* / *Mantenimiento*).

## 🛠️ Tecnologías Utilizadas
- **HTML5:** Estructura semántica de componentes.
- **CSS3:** Estilos personalizados, transiciones fluidas y diseño adaptable.
- **JavaScript (ES6+):** Lógica del menú lateral, renderizado condicional de vistas SPA y actualización dinámica de datos.
- **Chart.js:** Librería externa mediante CDN para el trazado de la gráfica de rendimiento.

## 📂 Estructura del Repositorio
- `index.html` - Contiene la estructura principal de la interfaz y las secciones SPA.
- `styles.css` - Contiene los estilos visuales, reglas de diseño y *media queries*.
- `script.js` - Controla la interactividad del menú, la navegación por pestañas y la simulación de datos en tiempo real.
