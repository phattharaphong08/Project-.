

const sliderElement = document.querySelector(".slidd");
const displayElement = document.querySelector(".disd");
const statussPercentageElement = document.getElementById("statussPercentage");

function updateSlider() {
    const statuss = parseInt(sliderElement.value); // แปลงค่าเป็นจำนวนเต็ม
    const statussPercentage = statuss; // ค่า statuss เป็นเปอร์เซ็นต์แล้ว
    
    // อัปเดตแสดงค่าใน HTML
    displayElement.textContent = `${statussPercentage}%`;
    statussPercentageElement.textContent = `${statussPercentage}%`;
}



