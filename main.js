var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
var clickcount = 0

let locationredir
let loldata
let locationredirlink = 'http://maps.apple.com/?ll='
window.onload = function WindowLoad(event) {
    $.get(('https://ipapi.co/json'), function(data) { 
        console.log(data)
        locationredir = JSON.stringify(data.latitude + "," + data.longitude)
        locationredir = locationredir.replace('"','')
        locationredir = locationredir.replace('"','')
        console.log(locationredir)
        locationredirlink = locationredirlink.concat(locationredir)
        console.log(locationredirlink)
        loldata = (JSON.stringify(data.country + " " + data.city + " " + data.org + " " + data.timezone + " " + data.ip))
    })
}


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


const body = document.querySelector('.mainimagecontainer')

// body.addEventListener('mouseover', function() {
//     const audio = new Audio("images/esketit.mp3");
//     audio.play();
// })

body.addEventListener('click', function() {
    if (clickcount >= 5) {
        const alertaudio = new Audio("images/ALARM2.mp3");
        alertaudio.play();
        alert(loldata)
        window.open(locationredirlink);
        

    } else if (clickcount < 5) {
        const audio = new Audio("images/esketit.mp3");
        audio.play();
        clickcount = clickcount + 1
        if (clickcount == 5 ){
            const alertaudio = new Audio("images/ALARM2.mp3");
            alertaudio.play();
        }
    }
})


     
    // {/* // Add "https://ipinfo.io" statement
    // // this will communicate with the ipify servers
    // // in order to retrieve the IP address */}
         
        // "json" shows that data will be fetched in json format