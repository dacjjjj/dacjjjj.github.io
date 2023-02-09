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

var ac = 1
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

console.log(deviceType())

funactive.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
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
    document.body.style.backgroundColor = "#2f5274";
    const canvas = document.querySelector('#easteregg')
    canvas.style.width = window.innerWidth + "px";
    setTimeout(function() {
  canvas.style.height = window.innerHeight + "px";
}, 0);
    // canvas.style.backgroundImage = "url('images/fish.webp')";
    // canvas.style.backgroundPosition = "center center";
    // canvas.style.backgroundSize = "contain";
    onLoadBubbles()
}

function createBubble() {
    const canvas = document.querySelector('#replaceme')
    const createElement = document.createElement('div')
    createElement.setAttribute("id", "bubble");
    var size = Math.random() * 60;
    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.opacity = '1';
    createElement.style.left = Math.random() * innerWidth + "px";


    canvas.appendChild(createElement)
    
    setTimeout(() => {
        createElement.style.opacity = '0';
        createElement.remove();
    },4000
    )
}

function resizeCanvas() {
    const canvas = document.querySelector('#easteregg')
    canvas.style.width = window.innerWidth + "px";
    setTimeout(function() {
  canvas.style.height = window.innerHeight + "px";
}, 0);
}

// window.onresize = resizeCanvas;


async function onLoadBubbles() {
    let fork = setInterval(createBubble,10);
    await sleep(1000)
    clearInterval(fork)
    
    loadButtons()
}

function loadButtons() {
    const canvas = document.querySelector('#replaceme')
    const createButton = document.createElement('div')
    createButton.setAttribute("id", "menuButton");
    canvas.appendChild(createButton)
    createButton.style.opacity = '0';
    setTimeout(() => {
        createButton.style.opacity = '1';
    },2500
    )
    const createLand = document.createElement('div')
    createLand.setAttribute("width", "100vw")
    createLand.setAttribute("height", "100vh")
    createLand.setAttribute("background-image", "url(image/menuland.png")
    canvas.appendChild(createLand)
    const underconstruction = document.querySelector('#menuButton')
    const createText = document.createElement('h1')
    var letext = document.createTextNode("Still under construction...");
    createText.appendChild(letext);
    createText.style.color = "#c7c7c7"
    if ((deviceType()) == "mobile"){
        return
    }
    underconstruction.appendChild(createText);
    moreBubble()
}

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

async function moreBubble() {
    await sleep(3900)
    setInterval(createBubble,500);

}

const sleep = ms => new Promise(r => setTimeout(r, ms));