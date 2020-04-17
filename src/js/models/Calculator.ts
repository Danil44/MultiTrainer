export default class Calculator {
  static calculateFromString(string: string): number {
    return eval(string) as number;
  }
}
