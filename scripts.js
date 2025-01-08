// Activar o desactivar el menú en pantallas pequeñas
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



