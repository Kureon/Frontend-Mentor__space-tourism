const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
    } else if (visibility == "true") {
        nav.setAttribute("data-visible", false);
    }

    console.log(visibility);
});