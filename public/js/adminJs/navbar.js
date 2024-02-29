//navbar
const body = document.querySelector('body')
const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.toggle')


//navbar
toggle.addEventListener('click', () => {
    sidebar.classList.toggle("close")
})