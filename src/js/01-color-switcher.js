const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

let intervalId = null;
let isActive = false;

refs.stop.disabled = true;

function onStartClick() {
  if (isActive) {
    return;
  }
  // console.log('start');
  isActive = true;
  refs.start.disabled = true;
  refs.stop.disabled = false;

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  if (!isActive) {
    return;
  }
  // console.log('stop');
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(intervalId);
  isActive = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
