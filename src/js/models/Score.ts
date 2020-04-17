export default class Score {
  score: number;
  by: number;
  onIncrement: (score: number) => void;
  constructor({
    by,
    onIncrement,
  }: {
    by: number;
    onIncrement: (score: number) => void;
  }) {
    this.score = 0;
    this.by = by;
    this.onIncrement = onIncrement;
  }

  static get bestScore(): number {
    const bestScore = localStorage.getItem("bestScore");
    return bestScore ? +bestScore : 0;
  }

  setBestScore() {
    localStorage.setItem("bestScore", JSON.stringify(this.score));
  }

  reset() {
    this.score = 0;
  }

  increment() {
    this.score += this.by;

    this.onIncrement(this.score);
  }
}
