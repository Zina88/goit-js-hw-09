import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const refs = {
  start: document.querySelector('button[data-start]'),
  picker: document.querySelector('#datetime-picker'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

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
      selectedTime = selectedDates[0];
      refs.start.disabled = false;
    }
  },
};

flatpickr(refs.picker, options);

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

class Timer {
  constructor() {
    this.timerID = null;
    this.isActive = false;
    refs.start.disabled = true;
  }

  startTimer() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.timeriID = setInterval(() => {
      const currentTime = Date.now();
      const delta = selectedTime - currentTime;
      const componentsTimer = convertMs(delta);
      this.getTimeComponents(componentsTimer);
      // console.log(convertMs(delta));

      if (delta < 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  getTimeComponents({ days, hours, minutes, seconds }) {
    refs.daysEl.textContent = days;
    refs.hoursEl.textContent = hours;
    refs.minutesEl.textContent = minutes;
    refs.secondsEl.textContent = seconds;
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.isActive = false;
  }
}

const timer = new Timer();
refs.start.addEventListener('click', () => timer.startTimer());
