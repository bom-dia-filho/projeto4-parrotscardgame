class ReavealedCardList extends Array {
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
    if (stack[0].src === stack[1].src) {
      this.push(stack[0]);
      this.winGame(this, stack.plays);
      this.clear(stack);
    } else {
      const flip = setTimeout(() => {
        stack[0].card.flip();
        stack[1].card.flip();

        stack[0].card.disabled();
        stack[1].card.disabled();
        this.clear(stack);
        clearTimeout(flip);
      }, 1000);
    }
  }
}
