import Trainer from "./models/Trainer";
import Calculator from "./models/Calculator";
import Modal from "./models/Modal";
import Timer from "./models/Timer";
import Score from "./models/Score";
import GameModal from "./models/GameModal";

let isPlaying = false;

const expressionField = document.getElementById("js-expression");
const answerForm = document.getElementById("js-answer-form");

const trainer = new Trainer();

let expression: string = "";

answerForm!.addEventListener("submit", handleSubmitAnswer);

const initTimer = () => {
  new Timer({
    duration: 60,
    onCount: (time) => handleTimer(time),
    onComplete: () => completeGame(),
  }).start();
};

const handleTimer = (time: string) => {
  const timer = document.getElementById("js-timer");
  const timerSpan = timer?.querySelector("span");

  if (!timerSpan) return;

  timerSpan.textContent = time;
};

function initModal({ text }: { text: string }) {
  const modal = new Modal({
    container: "body",
    onClose: () => startGame(),
  });
  const startModal = new GameModal({
    text,
    buttonText: "Start",
    onClose: () => modal.close(),
    onOperandChoose: (e) => handleSelectFirstOperand(e),
  }).generate();

  modal.generete(startModal);
}

function handleSelectFirstOperand(e: any) {
  e.preventDefault();
  if (e.target?.nodeName !== "BUTTON") return;

  const selectedOperand: HTMLButtonElement = e.target;
  trainer.firstOperand = +selectedOperand.getAttribute("data-operand")!;

  if (selectedOperand.classList.contains("active")) {
    unsetOperand();
  } else {
    setActiveOperand();
  }

  function setActiveOperand() {
    document
      .querySelector(".modal-container button.active")
      ?.classList.remove("active");
    selectedOperand.classList.add("active");
  }

  function unsetOperand() {
    trainer.firstOperand = null;
    selectedOperand.classList.remove("active");
  }
}

function completeGame() {
  if (score.score > Score.bestScore) score.setBestScore();
  showBestScore();
  trainer.firstOperand = null;

  isPlaying = false;
  initModal({ text: `Your score is ${score.score}` });
}

function startGame() {
  isPlaying = true;

  score.reset();
  showScore(score.score);

  expression = trainer.getRandomExpression();
  expressionField!.textContent = expression;

  initTimer();
}

const score = new Score({ by: 10, onIncrement: (score) => showScore(score) });

const showBestScore = () => {
  const bestScoreElement = document.getElementById("js-best-score");
  bestScoreElement!.textContent = Score.bestScore.toString();
};

const showScore = (score: number) => {
  const scoreElement = document.getElementById("js-score");
  if (!scoreElement) return;

  scoreElement.textContent = score.toString();
};

initModal({ text: "Are you ready?" });
showBestScore();

function handleSubmitAnswer(this: HTMLFormElement, e: Event) {
  e.preventDefault();
  if (!isPlaying) return;
  const inputAnswer: HTMLInputElement = this.querySelector(
    "input[name='answer']"
  ) as HTMLInputElement;

  const correctAnswer = Calculator.calculateFromString(expression);

  if (+inputAnswer.value === correctAnswer) {
    setSuccessStyles();
    score.increment();

    setTimeout(() => {
      resetInput(inputAnswer);
      resetStyles();
      setNewExpression();
    }, 500);
  } else {
    setFailStyles();

    setTimeout(() => {
      resetStyles();
      resetInput(inputAnswer);
    }, 500);
  }
}

function setNewExpression() {
  expression = trainer.getRandomExpression();
  expressionField!.textContent = expression;
}

function resetInput(input: HTMLInputElement) {
  input.value = "";
}

function setFailStyles() {
  resetStyles();

  expressionField?.classList.add("fail");
  answerForm?.querySelector("input[name='answer']")?.classList.add("fail");
}

function setSuccessStyles() {
  resetStyles();

  expressionField?.classList.add("correct");
  answerForm?.querySelector("input[name='answer']")?.classList.add("correct");
}

function resetStyles() {
  expressionField?.classList.remove("fail");
  answerForm?.querySelector("input[name='answer']")?.classList.remove("fail");
  expressionField?.classList.remove("correct");
  answerForm
    ?.querySelector("input[name='answer']")
    ?.classList.remove("correct");
}
