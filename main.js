

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const funactive = document.querySelector('#funword')
const dateActive = document.querySelector('#dateActive')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

var ac = 1
const body = document.querySelector('.mainimagecontainer')


funactive.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    console.log("pass");

    var maincontentfind = document.querySelector('#replaceme');
    maincontentfind.style.opacity = 0;

    // Clear existing children safely
    maincontentfind.innerHTML = '';

    // Add the canvas properly without destroying the rest of the DOM
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'easteregg');
    maincontentfind.appendChild(canvas);

    runFun();

    setTimeout(function () {
        maincontentfind.style.opacity = 1;
    }, 0);
});


dateActive.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    console.log("pass");

    var maincontentfind = document.querySelector('#replaceme');
    maincontentfind.style.opacity = 0;

    // Clear existing children safely
    maincontentfind.innerHTML = '';

    // Add the canvas properly without destroying the rest of the DOM
    const canvas = document.createElement('canvas');
    // canvas.setAttribute('id', 'easteregg');
    maincontentfind.appendChild(canvas);

    runDate();

    setTimeout(function () {
        maincontentfind.style.opacity = 1;
    }, 0);
});

function runDate(){
    document.body.style.backgroundColor = "#2f5274";

    // Resize canvas
    const canvas = document.querySelector('#replaceme');
    canvas.style.width = window.innerWidth + "px";
    setTimeout(function () {
        canvas.style.height = window.innerHeight + "px";
    }, 0);
    loadButtons2();

}
function loadButtons2() {
    // Create overlay image
const overlay = document.createElement('div');
overlay.id = 'overlayFade';
overlay.style.backgroundImage = "url('images/letter.png')"; // Update path
document.body.appendChild(overlay);

// Remove overlay after fade
setTimeout(() => {
  overlay.classList.add('fade-out');
}, 100); // Delay to trigger fade

setTimeout(() => {
  overlay.remove();
}, 3000); // Match animation duration

        console.log("loadButtons2 called");

    // Set background color

    const canvasContainer = document.querySelector('#replaceme');

    // Create container for text content
    const createButton = document.createElement('div');
    createButton.setAttribute("id", "dateMenu");
    createButton.style.opacity = '0';
    canvasContainer.appendChild(createButton);

    // Fade in the content
    setTimeout(() => {
        createButton.style.opacity = '1';
    }, 0);

    // Create text box (no scroll behavior)
    const textContainer = document.createElement('div');
    // textContainer.id = 'static-text-container'; // Give it a unique ID if you want to style it
    // textContainer.className = 'text-text-content'; // Reuse your existing class if it fits

    // Your static content
    const textContent = `
   Date 1:

    Outfit: Cute casual
    Theme: Fun and dinner
    Location: London
    Date: Friday 3rd of October 20:30
    `;


    
    textContainer.innerHTML = textContent;
    

    // Append text container to the button
    createButton.appendChild(textContainer);
}



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
    const canvasContainer = document.querySelector('#replaceme');

    // Create #menuButton div for text injection
    const createButton = document.createElement('div');
    createButton.setAttribute("id", "menuButton");
    createButton.style.opacity = '0';
    canvasContainer.appendChild(createButton);

    // Fade in the button
    setTimeout(() => {
        createButton.style.opacity = '1';
    }, 2500);

    // Create scroll container
    const scrollContainer = document.createElement('div');
    scrollContainer.id = 'scroll-container';

    // Create scroll text wrapper (new ID to match CSS)
    const scrollTextWrapper = document.createElement('div');
    scrollTextWrapper.id = 'scroll-text-wrapper';

    // The actual text to scroll
    const scrollContent = `
    
    
    
    Hi peanut! I made this website to invite you to the 24 dates I have planned for us together!

After every date, this website will update with:

a suggested time,

outfit style to wear,

and the theme of the next date.

pictures from the last date will also be added into the scrapbook section!

every time the website updates you will be sent an email invitation telling you to check the website and RSVP

:x :x :x
Domin`;
    const formattedContent = scrollContent.replace(/\n/g, '<br>');

    // Create two divs with the same text for seamless scroll
    for (let i = 0; i < 2; i++) {
        const textDiv = document.createElement('div');
        textDiv.className = 'scroll-text-content';
        textDiv.textContent = scrollContent;
        scrollTextWrapper.appendChild(textDiv);
    }

    // Nest and append
    scrollContainer.appendChild(scrollTextWrapper);
    createButton.appendChild(scrollContainer);
}




function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

async function moreBubble() {
    await sleep(3900)
    setInterval(createBubble,500);

}

const sleep = ms => new Promise(r => setTimeout(r, ms));