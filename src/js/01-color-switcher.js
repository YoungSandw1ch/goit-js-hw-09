const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.body,
};
//===============animation===============
const anim = {
  gif1: document.querySelector('.gif-1'),
  gif2: document.querySelector('.gif-2'),
  gif3: document.querySelector('.gif-3'),
  gif4: document.querySelector('.gif-4'),
};
console.log(
  '%c ❗️ На сторінці присутня музика, будь ласка переконайтесь, що гучність нікому не завадить',
  'color: orange; font-size: 12px;'
);
//=======================================
const SWWITCHER_INTERVAL = 1000;
let isActive = false;
let startId = null;

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

function onStart() {
  if (isActive) return;
  isActive = true;

  startId = setInterval(changeBodyBackground, SWWITCHER_INTERVAL);
  catGifShow();
  playBackgroundSong();
}

function onStop() {
  isActive = false;
  clearInterval(startId);
  catGifHide();
  stopBackgroundSong();
}

function changeBodyBackground() {
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//======================cats paty function=======================
function catGifShow() {
  anim.gif1.classList.add('show-odd');
  anim.gif3.classList.add('show-odd');
  anim.gif2.classList.add('show-even');
  anim.gif4.classList.add('show-even');
}

function catGifHide() {
  anim.gif1.classList.remove('show-odd');
  anim.gif3.classList.remove('show-odd');
  anim.gif2.classList.remove('show-even');
  anim.gif4.classList.remove('show-even');
}

function playBackgroundSong() {
  document.querySelector('audio').play();
}

function stopBackgroundSong() {
  const audio = document.querySelector('audio');
  audio.currentTime = 0;
  audio.pause();
}
