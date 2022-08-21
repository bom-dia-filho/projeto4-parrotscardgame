class Stack extends Array {
  constructor(revealed, anotherOne) {
    super();
    this.length = 0;
    this.revealed = revealed;
    this.anotherOne = anotherOne;
  }

  add(item) {
    if (this.length < 2) {
      item.disabled();
      item.flip();
      this.anotherOne();
      this.push({ card: item, src: item.img.src });
    }

    if (this.length === 2 && !this.revealed.lock) {
      this.revealed.add(this);
    }
  }
}
