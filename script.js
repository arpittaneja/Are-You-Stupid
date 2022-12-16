const body = document.querySelector("body");
const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");

no.addEventListener("click", (e) => {
    let newTop = Math.floor(Math.random() * (window.innerHeight - 100));
    let newLeft = Math.floor(Math.random() * (window.innerWidth - 200));
    body.style.position = "relative";
    e.target.style.position = "absolute";
    e.target.style.top = `${newTop}px`;
    e.target.style.left = `${newLeft}px`;
})
