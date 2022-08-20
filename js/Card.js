class Card extends HTMLElement {
  constructor(info, stack) {
    super();
    this.info = info;
    this.stack = stack;
    this.build();
  }

  build() {
    this.classList.add("card");
    this.img = document.createElement("img");
    this.img.src = this.info.cover;
    this.append(this.img);
    this.setAttribute("data-disabled", "1");
    this.addEventListener("click", (e) => {
      if (this.getAttribute("data-disabled") == "1") {
        this.stack.add(this);
      }
    });
  }

  disabled() {
    this.getAttribute("data-disabled") == "1"
      ? this.setAttribute("data-disabled", "0")
      : this.setAttribute("data-disabled", "1");
  }

  flip() {
    this.img.src = this.classList.contains("faceup")
      ? this.info.cover
      : this.info.faceup;

    this.classList.toggle("faceup");
    this.disabled();
  }
}

customElements.define("parrot-card", Card);
