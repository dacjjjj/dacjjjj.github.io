var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const funactive = document.querySelector('#funword')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


const body = document.querySelector('.mainimagecontainer')


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


funactive.addEventListener("click", function() {
    console.log("pass");
    var maincontentfind = document.querySelector('#replaceme');
    maincontentfind.style.opacity = 0;
    document.body.innerHTML += '<canvas id="easteregg"></canvas>'; // the += means we add this to the inner HTML of body
    document.getElementById('replaceme').innerHTML = '<canvas id="easteregg"></canvas>'; // replaces the inner HTML of #someBox to a canvas 
    runFun() 
    var test = document.querySelector('#replaceme');
    console.log(test)
    setTimeout(function() {
    test.style.opacity = 1;
    }, 0);
})

function runFun() {
    const canvas = document.querySelector('#easteregg')
    canvas.style.width = window.innerWidth + "px";
    setTimeout(function() {
  canvas.style.height = window.innerHeight + "px";
}, 0);
    canvas.style.backgroundImage = "url('images/fish.webp')";
    canvas.style.backgroundPosition = "center center";
    canvas.style.backgroundSize = "cover";

}


function resizeCanvas() {
    const canvas = document.querySelector('#easteregg')
    canvas.style.width = window.innerWidth + "px";
    setTimeout(function() {
  canvas.style.height = window.innerHeight + "px";
}, 0);
}

window.onresize = runFun;


