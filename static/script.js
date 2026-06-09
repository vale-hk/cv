// Simple floating animation
const style = document.createElement('style');
style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
    `;
document.head.appendChild(style);

// Smooth reveal on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});
// Efecto cursor notebooks con rosa
const heroSection = document.getElementById('inicio');
const emojis = ['📓', '💜', '📔', '🌷'];

heroSection.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.85) {
        const el = document.createElement('div');
        el.classList.add('notebook-cursor');
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = e.clientX + 'px';
        el.style.top = e.clientY + 'px';
        el.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1200);
    }
});

//FORMULARIO DE CONTACTO
document.getElementById('form-contacto').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const datos = new FormData(form);

    const respuesta = await fetch(form.action, {
        method: 'POST',
        body: datos,
        headers: {'Accept': 'application/json'}
    });

    if (respuesta.ok) {
        document.getElementById('form-contacto').style.display = 'none';
        document.getElementById('mensaje-exito').style.display = 'block';
    } else {
        alert('Hubo un problema al enviar. Intenta de nuevo');
    }
};
//MENU MÓVIL
const botonMenu = document.getElementById('boton-menu');
const menuMovil = document.getElementById('menu-movil');

// Abrir y cerrar el menú al tocar el botón
botonMenu.addEventListener('click', function () {
    menuMovil.classList.toggle('hidden');
});

// Cerrar el menú automáticamente al tocar cualquier link
menuMovil.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        menuMovil.classList.add('hidden');
    });
});