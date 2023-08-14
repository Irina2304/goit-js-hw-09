import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector("#datetime-picker");
const btn = document.querySelector("[data-start]");
let timerDays = document.querySelector("[data-days]");
let timerHours = document.querySelector("[data-hours]");
let timerMinutes = document.querySelector("[data-minutes]");
let timerseconds = document.querySelector("[data-seconds]");


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let newDate = selectedDates[0];
        if ((newDate.getTime() - Date.now()) > 0) {
            btn.removeAttribute('disabled');
            btn.addEventListener("click", onStart);

            function onStart() {
                let timer;
                timer = setInterval(() => {
                    let timerTime = convertMs(newDate.getTime() - Date.now())
                    if ((newDate.getTime() - Date.now()) < 0) {
                        clearInterval(timer);
                        return;
                    }
                    timerDays.textContent = addLeadingZero(timerTime.days);
                    timerHours.textContent = addLeadingZero(timerTime.hours);
                    timerMinutes.textContent = addLeadingZero(timerTime.minutes);
                    timerseconds.textContent = addLeadingZero(timerTime.seconds);
                }, 1000);
            }

        } else {
            btn.setAttribute('disabled', "");
            Notiflix.Notify.failure('Please choose a date in the future');
        }
    },
};

let fp = flatpickr(input, options);
// console.log(options.onClose());
function addLeadingZero(value) {
    return (`${value.toString().padStart(2, '0')}`);
}

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


