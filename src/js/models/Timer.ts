export default class Timer {
  onCount: (time: string) => void;
  onComplete: () => void;
  time: string;
  duration: number;
  interval: number;
  currentCount: number;
  constructor({
    onCount,
    duration,
    onComplete,
  }: {
    onComplete: () => void;
    duration: number;
    onCount: (time: string) => void;
  }) {
    this.onCount = onCount;
    this.duration = duration;
    this.currentCount = this.duration;
    this.time = "";
    this.interval = 0;
    this.onComplete = onComplete;
  }

  start() {
    this.interval = setInterval(() => {
      this.currentCount -= 1;
      this.time = this.secondsToHms(this.currentCount);
      this.onCount(this.time);
      if (this.currentCount === 0) this.stop();
    }, 1000);
  }

  stop() {
    this.onComplete();
    clearInterval(this.interval);
  }

  secondsToHms(seconds: number) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var seconds = Math.floor((seconds % 3600) % 60);

    return hours
      ? `${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}:`
      : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
}
