// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-list a');
    const currentLocation = location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});
