import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  body: document.body,
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
const TIMER_INTERVAL = 1000;
let destinationTime = 0;
let timeDifference = 0;
let timerId = null;
let isActive = false;
let isPastTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    isPastTime = selectedDates[0].getTime() - Date.now() <= 0;
    if (isPastTime) {
      failureNotify();
      return;
    }

    destinationTime = selectedDates[0].getTime();
  },
};

flatpickr('#datetime-picker', options);

//==========some styles for timer=================
refs.body.style.backgroundColor = '#FFFEFE';
refs.input.style.color = '#88f7f2';
refs.input.style.fontFamily = 'Digital';
refs.input.style.textAlign = 'center';
refs.input.style.fontSize = '20px';
//================================================
refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

function onStart() {
  if (!destinationTime || isPastTime) {
    setNotify();
    return;
  }

  if (isActive) {
    infoNotify();
    return;
  }

  isActive = true;
  timerId = setInterval(updateTime, TIMER_INTERVAL);
}

function onStop() {
  clearInterval(timerId);
  variablesReset();
  timerInterfaceReset();
}
//============callback for interval==============
function updateTime() {
  timeDifference = destinationTime - Date.now();
  if (timeDifference <= 0) {
    onStop();
    window.open('https://www.youtube.com/watch?v=-ZGlaAxB7nI');
    bangNotify();
    console.log('Time is over, rest in peace');
  }

  secondsToTimeOnScreen(timeDifference);
}

//============update interface====================
function secondsToTimeOnScreen(sec) {
  sec = Math.floor(sec / 1000);
  refs.days.textContent = addLeadingZero(Math.floor(sec / (3600 * 24)) % 365);
  refs.hours.textContent = addLeadingZero(Math.floor(sec / 3600) % 24);
  refs.minutes.textContent = addLeadingZero(Math.floor(sec / 60) % 60);
  refs.seconds.textContent = addLeadingZero(sec % 60);
}

function timerInterfaceReset() {
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
}

//============support func========================
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function variablesReset() {
  destinationTime = 0;
  timeDifference = 0;
  timerId = null;
  isPastTime = 0;
  isActive = 0;
}

//============notify==============================
function failureNotify() {
  Notify.failure('Please choose a date in the future', {
    position: 'center-top',
  });
}

function infoNotify() {
  Notify.info('Timer already running', {
    position: 'center-top',
  });
}

function bangNotify() {
  Notify.success('Time is over, rest in peace', {
    position: 'center-top',
  });
}

function setNotify() {
  Notify.warning('Please select a date', {
    position: 'center-top',
  });
}
