import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}

function onFormSubmit(e) {
  e.preventDefault();

  let delay = +e.target.delay.value;
  const step = +e.target.step.value;
  const amount = +e.target.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    if (i !== 1) {
      delay += step;
    }

    createPromise(i, delay).then(notifySucces).catch(notifyError);
  }
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

//==============with second event listener========================
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const form = document.querySelector('.form');
// let formData = {};

// form.addEventListener('change', onFormInputChange);
// form.addEventListener('submit', onFormSubmit);

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;

//       if (shouldResolve) {
//         resolve({ position, delay });
//       }

//       reject({ position, delay });
//     }, delay);
//   });
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   let { delay, step, amount } = formData;

//   for (let i = 1; i <= amount; i += 1) {
//     if (i !== 1) {
//       delay += step;
//     }

//     createPromise(i, delay).then(notifySucces).catch(notifyError);
//   }
// }

// function onFormInputChange(e) {
//   formData[e.target.name] = Number(e.target.value);
// }

// function notifySucces({ position, delay }) {
//   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
//     timeout: 5000,
//   });
// }

// function notifyError({ position, delay }) {
//   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
//     timeout: 5000,
//   });
// }
