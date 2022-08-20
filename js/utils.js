const shuffle = () => Math.random() - 0.5;

function howManyCards() {
  const number = Number(prompt("Quantas cartas?"));

  return number >= 4 && number <= 14
    ? number && typeof number === "number"
    : howManyCards();
}
