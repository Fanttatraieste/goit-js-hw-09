
const startBtn = document.querySelector('[data-start]');
//console.log(startBtn);
const endBtn = document.querySelector('[data-stop]');
//console.log(endBtn);

let timerId = null;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

startBtn.addEventListener('click', () => {
     timerId = setInterval(() => {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = "" + getRandomHexColor();
        //console.log(body);
    }, 1000);
});


endBtn.addEventListener('click', () => {
    clearInterval(timerId);
    console.log('Stop ! ');
})