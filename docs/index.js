const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        navToggle.setAttribute("aria-expanded", true);
        primaryNav.setAttribute("data-visible", true);
    } else if (visibility == "true") {
        navToggle.setAttribute("aria-expanded", false);
        primaryNav.setAttribute("data-visible", false);
    }

    console.log(visibility);
});