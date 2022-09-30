import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
let formData = {};

form.addEventListener('change', onFormInputChange);
form.addEventListener('click', onFormSubmit);

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

function onFormInputChange(e) {
  formData[e.target.name] = e.target.value;
}

function onFormSubmit(e) {
  e.preventDefault();
}
