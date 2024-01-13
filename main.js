
// Toogle for maoblie navigation 


const navbar = document.querySelector(".navigation")
const toggleBtn = document.querySelector(".hamburger")
const toggleOpen = document.querySelector("#open")
const toggleClose = document.querySelector("#close")


toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('show')

    if (navbar.classList.contains('show')) {
        toggleOpen.style.display = 'none'
        toggleClose.style.display = 'block'
    }
    else {
        toggleOpen.style.display = 'block'
        toggleClose.style.display = 'none'
    }
})


