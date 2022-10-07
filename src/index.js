// const primaryNav = document.querySelector(".primary-navigation");
// const navToggle = document.querySelector(".mobile-nav-toggle");

// navToggle.addEventListener('click', () => {
    
//     const visibility = primaryNav.getAttribute("data-visible");
//     if (visibility === "false") {
//         primaryNav.setAttribute("data-visible", true);
//     } else if (visibility == "true") {
//         primaryNav.setAttribute("data-visible", false);
//     }

//     console.log(visibility);
// });

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }
})