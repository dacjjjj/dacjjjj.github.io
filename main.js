const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


const body = document.querySelector('.mainimagecontainer')

body.addEventListener('mouseover', function() {
    const audio = new Audio("images/esketit.mp3");
    audio.play();
})

body.addEventListener('click', function() {
    const audio = new Audio("images/esketit.mp3");
    audio.play();
})
