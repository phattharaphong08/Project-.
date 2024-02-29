const fileInputs = document.getElementById("file-uploads");
const previewImages = document.getElementById("preview-images");



fileInputs.addEventListener("change", function () {
    const selectedFile = fileInputs.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImages.src = e.target.result;
            previewImages.style.display = "block";
            
        };
        reader.readAsDataURL(selectedFile);
    } else {
        previewImages.style.display = "none";
        
    }
});