import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const date = new Date;
const input = document.querySelector("#datetime-picker");
const btn = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let newDate = selectedDates[0].getTime();
        console.log(selectedDates[0]);
        if ((date.getTime() - newDate) > 0) {
            btn.setAttribute('disabled', "");
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            btn.removeAttribute('disabled');
        }
    },
    
     


};

let fp = flatpickr(input, options);

    

