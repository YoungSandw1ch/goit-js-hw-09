import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // console.log(Date.now());
    // console.log(selectedDates[0].getTime());
    destinationTime = selectedDates[0].getTime();
  },
};

flatpickr('#datetime-picker', options);

refs.body.style.backgroundColor = '#FFFEFE';
refs.input.style.color = '#88f7f2';
refs.input.style.fontFamily = 'Digital';
refs.input.style.textAlign = 'center';
refs.input.style.fontSize = '20px';

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(updateTime, TIMER_INTERVAL);
}

function onStop() {}

function updateTime() {
  timeDifference = destinationTime - Date.now();
  secondsToTimeOnScreen(timeDifference);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function secondsToTimeOnScreen(sec) {
  sec = Math.floor(sec / 1000);
  refs.days.textContent = pad(Math.floor(sec / (3600 * 24)) % 365);
  refs.hours.textContent = pad(Math.floor(sec / 3600) % 24);
  refs.minutes.textContent = pad(Math.floor(sec / 60) % 60);
  refs.seconds.textContent = pad(sec % 60);
}
