class StopWatch extends HTMLElement {
  constructor() {
    super();
    this.timer = 0;
    this.interval = 0;
  }

  connectedCallback() {
    this.classList.add("stopwatch");
  }

  start() {
    this.innerHTML = this.formatTimer();
    this.interval = setInterval(() => {
      this.timer++;
      this.innerHTML = this.formatTimer();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {}

  formatTimer() {
    let time = {
      minute: Math.trunc(this.timer / 60),
      second: this.timer - Math.trunc(this.timer / 60) * 60,
    };

    time.minute = time.minute < 10 ? `0${time.minute}` : time.minute;
    time.second = time.second < 10 ? `0${time.second}` : time.second;

    return `${time.minute}:${time.second}`;
  }

  reset() {
    this.timer = 0;
  }
}

customElements.define("game-stopwatch", StopWatch);
