// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de contato
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por entrar em contato! Responderemos em breve.');
    this.reset();
});