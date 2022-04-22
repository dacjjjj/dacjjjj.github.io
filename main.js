var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
var clickcount = 0
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
    clickcount = clickcount + 1
    if (clickcount > 5) {
        $.get("https://ipinfo.io", function(response) {
            alert(response.ip);
        }, "json")
        const audio = new Audio("images/ALARM2.mp3");
    audio.play();
    }
})


     
    // {/* // Add "https://ipinfo.io" statement
    // // this will communicate with the ipify servers
    // // in order to retrieve the IP address */}
         
        // "json" shows that data will be fetched in json format