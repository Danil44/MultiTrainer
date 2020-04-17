export default class GameModal {
  text: string;
  buttonText: string;
  onClose: () => void;

  constructor({
    text,
    buttonText,
    onClose,
  }: {
    onClose: () => void;
    buttonText: string;
    text: string;
  }) {
    this.text = text;
    this.buttonText = buttonText;
    this.onClose = onClose;
  }

  generate() {
    const textElement = document.createElement("h2");
    const button = document.createElement("button");
    const fragment = new DocumentFragment();

    textElement.textContent = this.text;
    button.textContent = this.buttonText;

    fragment.appendChild(textElement);
    fragment.appendChild(button);

    button.addEventListener("click", this.onClose);

    return fragment;
  }
}
