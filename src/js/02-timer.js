import flatpickr from "flatpickr";
let currentDate = new Date();
let selectedDate = "";
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      selectedDate = selectedDates[0];
      if (selectedDate <= currentDate)
        window.alert('Select a valid future date');
      else {
        document.querySelector('[data-start]').disabled = false;
      }
    },
  };

const inputStart = document.getElementById('datetime-picker');
//console.log(inputStart);

flatpickr(inputStart, options);


const startBtn = document.querySelector('[data-start]');


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

const addZero = (string) => {
    if (string.length == 1)
        return "0" + string;
    else return string;
};

const cronometru = () => {
    const timerId = setInterval(()=>{
        currentDate = new Date();
        let time = selectedDate - currentDate;
        let {days, hours, minutes, seconds } = convertMs(time);
        const dataDays = document.querySelector('[data-days]');
        const dataHours = document.querySelector('[data-hours]');
        const dataMinutes = document.querySelector('[data-minutes]');
        const dataSeconds = document.querySelector('[data-seconds]');


        dataDays.innerHTML = addZero("" + days);
        dataHours.innerHTML = addZero("" + hours);
        dataMinutes.innerHTML = addZero("" + minutes);
        dataSeconds.innerHTML = addZero("" + seconds);
    }, 1000);
}

startBtn.addEventListener('click', cronometru);