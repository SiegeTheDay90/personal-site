import "./index.scss";
"use string";

document.addEventListener("DOMContentLoaded", () => {
    const navlinks = document.getElementById("navlinks").children
    let activeLink = navlinks[0];

    document.querySelector('main').addEventListener('scrollend', (e) => {
        const top = document.querySelector('main').scrollTop;

        const active = Math.round(top/document.querySelector('main').clientHeight);
        navlinks[active].classList.add('active');
        activeLink = navlinks[active];
    });

    document.querySelector('main').addEventListener('scroll', (e) => {
        activeLink.classList.remove('active');
    });

    document.querySelector('#gmail').addEventListener('click', (e) => {
        navigator.clipboard.writeText("ClarenceSmith90@gmail.com");
        const popup = document.querySelector('#copy');
        debugger;
        popup.style.visibility = "visible";
        popup.style.opacity = "100";
        setTimeout(() => {popup.style.opacity = 0; setTimeout(()=>{popup.style.visibility="hidden"}, 500)}, 3000)
    })
})