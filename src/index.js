import "./index.scss";
"use string";

document.addEventListener("DOMContentLoaded", () => {
    const navlinks = document.getElementById("navlinks").children
    let activeLink = navlinks[0];


    for(let i = 0; i < navlinks.length; i++){
        const link = navlinks[i];

        link.addEventListener('click', (e) => {
            activeLink.classList.remove('active');
            link.classList.add('active');
            activeLink = link;
        })
    }
})