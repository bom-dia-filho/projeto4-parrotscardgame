// VARIABLES

const board = document.querySelector(".cards");
let cardNumber = 0;
let stack = [];
let relief = [];
let plays = 0;
const infoCards = [
  {
    cover: "./assets/cover.png",
    art: "./assets/bobrossparrot.gif",
  },
  {
    cover: "./assets/cover.png",
    art: "./assets/explodyparrot.gif",
  },
  {
    cover: "./assets/cover.png",
    art: "./assets/fiestaparrot.gif",
  },
  {
    cover: "./assets/cover.png",
    art: "./assets/metalparrot.gif",
  },
  {
    cover: "./assets/cover.png",
    art: "./assets/revertitparrot.gif",
  },
  {
    cover: "./assets/cover.png",
    art: "./assets/tripletsparrot.gif",
  },
  {
    cover: "./assets/cover.png",
    art: "./assets/unicornparrot.gif",
  },
];

const shuffle = () => Math.random() - 0.5;

function howManyCards() {
  const cardNumber = Number(prompt("Quantas cartas?"));

  return cardNumber >= 4 && cardNumber <= 14 && cardNumber % 2 == 0
    ? cardNumber
    : howManyCards();
}

function compareCardsInStack() {
  plays++;

  if (stack[0].art === stack[1].art) {
    relief.push(stack);

    const timeOut = setTimeout(() => {
      gameOver();
      clearTimeout(timeOut);
    }, 300);
  } else
    stack.forEach((card) => {
      const timeOut = setTimeout(() => {
        card["card"].classList.toggle("faceup");
        card["card"].querySelector("img").src = "./assets/cover.png";
        card["card"].setAttribute("data-disabled", "0");
        clearTimeout(timeOut);
      }, 1000);
    });
  clearStack();
}

function clearStack() {
  stack = [];
}

function clearRelief() {
  relief = [];
}

function gameOver() {
  if (relief.length == cardNumber / 2) {
    alert("Você ganhou!");
    newGame();
  }
}

// PARROT CARDS

function parrotCards(info) {
  const card = document.createElement("li");
  card.classList.add("card");
  //card.setAttribute("data-id", info.id);
  card.setAttribute("data-disabled", "0");
  const img = document.createElement("img");
  img.src = info.cover;

  card.appendChild(img);

  // EVENT CLICK

  card.addEventListener("click", (e) => {
    if (card.getAttribute("data-disabled") === "0") {
      card.setAttribute("data-disabled", "1");
      if (stack.length < 2) {
        card.classList.toggle("faceup");
        card.querySelector("img").src = info.art;
        stack.push({ card: card, art: info.art });
      }
      if (stack.length == 2) compareCardsInStack();
    }
  });

  return card;
}
// APPEND TO BOARD

function appendBoard() {
  infoCards.sort(shuffle);

  let cards = Array.from({ length: cardNumber / 2 }, (v, i) => [
    parrotCards(infoCards[i]),
    parrotCards(infoCards[i]),
  ]).reduce((prev, curr) => {
    curr.forEach((c) => {
      prev.push(c);
    });
    return prev;
  }, []);

  cards.sort(shuffle);
  cards.map((card) => board.appendChild(card));
}

function newGame() {
  clearStack();
  clearRelief();
  board.innerHTML = "";
  plays = 0;
  cardNumber = 4; //howManyCards();
  appendBoard();
}

newGame();
