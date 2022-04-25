var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
var clickcount = 0

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};


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
        if (deviceType == "desktop") {
            window.open(locationredirlink);
        }
        else {
            window.open("http://maps.apple.com/?q=lol")
        }

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
