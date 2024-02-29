

//activity
const wrapper = document.querySelector('.wrappers')
// const selectBtn = document.querySelector('.select-bth')
// // activity
// selectBtn.addEventListener('click', () => {
//     wrapper.classList.toggle("active")
// })

// Select all elements with class "select-bth"
const selectBtns = document.querySelectorAll('.select-bth');

// Loop through each element and add a click event listener
selectBtns.forEach((selectBtn) => {
    selectBtn.addEventListener('click', () => {
        // Find the parent element with class "wrappers" and toggle its class
        const wrapper = selectBtn.closest('.wrappers');
        if (wrapper) {
            wrapper.classList.toggle("active");
        }
    });
});