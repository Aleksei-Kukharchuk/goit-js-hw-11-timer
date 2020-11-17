import './css/common.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime =  this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      
      this.updateClockface(time, this.selector);
    }, 1000);
  }

  getTimeComponents(time) {
    const day = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { day, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockface({ day, hours, mins, secs }, selector) {

  const timerDays = document.querySelector(`${selector} [data-value="days"]`);
  const timerHours = document.querySelector(`${selector} [data-value="hours"]`);
  const timerMins = document.querySelector(`${selector} [data-value="mins"]`);
  const timerSecs = document.querySelector(`${selector} [data-value="secs"]`);

  timerDays.textContent = `${day}`;
  timerHours.textContent = `${hours}`;
  timerMins.textContent = `${mins}`;
  timerSecs.textContent = `${secs}`;
}
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 14, 2021'),
});

timer.start();