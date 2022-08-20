class Stack extends Array {
  constructor(revealed) {
    super();
    this.length = 0;
    this.revealed = revealed;
  }

  add(item) {
    if (this.length < 2) {
      item.disabled();
      item.flip();
      this.push({ card: item, src: item.img.src });
      console.log("1");
    }

    if (this.length === 2 && !this.revealed.lock) {
      this.revealed.add(this);
      console.log("entrou");
    }
  }
}
