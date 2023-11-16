document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#gmail').addEventListener('click', (e) => {
        navigator.clipboard.writeText("ClarenceSmith90@gmail.com");
        const popup = document.querySelector('#copy');
        popup.style.visibility = "visible";
        popup.style.opacity = "100";
        setTimeout(() => {popup.style.opacity = 0; setTimeout(()=>{popup.style.visibility="hidden"}, 500)}, 3000)
    })
})