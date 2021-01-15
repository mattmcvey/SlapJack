class Game {
  constructor(player) {
    this.player1 = new Player();
    this.player2 = new Player();
    this.currentPlayer = this.player1
    this.deck = [];
    this.cards = [
      './assets/blue-01.png',
      './assets/blue-02.png',
      './assets/blue-03.png',
      './assets/blue-04.png',
      './assets/blue-05.png',
      './assets/blue-06.png',
      './assets/blue-07.png',
      './assets/blue-08.png',
      './assets/blue-09.png',
      './assets/blue-10.png',
      './assets/blue-jack.png',
      './assets/blue-king.png',
      './assets/blue-queen.png',
      './assets/gold-01.png',
      './assets/gold-02.png',
      './assets/gold-03.png',
      './assets/gold-04.png',
      './assets/gold-05.png',
      './assets/gold-06.png',
      './assets/gold-07.png',
      './assets/gold-08.png',
      './assets/gold-09.png',
      './assets/gold-10.png',
      './assets/gold-jack.png',
      './assets/gold-queen.png',
      './assets/gold-king.png',
      './assets/green-01.png',
      './assets/green-02.png',
      './assets/green-03.png',
      './assets/green-04.png',
      './assets/green-05.png',
      './assets/green-06.png',
      './assets/green-07.png',
      './assets/green-08.png',
      './assets/green-09.png',
      './assets/green-10.png',
      './assets/green-jack.png',
      './assets/green-king.png',
      './assets/green-queen.png',
      './assets/red-01.png',
      './assets/red-02.png',
      './assets/red-03.png',
      './assets/red-04.png',
      './assets/red-05.png',
      './assets/red-06.png',
      './assets/red-07.png',
      './assets/red-08.png',
      './assets/red-09.png',
      './assets/red-10.png',
      './assets/red-jack.png',
      './assets/red-king.png',
      './assets/red-queen.png'
    ]
  }
  shuffle(cards) {
    var randomNumbers = [];
    while(randomNumbers.length < 52){
      var randomNumber = Math.floor(Math.random() * 52);
      if(randomNumbers.indexOf(randomNumber) === -1) randomNumbers.push(randomNumber);
    }
    for(var i = 0; i < randomNumbers.length; i++){
      this.deck.push(cards[randomNumbers[i]]);
    }
    return this.deck;
  }
  deal() {
    for(var i = 0; i < this.deck.length; i++){
      if(i % 2 === 0){
        this.player1.hand.push(this.deck[i]);
      } else {
        this.player2.hand.push(this.deck[i]);
      }
    }
    this.deck = [];
  }
  dealToMiddle() {
    var firstCard;
    if(this.currentPlayer === this.player1){
      firstCard = this.player1.hand.shift();
      this.deck.unshift(firstCard);
      this.currentPlayer = this.player2;
    } else {
      firstCard = this.player2.hand.shift();
      this.deck.unshift(firstCard);
      this.currentPlayer = this.player1
    }
  }
  slap() {

  }
  winCount() {

  }
  resetTheDeck() {

  }
}
