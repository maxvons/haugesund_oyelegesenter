/* Toggle between adding and removing the "responsive" class to navbar when the
    user clicks the menu icon. This makes the navbar expand or shrink. */
function toggleMobileMenu() {
    const nav = document.querySelector(".navbar");
    const navDiv = document.querySelector(".navbar-div");
    const menuIcon = document.querySelector(".menu-icon");
    const continueIcon = document.querySelector(".continue-icon");

    if (!nav.classList.contains("responsive")) {
        nav.classList.add("responsive");
        navDiv.classList.add("navbar-div-responsive");
        menuIcon.classList.add("rotate");
        continueIcon.classList.add("continue-icon-responsive");
    }   else {
        nav.classList.remove("responsive");
        navDiv.classList.remove("navbar-div-responsive");
        menuIcon.classList.remove("rotate");
        continueIcon.classList.remove("continue-icon-responsive");
    }
}