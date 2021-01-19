class Player {
  constructor(id) {
    this.hand = [];
    this.id = id;
    this.wins = 0;
  }
  playCard() {
    var firstCard = this.hand.shift();
    return firstCard;
  }
  saveWinsToStorage() {
    var stringified = JSON.stringify(this);
    localStorage.setItem(this.id, stringified);
  }
}
