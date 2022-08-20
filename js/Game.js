const shuffle = () => Math.random() - 0.5;

class Game {
  constructor(app, cardsData) {
    this.app = app;
    this.pairs = 6;
    this.revealed = new ReavealedCardList(this.winGame.bind(this));
    this.stack = new Stack(this.revealed);
    this.cardsData = cardsData;
    this.createBoard();
  }

  createBoard() {
    this.board = new CardField();

    this.createCards();

    this.cards.forEach((card) => {
      this.board.appendChild(card);
    });
    this.app.appendChild(this.board);
  }

  createCards() {
    this.cards = this.cardsData
      .slice(0, this.pairs)
      .map((data) => [
        new ParrotCard(data, this.stack),
        new ParrotCard(data, this.stack),
      ])
      .reduce((prev, curr) => prev.concat(curr), []);

    this.cards.sort(shuffle);
  }

  reset() {}

  winGame() {
    if (this.revealed.length === this.pairs) {
      alert("Voce ganhou");
    }
  }
}
