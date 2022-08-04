import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  start: document.querySelector('button[data-start]'),
  picker: document.querySelector('#datetime-picker'),
};

refs.start.addEventListener('click', onStartBtn);
let selectedTime = null;
const currentTime = Date.now();
let delta = null;

refs.start.disabled = true;
// let delta = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
      selectedDates[0] = new Date();
    } else {
      refs.start.disabled = false;
      selectedTime = selectedDates[0];
    }
  },
};

flatpickr(refs.picker, options);

function onStartBtn() {
  console.log('start');

  delta = selectedTime - currentTime;
  setInterval(timer, 1000);
}

function timer() {
  const days = Math.floor(delta / 1000 / 60 / 60 / 24);
  console.log('days ', days);
  const hours = Math.floor((delta / 1000 / 60 / 60) % 24);
  console.log('hours ', hours);
  const minutes = Math.floor((delta / 1000 / 60) % 60);
  console.log('minutes ', minutes);
  const seconds = Math.floor((delta / 1000) % 60);
  console.log('seconds ', seconds);

  const daysEl = document.querySelector('[data-days]');
  const hoursEl = document.querySelector('[data-hours]');
  const minutesEl = document.querySelector('[data-minutes]');
  const secondsEl = document.querySelector('[data-seconds]');

  daysEl.textContent = days < 10 ? `0${days}` : days;
  hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
  minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
}
// При нажатии на кнопку «Start» начинается отсчет времени до выбранной даты с момента нажатия.
