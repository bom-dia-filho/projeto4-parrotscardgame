class CardField extends HTMLElement {
  constructor(app) {
    super();
  }

  connectedCallback() {
    this.classList.add("field");
    window.addEventListener("resize", (e) => this.size());
    this.addEventListener("resize", (e) => this.size());
    this.size();
  }

  size() {
    let windowWidth = window.innerWidth - 30;
    let n = Math.trunc(windowWidth / 120);
    n = Math.trunc((windowWidth - 30 - (n - 1) * 20) / 120);

    if (windowWidth < 412) n = 1;
    else if (windowWidth > 1000) n = 6;

    this.style = `grid-template-columns: repeat(${n}, 120px)`;
  }
}

customElements.define("card-field", CardField);
