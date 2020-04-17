import multiplicationsArr from "../lib/multiplicationsArr";

export default class Trainer {
  constructor() {}

  static get randomExpression(): string {
    return multiplicationsArr[
      Math.ceil(Math.random() * multiplicationsArr.length)
    ];
  }
}
