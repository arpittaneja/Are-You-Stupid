const body = document.querySelector("body");
const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");
let originalTop = noButton.offsetTop;
let originalLeft = noButton.offsetLeft;
console.log("Original: ", originalTop, originalLeft);
no.addEventListener("click", (e) => {
    console.log("screen", window.innerHeight, window.innerWidth)
    let newTop = Math.floor(Math.random() * (window.innerHeight - 100));
    let newLeft = Math.floor(Math.random() * (window.innerWidth - 200));
    // console.log(newHeight + " " + newWidth)
    // console.log(window.innerHeight + " " + " " + window.innerWidth);
    // console.log(e.target);
    body.style.position = "relative";
    e.target.style.position = "absolute";

    e.target.style.top = `${newTop}px`;
    e.target.style.left = `${newLeft}px`;

    // e.target.style.top = "-20px";
    // e.target.style.left = `0px`;

    if (e.target.offsetTop < 0) {
        e.target.style.top = -e.target.style.top;
    }
    console.log(newTop, newLeft);

})
