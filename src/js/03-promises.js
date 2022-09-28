import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  // submitBtn: document.querySelector('.form button'),
};
const formData = {};
let position = 1;

refs.form.addEventListener('click', onFormSubmit);
refs.form.addEventListener('change', onFormFildChange);

function onFormFildChange(e) {
  formData[e.target.name] = e.target.value;
  // console.log(formData);
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(e.target.nodeName);
  if (e.target.nodeName !== 'BUTTON') return;

  const { delay, step, amount } = formData;
  console.log(formData);
  console.log(delay);

  createPromise(position, delay)
    .then((position, delay) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch((position, delay) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  // const intervalId = setInterval(() => {
  //   if (position === amount) clearInterval(intervalId);
  //   position += 1;
  //   console.log(position);
  // }, delay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    return Promise.resolve({ position, delay });
  } else {
    // Reject
    return Promise.reject({ position, delay });
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function notifySucces({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function notifyFailure({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
