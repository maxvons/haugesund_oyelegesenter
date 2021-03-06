/* Toggle between adding and removing the "responsive" class to navbar when the
    user clicks the menu icon. This makes the navbar expand or shrink. */
function toggleMobileMenu() {
    const nav = document.querySelector(".navbar");
    const navDiv = document.querySelector(".navbar-div");
    const continueIcon = document.querySelector(".continue-icon");
    const body = document.querySelector("body");
    const topButton = document.querySelector(".to-top-button");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!nav.classList.contains("responsive")) {
        body.classList.add("stop-scroll");
        nav.classList.add("responsive");
        nav.classList.remove("padding-bottom-small");
        navDiv.classList.add("navbar-div-responsive");
        continueIcon.classList.add("continue-icon-responsive");

        /* If top-button is visible, it should not be shown on the mobile menu. */
        if (topButton.classList.contains("show")) {
            topButton.classList.remove("show");
            topButton.classList.add("triggered-by-menu"); /* If it was hidden by the menu */
        }

        navLinks.forEach(link => link.classList.add("fadeInUp"));
    }   else {
        body.classList.remove("stop-scroll");
        nav.classList.remove("responsive");
        nav.classList.add("padding-bottom-small");
        navDiv.classList.remove("navbar-div-responsive");
        continueIcon.classList.remove("continue-icon-responsive");

        /* If top-button was hidden by mobile menu, it should be shown again. */
        if (topButton.classList.contains("triggered-by-menu")) {
            topButton.classList.add("show");
            topButton.classList.remove("triggered-by-menu");
        }

        navLinks.forEach(link => link.classList.remove("fadeInUp"));
    }
}

function toggleMobileMenuNavLink(caller) {
    const nav = document.querySelector(".navbar");
    const navDiv = document.querySelector(".navbar-div");
    const continueIcon = document.querySelector(".continue-icon");
    const body = document.querySelector("body");
    const topButton = document.querySelector(".to-top-button");

    if (nav.classList.contains("responsive")) {
        body.classList.remove("stop-scroll");
        nav.classList.remove("responsive");
        nav.classList.add("padding-bottom-small");
        navDiv.classList.remove("navbar-div-responsive");
        continueIcon.classList.remove("continue-icon-responsive");

        /* Check if top-button should be shown again */
        if (topButton.classList.contains("triggered-by-menu")) {
            const showButtonCallers = ["nav-link-find", "nav-link-disease",
                                       "nav-link-contact"];
            /* If the scroll position requires the top-button to be visible */
            if (showButtonCallers.includes(caller.id)) {
                topButton.classList.add("show");
                topButton.classList.remove("triggered-by-menu");
            }
        }
    }
}

window.onload = function() {

    /*
    Make sure continue button vanishes when scrolling down and comes into view
    when scrolling up. Make sure that to-top button comes into view when scrolling
    further down and vanishes when scrolling up again.
    */

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            /* If scrolled past the anchor. */
            if (entry.boundingClientRect.y < 0) {

                /* Get the correct element. */
                const target = entry.target.id === "top-of-site-pixel-anchor"
                                   ? document.querySelector(".continue-button")
                                   : document.querySelector(".to-top-button");

                /* Determine which class to add. */
                const classAdd = target.classList.contains("continue-button") ? "hide" : "show";

                target.classList.add(classAdd);
            }   else {

                /* Get the correct element. */
                const target = entry.target.id === "top-of-site-pixel-anchor"
                                ? document.querySelector(".continue-button")
                                : document.querySelector(".to-top-button");

                /* Determine which class to remove. */
                const classRemove = target.classList.contains("continue-button") ? "hide" : "show";

                /*
                Check if the element already contains the class.
                This means that we have scrolled past the element once, and are
                now scrolling up again.
                */
                if (target.classList.contains(classRemove)) {
                    target.classList.remove(classRemove);
                }
            }
        });
    });

    /* Get the pixel-anchors that are used as waypoints for the buttons. */
    const anchors = document.querySelectorAll(".anchor")

    anchors.forEach(anchor => {
        observer.observe(anchor);
    });
}