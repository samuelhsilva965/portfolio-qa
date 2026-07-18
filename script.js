document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('navbarToggle');
    const menu = document.getElementById('navbarMenu');

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function () {
            const isOpen = menu.classList.toggle('open');
            toggleButton.setAttribute('aria-expanded', isOpen);
        });

        // (Opcional) Fecha o menu ao clicar em um link
        const navLinks = menu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                toggleButton.setAttribute('aria-expanded', 'false');
            });
        });
    }
});