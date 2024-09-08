const scrollableContainer = document.getElementById("scrollableContainer");
const section3 = document.getElementById("section3");
const scrollbarwidth = scrollableContainer.offsetWidth-scrollableContainer.clientWidth;
let innerw = document.body.clientWidth;
let width = section3.clientWidth;
let lef = innerw - width - scrollbarwidth;
console.log(scrollbarwidth)
console.log(width);
console.log(section3.offsetHeight)

window.addEventListener("resize", () => {
    innerw = document.body.clientWidth;
    width = section3.clientWidth;
    lef = innerw - width - scrollbarwidth;
    console.log(innerw);
    console.log(width);
})

scrollableContainer.addEventListener("scroll", () => {
    console.log(lef);
    if (scrollableContainer.scrollTop > 400) {
        section3.style.position = "fixed";
        section3.style.bottom = "0";
        section3.style.left = `${lef}px`;
        section3.style.zIndex = "-50";
    }
    else if (scrollableContainer.scrollTop < 400) {
        document.getElementById("section3").style.position = "static";
    }
})

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    document.getElementById("section1").style.left = "0";
})

document.getElementById("content").addEventListener("click", () => {
    document.getElementById("section1").style.left = "-500px";
})