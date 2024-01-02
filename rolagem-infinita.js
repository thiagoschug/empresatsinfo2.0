// Rolagem das Pg

function scrollToNearestSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    const nearestSection = Array.from(sections).reduce((closest, section) => {
        const sectionTop = section.offsetTop;
        return (Math.abs(sectionTop - scrollPosition) < Math.abs(closest - scrollPosition)) ? sectionTop : closest;
    }, Infinity);

    window.scrollTo({
        top: nearestSection,
        behavior: 'smooth',
        duration: 0.1 // Ajuste o valor conforme necessário para uma animação mais rápida ou mais lenta
    });
}

window.addEventListener('scroll', scrollToNearestSection);