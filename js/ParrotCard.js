class ParrotCard extends HTMLElement {
  constructor(data, stack) {
    super();
    this.data = data;
    this.stack = stack;
  }

  connectedCallback() {
    this.img = document.createElement("img");
    this.img.src = this.data.cover;

    this.setAttribute("disabled", "0");

    this.addEventListener("click", (e) => {
      if (this.getAttribute("disabled") === "0") {
        this.stack.add(this);
      }
    });

    this.classList.add("card");
    this.appendChild(this.img);
  }

  flip() {
    this.img.src = this.classList.contains("faceup")
      ? this.data.cover
      : this.data.faceup;

    this.classList.toggle("faceup");
  }

  disabled() {
    this.getAttribute("disabled") == "1"
      ? this.setAttribute("disabled", "0")
      : this.setAttribute("disabled", "1");
  }
}

customElements.define("parrot-card", ParrotCard);
