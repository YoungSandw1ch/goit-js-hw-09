import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
let formData = {};
let intervaltId = null;
let position = 0;

form.addEventListener('change', onFormInputChange);
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

function onFormInputChange(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
}

function onFormSubmit(e) {
  e.preventDefault();

  let { delay, step, amount } = formData;
  // position += 1;

  createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

// createPromise(2, 1500)
// .then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(({ position, delay }) => {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// });

// intervaltId = setInterval(() => {
//   if (position === amount) clearInterval(intervaltId);

//   position += 1;
//   delay += step;

//   createPromise(position, delay)
//     .then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(({ position, delay }) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     });
// }, step);
