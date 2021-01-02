/* Toggle between adding and removing the "responsive" class to navbar when the
    user clicks the menu icon. This makes the navbar expand or shrink. */
function toggleMobileMenu() {
    const nav = document.querySelector(".navbar");
    const menu_icon = document.querySelector(".menu-icon");

    if (!nav.classList.contains("responsive")) {
        nav.classList.add("responsive");
        menu_icon.classList.add("rotate");
    }   else {
        nav.classList.remove("responsive");
        menu_icon.classList.remove("rotate");
    }
}