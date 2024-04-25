var activo = false;
const menu_desplegable = document.getElementById('menu-desplegable');

document.querySelector('.nav-links .bx-menu').addEventListener("click", () => {
    if (activo === false) {
        activo = true;
        menu_desplegable.style.display = "block";
    } else {
        activo = false;
        menu_desplegable.style.display = "none";
    }
});