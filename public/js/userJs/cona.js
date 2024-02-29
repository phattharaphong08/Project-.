const overlay1 = document.querySelector(".toggle1-icon")
const overlay2 = document.querySelector(".toggle2-icon")
const overlay3 = document.querySelector(".toggle3-icon")
const shows1 = document.querySelector(".five ul li:first-child  ul li")
const shows2 = document.querySelector(".five ul li:nth-child(2) ul li")
const shows3 = document.querySelector(".five ul li:last-child ul li")


let isOpen = false;


overlay1.addEventListener("click", () => {
    if (!isOpen) {
        shows1.style.display = "flex"; 
        shows1.style.pointerEvents = "auto";
        shows1.style.opacity = "1";
        isOpen = true;
    } else {
        shows1.style.display = "none"; 
        shows1.style.pointerEvents = "none";
        shows1.style.opacity = "0";
        isOpen = false;
    }
});

overlay2.addEventListener("click", () => {
    if (!isOpen) {
        shows2.style.display = "flex"; 
        shows2.style.pointerEvents = "auto";
        shows2.style.opacity = "1";
        isOpen = true;
    } else {
        shows2.style.display = "none"; 
        shows2.style.pointerEvents = "none";
        shows2.style.opacity = "0";
        isOpen = false;
    }
});

overlay3.addEventListener("click", () => {
    if (!isOpen) {
        shows3.style.display = "flex"; 
        shows3.style.pointerEvents = "auto";
        shows3.style.opacity = "1";
        isOpen = true;
    } else {
        shows3.style.display = "none"; 
        shows3.style.pointerEvents = "none";
        shows3.style.opacity = "0";
        isOpen = false;
    }
});