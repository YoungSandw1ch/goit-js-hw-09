// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   form: document.querySelector('.form'),
//   // submitBtn: document.querySelector('.form button'),
// };
// const formData = {};
// let position = 1;

// refs.form.addEventListener('click', onFormSubmit);
// refs.form.addEventListener('change', onFormFildChange);

// function onFormFildChange(e) {
//   formData[e.target.name] = e.target.value;
//   // console.log(formData);
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   console.log(e.target.nodeName);
//   if (e.target.nodeName !== 'BUTTON') return;

//   const { delay, step, amount } = formData;
//   console.log(formData);
//   console.log(delay);

//   createPromise(position, delay)
//     .then((position, delay) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch((position, delay) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     });

//   // const intervalId = setInterval(() => {
//   //   if (position === amount) clearInterval(intervalId);
//   //   position += 1;
//   //   console.log(position);
//   // }, delay);
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//     return Promise.resolve({ position, delay });
//   } else {
//     // Reject
//     return Promise.reject({ position, delay });
//   }
// }

// // createPromise(2, 1500)
// //   .then(({ position, delay }) => {
// //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// //   })
// //   .catch(({ position, delay }) => {
// //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// //   });

// function notifySucces({ position, delay }) {
//   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// }

// function notifyFailure({ position, delay }) {
//   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// }

// const promise = new Promise((resolve, reject) => {});

// console.log(promise);

// function makePromise(x, y) {
//   return new Promise((resolve, reject) => {
//     const isDone = Math.random() > 0.5;

//     if (isDone) {
//       resolve(x);
//     }

//     reject(y);
//   });
// }

// console.log(makePromise(100, 50));

// const mdnPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isDone = Math.random() > 0.5;

//     if (isDone) {
//       resolve(
//         'то что ты передашь то и получить в результате промиса или инфу которую ты запрашивал'
//       );
//     }

//     reject({ 'что то пошло не так, извини братишка': 1, 10: 10 });
//   }, 2000);
// });

// console.log(mdnPromise);
// console.log(
//   mdnPromise.then(value => {
//     console.log(value);
//     return value.split('');
//   })
// );

function createPromiseFnk(x, y) {
  return new Promise((resolve, reject) => {
    const isDone = Math.random() > 0.5;

    if (isDone) {
      resolve(x);
    }

    reject(y);
  });
}

const promise1 = createPromiseFnk('all system work', 'tobi p... tikai z mista');

// console.log(promise1);
promise1
  .then(data => {
    console.log(data);
    return data;
  })
  .then(data => {
    console.log(data + 'NOrmalno then 2');
    return 'otrabotal';
  })
  .catch(error => console.log(error))
  .finally(() => console.log('вот и все отработал'));
