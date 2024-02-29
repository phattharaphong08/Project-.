const overlass = document.querySelector(".overlass")
const showss = document.querySelector(".show-modals")
// const submibd = document.querySelector(".submibd")
const modalss = document.querySelector(".modalss")

const fileInput1 = document.querySelector("#file-upload1");
const selectedFile1 = document.querySelector(".selected-file1");

   
showss.addEventListener("click", () => {
    overlass.style.opacity = "1"; // เปลี่ยนค่า opacity เพื่อแสดง overlay
    overlass.style.pointerEvents = "auto"; // เปลี่ยนค่า pointer-events เพื่อให้สามารถคลิกได้
    modalss.style.display = "block";
});

overlass.addEventListener("click", () => {
    overlass.style.opacity = "0"; // เปลี่ยนค่า opacity เพื่อซ่อน overlay อีกครั้ง
    overlass.style.pointerEvents = "none"; // เปลี่ยนค่า pointer-events เพื่อไม่ให้คลิกเมื่อซ่อน overlay
    modalss.style.display = "none";
});



fileInput1.addEventListener("change", function () {
    if (fileInput1.files.length > 0) {
        selectedFile1.textContent = fileInput1.files[0].name;
    } else {
        selectedFile1.textContent = "ไม่ได้เลือกไฟล์";
    }
});


// const fileInputs = document.getElementById("file-uploads");
// const previewImages = document.getElementById("preview-images");



// fileInputs.addEventListener("change", function () {
//     const selectedFile = fileInputs.files[0];
//     if (selectedFile) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             previewImages.src = e.target.result;
//             previewImages.style.display = "block";
            
//         };
//         reader.readAsDataURL(selectedFile);
//     } else {
//         previewImages.style.display = "none";
        
//     }
// });