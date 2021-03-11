/* Toggle between adding and removing the "responsive" class to navbar when the
    user clicks the menu icon. This makes the navbar expand or shrink. */
function toggleMobileMenu() {
    const nav = document.querySelector(".navbar");
    const navDiv = document.querySelector(".navbar-div");
    const menuIcon = document.querySelector(".menu-icon");
    const continueIcon = document.querySelector(".continue-icon");
    const body = document.querySelector("body");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!nav.classList.contains("responsive")) {
        body.classList.add("stop-scroll");
        nav.classList.add("responsive");
        nav.classList.remove("padding-bottom-small");
        navDiv.classList.add("navbar-div-responsive");
        menuIcon.classList.add("rotate");
        continueIcon.classList.add("continue-icon-responsive");
        navLinks.forEach(link => link.classList.add("fadeInUp"));
    }   else {
        body.classList.remove("stop-scroll");
        nav.classList.remove("responsive");
        nav.classList.add("padding-bottom-small");
        navDiv.classList.remove("navbar-div-responsive");
        menuIcon.classList.remove("rotate");
        continueIcon.classList.remove("continue-icon-responsive");
        navLinks.forEach(link => link.classList.remove("fadeInUp"));
    }
}

function toggleMobileMenuNavLink() {
    const nav = document.querySelector(".navbar");
    const navDiv = document.querySelector(".navbar-div");
    const menuIcon = document.querySelector(".menu-icon");
    const continueIcon = document.querySelector(".continue-icon");
    const body = document.querySelector("body");

    if (nav.classList.contains("responsive")) {
        body.classList.remove("stop-scroll");
        nav.classList.remove("responsive");
        nav.classList.add("padding-bottom-small");
        navDiv.classList.remove("navbar-div-responsive");
        menuIcon.classList.remove("rotate");
        continueIcon.classList.remove("continue-icon-responsive");
    }
}

window.onload = function() {
    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ) {
        let observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y < 0) {
            document.body.classList.add("header-not-at-top");
            } else {
            document.body.classList.remove("header-not-at-top");
            }
        });
        observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
    }
}