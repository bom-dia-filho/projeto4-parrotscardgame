class CardStack extends Array {
  constructor(relief, plays) {
    super();
    this.relief = relief;
    this.plays = plays;
  }

  add(item) {
    if (this.length < 2) {
      this.plays();
      item.flip();
      this.push({ card: item, src: item.img.src });
    }

    if (this.length === 2 && !this.relief.lock) {
      this.relief.add(this);
    }
  }
}
