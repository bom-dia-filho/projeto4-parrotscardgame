const shuffle = () => Math.random() - 0.5;

class Game {
  constructor(app, cardsData) {
    this.app = app;
    this.pairs = 2;
    this.revealed = new ReavealedCardList(this.winGame.bind(this));
    this.stack = new Stack(this.revealed, this.anotherOne.bind(this));
    this.cardsData = cardsData;
    this.plays = 0;
    this.stopwatch = new StopWatch();
    this.app.appendChild(this.stopwatch);
    this.newGame();
  }

  createBoard() {
    this.board = new CardField(this.pairs);

    this.createCards();

    this.cards.forEach((card) => {
      this.board.appendChild(card);
    });
    this.app.appendChild(this.board);
    console.log(this.stopwatch);
    this.stopwatch.start();
  }

  createCards() {
    this.cards = this.cardsData
      .slice(0, this.pairs / 2)
      .map((data) => [
        new ParrotCard(data, this.stack),
        new ParrotCard(data, this.stack),
      ])
      .reduce((prev, curr) => prev.concat(curr), []);

    this.cards.sort(shuffle);
  }

  anotherOne() {
    this.plays++;
  }

  howManyCards() {
    const number = Number(prompt("Quantas cartas?"));
    return number >= 4 && number <= 14 && number % 2 == 0
      ? number
      : this.howManyCards();
  }

  reset() {
    this.plays = 0;
    this.revealed = new ReavealedCardList(this.winGame.bind(this));
    this.stack = new Stack(this.revealed, this.anotherOne.bind(this));
    this.board.remove();
    this.stopwatch.reset();
  }

  newGame() {
    this.pairs = this.howManyCards();
    this.createBoard();
  }

  winGame() {
    if (this.revealed.length === this.pairs / 2) {
      this.stopwatch.stop();
      const wait = setTimeout(() => {
        alert(
          `Você ganhou em ${this.plays} jogadas!\nSeu jogo durou ${this.stopwatch.timer} segundos!`
        );

        let again = prompt("Gostaria de Jogador dnv? Sim ou Não");
        if (again.toLowerCase() === "sim") {
          this.reset();
          this.pairs = this.howManyCards();
          this.createBoard();
        }
        clearTimeout(wait);
      }, 200);
    }
  }
}
