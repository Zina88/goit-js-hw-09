import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import Notiflix from 'notiflix';

const refs = {
  start: document.querySelector('button[data-start]'),
  picker: document.querySelector('#datetime-picker'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

refs.start.addEventListener('click', startTimer);
refs.start.disabled = true;
let isActive = false;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      selectedDates[0] = new Date();
      return;
    } else {
      selectedTime = selectedDates[0];
      refs.start.disabled = false;
    }
  },
};

flatpickr(refs.picker, options);

function startTimer() {
  if (isActive) {
    return;
  }

  isActive = true;
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const delta = selectedTime - currentTime;
    refs.start.disabled = true;
    console.log(delta);

    if (delta <= 0) {
      // stopTimer();
      clearInterval(timerId);
      timerId = null;
      isActive = false;
      refs.start.disabled = true;
      Notiflix.Notify.success('Time is over');
      return;
    }

    const componentsTimer = convertMs(delta);
    getTimeComponents(componentsTimer);
  }, 1000);
}

// function stopTimer() {
// }

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsEl.textContent = seconds;
}
