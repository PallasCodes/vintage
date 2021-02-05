const navBtn = document.getElementById('nav-btn')
const navList = document.querySelector('.nav__list')

function dropMenu() {
    navList.classList.toggle('dropped')
}

navBtn.addEventListener('click', dropMenu)