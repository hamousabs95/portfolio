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