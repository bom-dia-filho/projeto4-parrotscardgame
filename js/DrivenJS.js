class DrivenJS {
  static shuffle(items) {
    items.sort(() => Math.random() - 0.5);
    return items;
  }
}
