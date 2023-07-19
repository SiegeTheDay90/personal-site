import "./index.scss";
"use string";

document.addEventListener("DOMContentLoaded", () => {
    const navlinks = document.getElementById("navlinks").children
    let activeLink = navlinks[0];

    document.querySelector('main').addEventListener('scrollend', (e) => {
        const top = document.querySelector('main').scrollTop;

        const active = top/document.querySelector('main').clientHeight;

        navlinks[active].classList.add('active');
        activeLink = navlinks[active];
    });

    document.querySelector('main').addEventListener('scroll', (e) => {
        activeLink.classList.remove('active');
    });
})