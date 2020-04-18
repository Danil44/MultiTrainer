const minValue = 0;
const maxValue = 12;

export default class Trainer {
  selectedOperand: number | null;
  constructor() {
    this.selectedOperand = null;
  }
  set firstOperand(operand: number | null) {
    this.selectedOperand = operand;
  }

  getRandomExpression(): string {
    let _firstOperand = this.selectedOperand
      ? this.selectedOperand
      : minValue + Math.random() * (maxValue - minValue - minValue + 1);

    let secondOperand =
      minValue + Math.random() * (maxValue - minValue - minValue + 1);
    return `${Math.floor(_firstOperand)} * ${Math.floor(secondOperand)}`;
  }
}
