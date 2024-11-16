document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const sidenav = document.querySelector(".side-nav");

    header.innerHTML = `
    <div class="header-container">
        <div class="container">
            <div class="header-content">
                <img src="img/logo.png" alt="Logo Empresa" class="logo">
                <div class="header-right">
                    <nav class="nav-menu">
                        <a href="index.html">Inicio</a>
                        <a href="404.html">Mi Colonia</a>
                        <a href="404.html">Cámaras</a>
                        <a href="mis-pagos.html">Mis Pagos</a>
                    </nav>
                    <div class="header-icons">
                        <i class="fas fa-bell"></i>
                        <i class="fas fa-user-circle"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-line"></div>
    </div>
    <!-- Botón de menú para dispositivos pequeños -->
    <div class="menu-button" onclick="toggleSideNav()">
        <i class="fas fa-bars"></i>
    </div>
    `;

    footer.innerHTML = `
    <div class="container">
        <div class="footer-logo-section">
            <img src="img/ITsoluciones.png" alt="IT Soluciones" class="footer-logo">
            <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </div>
    </div>
    <div class="footer-line"></div>
    <div class="container footer-content">
        <div class="footer-section">
            <h3>Contacto</h3>
            <p><strong>Dirección:</strong> </p>
                <li>Circuito Álamos #387, Fracc. Santa Rosa, C.P. 35069 Gómez Palacio, Dgo</li><br>
            <p><strong>Teléfonos:</strong></p>
            <li>+52 871 508 3644</li>
            <li>+52 871 484 1003</li>
            <br>
            <p><strong>Correo electrónico:</strong></p>
                <li><a href="mailto:contacto@solucionesit.tech">contacto@solucionesit.tech</a></li>
        </div>
        <div class="footer-section">
            <h3>Sobre Nosotros</h3>
            <p><strong>CV Empresarial:</strong><br> Conoce más sobre IT soluciones y descarga nuestro CV en el siguiente botón.</p><br>
            <button>DESCARGAR</button>
        </div>
        <div class="footer-section">
            <h3>Otras Referencias</h3>
            <p><a href="#">Manual de Usuario</a></p>
            <p><a href="#">Soporte Técnico</a></p>
            <p><a href="#">FAQ</a></p>
            <p><a href="#">Contratar SICADA</a></p>
        </div>
    </div>
    `;

    sidenav.innerHTML = `
    <div class="side-nav-content">
        <a href="index.html"><i class="fas fa-home"></i><span class="link-text">Inicio</span></a>
        <a href="404.html"><i class="fas fa-city"></i><span class="link-text">Mi Colonia</span></a>
        <a href="404.html"><i class="fas fa-video"></i><span class="link-text">Cámaras</span></a>
        <a href="mis-pagos.html"><i class="fas fa-wallet"></i><span class="link-text">Mis Pagos</span></a>
        <a href="404.html"><i class="fas fa-bell"></i><span class="link-text">Notificaciones</span></a>
        <a href="404.html"><i class="fas fa-user-circle"></i><span class="link-text">Perfil</span></a>
    </div>
    `;

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dotsContainer = document.querySelector('.carousel-dots');

    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        slides.forEach((slide, i) => {
            slide.style.display = i === currentSlide ? 'block' : 'none';
            slide.style.opacity = i === currentSlide ? '1' : '0';  // Asegura que solo la diapositiva actual sea visible
        });
        updateDots();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    function updateDots() {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.classList.toggle('active', i === currentSlide);
            dot.onclick = () => {
                currentSlide = i;
                showSlide(currentSlide);
            };
            dotsContainer.appendChild(dot);
        });
    }

    document.querySelector('.carousel').addEventListener('mouseover', () => {
        document.querySelector('.carousel-controls').style.display = 'flex';
    });

    document.querySelector('.carousel').addEventListener('mouseout', () => {
        document.querySelector('.carousel-controls').style.display = 'none';
    });

    showSlide(currentSlide);

    // Cambia de diapositiva cada 10 segundos (opcional)
    setInterval(nextSlide, 10000);

    const sections = document.querySelectorAll('.content-section');
    const menuItems = document.querySelectorAll('.sidebar li');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.sidebar li[onclick="showSection('${sectionId}')"]`).classList.add('active');
    }

    // Mostrar la primera sección por defecto
    showSection('panel-control');
    
});

function toggleSideNav() {
    document.querySelector('.side-nav').classList.toggle('show');
}
