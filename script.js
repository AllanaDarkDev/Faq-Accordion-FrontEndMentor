let section1 = document.getElementById("s1")
let section2 = document.getElementById("s2")
let section3 = document.getElementById("s3")
let section4 = document.getElementById("s4")

let button1 = document.getElementById("b1")
let button2 = document.getElementById("b2")
let button3 = document.getElementById("b3")
let button4 = document.getElementById("b4")

let div1 = document.getElementById("d1")
let div2 = document.getElementById("d2")
let div3 = document.getElementById("d3")
let div4 = document.getElementById("d4")

section1.addEventListener("mousedown", () => {
    button1.classList.toggle("close");
    button1.classList.toggle("open");

    div1.classList.toggle("show");
    div1.classList.toggle("hide");
});

section2.addEventListener("mousedown", () => {
    button2.classList.toggle("close");
    button2.classList.toggle("open");

    div2.classList.toggle("show");
    div2.classList.toggle("hide");
});

section3.addEventListener("mousedown", () => {
    button3.classList.toggle("close");
    button3.classList.toggle("open");

    div3.classList.toggle("show");
    div3.classList.toggle("hide");
});

section4.addEventListener("mousedown", () => {
    button4.classList.toggle("close");
    button4.classList.toggle("open");

    div4.classList.toggle("show");
    div4.classList.toggle("hide");
});