const sliderElement = document.querySelector(".slidd");
const display = document.querySelector(".disd");

function updateSlider() {
    valPercent = (sliderElement.value);

    sliderElement.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`
    display.textContent = `${valPercent}%`;
}

// 