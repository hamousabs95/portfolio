// 1. Animation d’apparition des sections au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('section, .timeline-item, .carte-projet, .carte-certificat, .carte-softskill').forEach(el => {
    observer.observe(el);
});

// 2. Animation sur les boutons au clic
document.querySelectorAll('.btn, .btn-cta-bolt, .btn-projet').forEach(btn => {
    btn.addEventListener('click', function(e) {
        btn.classList.add('btn-clicked');
        setTimeout(() => btn.classList.remove('btn-clicked'), 300);
    });
});

// 3. Animation d’icônes au survol (footer et softskills)
document.querySelectorAll('.footer-social a, .carte-softskill i').forEach(icon => {
    icon.addEventListener('mouseenter', () => icon.classList.add('icon-animate'));
    icon.addEventListener('mouseleave', () => icon.classList.remove('icon-animate'));
});

// 4. Animation de titre d’accueil (effet machine à écrire)
const accueilTitle = document.querySelector('.hero-bolt-content h1');
if (accueilTitle) {
    const txt = accueilTitle.textContent;
    accueilTitle.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < txt.length) {
            accueilTitle.textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 70);
        }
    }
    typeWriter();
}

// 5. Toggle de la navbar sur mobile
document.querySelector('.navbar-toggle').onclick = function() {
    document.querySelector('.navbar-links').classList.toggle('open');
};

// Navbar responsive
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.navbar-toggle');
    const links = document.querySelector('.navbar-links');
    if(toggle && links) {
        toggle.onclick = () => links.classList.toggle('open');
    }
});

// Slider d'images pour projets
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-projet .slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let current = 0;

    function showSlide(idx) {
        if (!slides.length) return;
        slides.forEach((img, i) => img.classList.toggle('active', i === idx));
    }
    if(prevBtn && nextBtn && slides.length) {
        prevBtn.onclick = () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        };
        nextBtn.onclick = () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        };
        showSlide(current);
    }
});