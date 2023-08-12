const page = document.querySelector("body")
const start = document.querySelector("button[data-start]")
const stop = document.querySelector("button[data-stop]")

let timerId;

start.addEventListener("click", onStart);
stop.addEventListener("click", onStop);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStart() {
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        page.style.backgroundColor = color
    }, 1000);
    start.setAttribute('disabled', "");
}

function onStop() {
    clearInterval(timerId);
    start.removeAttribute('disabled');
}

