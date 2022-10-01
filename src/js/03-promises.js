import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
let formData = {};
let intervaltId = null;
let position = 1;

form.addEventListener('change', onFormInputChange);
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    }

    reject({ position, delay });
  });
}

function onFormSubmit(e) {
  e.preventDefault();
  let { delay, step, amount } = formData;

  setTimeout(() => {
    createPromise(position, delay).then(notifySucces).catch(notifyError);

    intervaltId = setInterval(() => {
      if (position === amount) {
        clearInterval(intervaltId);
        intervaltId = null;
        position = 1;
        return;
      }

      position += 1;
      delay += step;

      createPromise(position, delay).then(notifySucces).catch(notifyError);
    }, step);
  }, delay);
}

function onFormInputChange(e) {
  formData[e.target.name] = Number(e.target.value);
}

function notifySucces({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
    timeout: 5000,
  });
}

function notifyError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
    timeout: 5000,
  });
}
