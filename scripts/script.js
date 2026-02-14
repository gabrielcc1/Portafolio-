// Toggle Dark Mode
function toggleModo() {
    const body = document.body;
    body.classList.toggle('modo-oscuro');
    localStorage.setItem('modoOscuro', body.classList.contains('modo-oscuro'));
}

// Cargar preferencia de modo oscuro
document.addEventListener("DOMContentLoaded", () => {
    const modoOscuro = localStorage.getItem('modoOscuro') === 'true';
    if (modoOscuro) {
        document.body.classList.add('modo-oscuro');
    }

    // Proyectos
    const proyectos = [
        {
            titulo: "FlightOnTime",
            descripcion: "Sistema Predictivo de Retrasos en Vuelos. FlightOnTime es una plataforma predictiva que utiliza Machine Learning para estimar la probabilidad de retraso de un vuelo, permitiendo a los usuarios tomar decisiones informadas.",
            imagen: "./assets/proyecto1.png",
            enlace: "https://github.com/Alura-FlightOnTime",
            sitioWeb: "https://flight-on-time.duckdns.org/",
            categoria: "Data science"
        },
        {
            titulo: "Amazing Events",
            descripcion: "Esta es una aplicación web dinámica desarrollada para la gestión y visualización de eventos. El proyecto permite filtrar eventos por categorías, buscarlos por nombre, ver detalles específicos y analizar estadísticas de asistencia y recaudación.",
            imagen: "./assets/cinema.jpg",
            enlace: "https://github.com/gabrielcc1/task-01JavaScript",
            sitioWeb: "https://gabrielcc1.github.io/task-01JavaScript/",
            categoria: "html"
        },
        {
            titulo: "Análisis de Fuga de Clientes (Churn) en Telecomunicaciones parte 2",
            descripcion: "El objetivo principal es preparar y comprender el conjunto de datos para sentar las bases de un modelo de predicción",
            imagen: "./assets/proyecto2.png",
            enlace: "https://github.com/gabrielcc1/Challenge_Telecom_X_an-lisis_de_evasi-n_de_clientes-Parte_2",
            sitioWeb: "https://github.com/gabrielcc1/Challenge_Telecom_X_an-lisis_de_evasi-n_de_clientes-Parte_2",
            categoria: "data science"
        },
        {
            titulo: "Análisis de Evasión de Clientes (Churn)",
            descripcion: "A través de análisis exploratorios y visualizaciones, se busca extraer insights accionables para mejorar la retención de usuarios.",
            imagen: "./assets/proyecto3.png",
            enlace: "https://github.com/gabrielcc1/Challenge-Data-Science-Telecom-X",
            sitioWeb: "https://github.com/gabrielcc1/Challenge-Data-Science-Telecom-X",
            categoria: "data science"
        },
        {
            titulo: "Análisis de Desempeño",
            descripcion: "proyecto que muestra el análisis de datos de ventas, rendimiento y reseñas, se identifica la tienda menos eficiente y se elabora una recomendación final, respaldada por evidencia.",
            imagen: "./assets/proyecto4.png",
            enlace: "https://github.com/gabrielcc1/Challenge-Alura-Store",
            sitioWeb: "https://github.com/gabrielcc1/Challenge-Alura-Store",
            categoria: "data science"
        },
        {
            titulo: "Amigo Secreto - Web App",
            descripcion: "Esta aplicación web permite a los usuarios, Ingresar los nombres de sus amigos, visualizar la lista de participantes y sortear un amigo secreto de manera aleatoria de forma rápida y sencilla.",
            imagen: "./assets/proyecto5.png",
            enlace: "https://github.com/gabrielcc1/Challenge-amigo-secreto",
            sitioWeb: "https://gabrielcc1.github.io/Challenge-amigo-secreto/",
            categoria: "css"
        }
    ];

    const galeria = document.querySelector(".proyectos__galeria");

    if (galeria) {
        // Renderizar todos los proyectos inicialmente
        proyectos.forEach(proy => {
            const div = document.createElement("div");
            div.classList.add("proyecto");
            div.setAttribute("data-categoria", proy.categoria);
            div.innerHTML = `
                <img src="${proy.imagen}" alt="${proy.titulo}" loading="lazy">
                <h3>${proy.titulo}</h3>
                <p>${proy.descripcion}</p>
                <a href="${proy.enlace}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github" style="margin-right: 8px;"></i>Ver en GitHub
                </a>
                <a href="${proy.sitioWeb}" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt" style="margin-right: 8px;"></i>Sitio web
                </a>
            `;
            galeria.appendChild(div);
        });
    }
});

// Filtrar proyectos
function filtrarProyectos(categoria) {
    const proyectos = document.querySelectorAll(".proyecto");
    const botones = document.querySelectorAll(".filter-btn");

    // Actualizar estado de botones
    botones.forEach(btn => {
        btn.classList.remove("active");
    });
    event.target.classList.add("active");

    // Filtrar proyectos
    proyectos.forEach(proyecto => {
        if (categoria === 'todos' || proyecto.getAttribute("data-categoria") === categoria) {
            proyecto.style.display = "block";
            setTimeout(() => proyecto.style.opacity = "1", 10);
        } else {
            proyecto.style.opacity = "0";
            setTimeout(() => proyecto.style.display = "none", 300);
        }
    });
}

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Efecto de animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .valor-card, .proyecto').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Manejo del formulario de contacto (abre mailto con contenido)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    const status = document.querySelector('#contact-status');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[name="name"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            const message = form.querySelector('textarea[name="message"]').value.trim();
            if (!name || !email || !message) {
                if (status) status.textContent = 'Por favor completa todos los campos.';
                return;
            }
            if (status) status.textContent = 'Preparando tu correo...';
            const subject = encodeURIComponent('Contacto desde portafolio: ' + name);
            const body = encodeURIComponent(message + '\n\nContacto: ' + name + ' - ' + email);
            window.location.href = `mailto:cesc.caballero@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
