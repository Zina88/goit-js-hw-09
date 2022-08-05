import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const refs = {
  start: document.querySelector('button[data-start]'),
  picker: document.querySelector('#datetime-picker'),
};

refs.start.addEventListener('click', onStartBtn);

let selectedTime = null;
refs.start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      window.alert('Please choose a date in the future');
      selectedDates[0] = new Date();
    } else {
      refs.start.disabled = false;
      selectedTime = selectedDates[0];
      setInterval(() => {
        const delta = selectedTime - Date.now();
        timer(delta);
      }, 1000);
    }
  },
};

flatpickr(refs.picker, options);

function onStartBtn() {
  console.log('start');
}

function timer(ms) {
  const days = Math.floor(ms / 1000 / 60 / 60 / 24);
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  const daysEl = document.querySelector('[data-days]');
  const hoursEl = document.querySelector('[data-hours]');
  const minutesEl = document.querySelector('[data-minutes]');
  const secondsEl = document.querySelector('[data-seconds]');

  daysEl.textContent = days < 10 ? `0${days}` : days;
  hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
  minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
}
