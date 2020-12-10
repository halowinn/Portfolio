const menuIcon = document.querySelector('.slide-out-menu')
const navBar = document.querySelector('.navbar')

menuIcon.addEventListener('click', (e) => {
    navBar.classList.toggle('change')
})