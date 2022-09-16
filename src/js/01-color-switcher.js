const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.body,
};
const SWWITCHER_INTERVAL = 1000;
let isActive = false;
let startId = null;

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  if (isActive) return;
  isActive = true;
  console.log('start color switcher');
  startId = setInterval(() => {
    refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, SWWITCHER_INTERVAL);
}

function onStop() {
  isActive = false;
  clearInterval(startId);
  console.log('stop color switcher');
}