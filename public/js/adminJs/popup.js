
const overlay = document.querySelector(".overlay")
const shows = document.querySelector(".show-modal")
const submibd = document.querySelector(".submibd")
const modals = document.querySelector(".modals")
   
shows.addEventListener("click", () => {
    overlay.style.opacity = "1"; // เปลี่ยนค่า opacity เพื่อแสดง overlay
    overlay.style.pointerEvents = "auto"; // เปลี่ยนค่า pointer-events เพื่อให้สามารถคลิกได้
    modals.style.display = "block";
});

overlay.addEventListener("click", () => {
    overlay.style.opacity = "0"; // เปลี่ยนค่า opacity เพื่อซ่อน overlay อีกครั้ง
    overlay.style.pointerEvents = "none"; // เปลี่ยนค่า pointer-events เพื่อไม่ให้คลิกเมื่อซ่อน overlay
    modals.style.display = "none";
});











