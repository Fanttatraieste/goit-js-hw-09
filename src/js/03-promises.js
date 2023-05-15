import Notiflix from "notiflix";




const delayInput = document.querySelector('[data-delay]');
const stepInput = document.querySelector('[data-step]');
const amountInput = document.querySelector('[data-amount]');

const submitBtn = document.querySelector('[data-submit]');

let delay, amount, step;

delayInput.addEventListener('input', () => {
  delay = delayInput.value;
  //console.log(delay);
  delay = parseInt(delay);
});

amountInput.addEventListener('input', () => {
  amount = amountInput.value;
 // console.log(amount);
 amount = parseInt(amount);
});


stepInput.addEventListener('input', () => {
  step = stepInput.value;
  //console.log(step);
  step = parseInt(step);
});


submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  setTimeout(() => {
    let totalDelay = delay;
    for (let i = 1; i <= amount; i ++) {
      //creeam o promisiune
      
      const shouldResolve = Math.random() > 0.5;

      let p = new Promise((resolve, reject) => {
        if (shouldResolve)
          setTimeout(resolve, totalDelay);
        else 
          setTimeout(reject, totalDelay);
      });

      p.then((message)=>{
        Notiflix.Notify.success(
          `Woa, everything good in ${message}`,
          {
            timeout:totalDelay,
          }
        )
      }).catch((message)=>{
        Notiflix.Notify.failure(
          `Eh, everything wrond in ${message}`,
          {
            timeout:totalDelay,
          }
        )
      });
      totalDelay += step;
    }
}, delay);
});

