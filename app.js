const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const dvd = document.querySelector('#dvd')
const dvdbutton = document.querySelector('#dvdbutton')

dvdbutton.addEventListener('click', function() {
    dvd.classList.toggle('is-active');
    dvdbutton.classList.toggle('is-active');
})