// BOARD
const board = document.querySelector(".board");

// Global Variables
let plays = 0;
const game = new CardStack(new Relief(winGame), anotherOne);

function anotherOne() {
  plays++;
}

let number = 2;

function createBoard() {
  const cards = arts
    .slice(0, number)
    .map((art) => [new Card(art, game), new Card(art, game)])
    .reduce((prev, curr) => prev.concat(curr), []);

  cards.sort(shuffle);

  cards.forEach((card) => board.appendChild(card));
}

function winGame(relief) {
  if (relief.length === number) {
    relief.length = 0;
    const wait = setTimeout(() => {
      alert(`Você ganhou em ${plays} jogadas!`);
      board.innerHTML = "";
      plays = 0;
      createBoard();
      clearTimeout(wait);
    }, 300);
  }
}

createBoard();
