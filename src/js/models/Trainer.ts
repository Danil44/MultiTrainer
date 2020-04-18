import multiplicationsArr from "../lib/multiplicationsArr";

const minValue = 0
const maxValue = 12

export default class Trainer {
  constructor() {}

  static get randomExpression(): string {
    let firstOperand = minValue + Math.random() * (maxValue - minValue - minValue + 1)
    let secondOperand = minValue + Math.random() * (maxValue - minValue - minValue + 1)
    return `${Math.floor(firstOperand)} * ${Math.floor(secondOperand)}`
  }
}