export default class GameModal {
  text: string;
  buttonText: string;
  onClose: () => void;
  onOperandChoose: (e: Event) => void;

  constructor({
    text,
    buttonText,
    onClose,
    onOperandChoose,
  }: {
    onClose: () => void;
    onOperandChoose: (e: Event) => void;
    buttonText: string;
    text: string;
  }) {
    this.text = text;
    this.buttonText = buttonText;
    this.onClose = onClose;
    this.onOperandChoose = onOperandChoose;
  }

  generate() {
    const textElement = document.createElement("h2");
    const button = document.createElement("button");
    const fragment = new DocumentFragment();
    const choosableList = this.generateChoosableList();
    textElement.textContent = this.text;

    button.textContent = this.buttonText;
    button.addEventListener("click", this.onClose);

    fragment.appendChild(textElement);
    fragment.appendChild(choosableList);
    fragment.appendChild(button);

    return fragment;
  }

  private generateChoosableList() {
    const operandsListContainer = document.createElement("div");
    const operandsList = document.createElement("ul");
    const chooseTextElement = document.createElement("p");

    operandsList.id = "js-operands-list";
    chooseTextElement.textContent =
      "Choose one of number's column if you want: ";
    operandsList.appendChild(chooseTextElement);
    operandsList.appendChild(this.generateNumbersColumns());
    operandsList.addEventListener("click", this.onOperandChoose);

    operandsListContainer.appendChild(chooseTextElement);
    operandsListContainer.appendChild(operandsList);

    operandsListContainer.classList.add("choosable-operands");

    return operandsListContainer;
  }

  private generateNumbersColumns() {
    const fragment = new DocumentFragment();

    for (let i = 1; i < 12; i++) {
      const col = document.createElement("li");
      const button = document.createElement("button");

      button.setAttribute("data-operand", i.toString());
      button.textContent = i.toString();
      col.appendChild(button);

      fragment.appendChild(col);
    }
    return fragment;
  }
}
