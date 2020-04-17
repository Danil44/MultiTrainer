export default class Modal {
  container: string;
  modal: HTMLElement | null;
  onClose: () => void;

  constructor({
    container,
    onClose,
  }: {
    onClose: () => void;
    container: string;
  }) {
    this.container = container;
    this.modal = null;
    this.onClose = onClose;
  }

  generete(content: DocumentFragment | HTMLElement) {
    const container = document.createElement("div");
    container.classList.add("modal-container");

    document.querySelector(this.container)?.appendChild(container);

    container.appendChild(content);

    this.modal = container;
  }

  close() {
    if (!this.modal) return;

    this.modal.remove();

    this.onClose();
  }
}
