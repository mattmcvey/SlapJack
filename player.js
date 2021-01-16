class Player {
  constructor(id, wins) {
    this.hand = [];
    this.id = id;
    this.wins = wins;
  }
  playCard() {
    var firstCard = this.hand.shift();
    return firstCard;
  }
  saveWinsToStorage() {

  }
}
