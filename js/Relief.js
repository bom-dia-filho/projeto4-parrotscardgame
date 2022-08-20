class Relief extends Array {
  constructor(winGame) {
    super();
    this.winGame = winGame;
  }

  clear(stack) {
    stack.length = 0;
    this.lock = false;
  }

  add(stack) {
    this.lock = true;
    let card = stack.map((item) => item);

    if (card[0].src === card[1].src) {
      this.push(card[0]);
      this.winGame(this, stack.plays);
      this.clear(stack);
    } else {
      const flip = setTimeout(() => {
        card[0].card.flip();
        card[1].card.flip();
        this.clear(stack);
        clearTimeout(flip);
      }, 1000);
    }
  }
}
