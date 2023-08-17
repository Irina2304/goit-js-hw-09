
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");
const inDelay = document.querySelector('input[name="delay"]');
const inStep = document.querySelector('input[name="step"]');
const inAmount = document.querySelector('input[name="amount"]');
 

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  
  let step = Number(inStep.value);
  let delay = Number(inDelay.value) - step;
  let amount = Number(inAmount.value);

  for (let i = 0; i < amount; i += 1){
    
    let position = i + 1;
    delay = delay + step;
    
    createPromise(position, delay)
      
      .then((value) => {
        Notify.success(value)
      })
      .catch((error) => {
        Notify.failure(error)
      })
  }
  
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
