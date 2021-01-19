class Game {
  constructor(player) {
    this.player1 = new Player();
    this.player2 = new Player();
    this.currentPlayer = "player1"
    this.deck = [];
    this.currentDeck = [];
    this.deckType = "centerDeck";
    this.slapType;
    this.slapper;
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
  shuffle(cards, length) {
    var randomNumbers = [];
    var tempDeck = [];
    while(randomNumbers.length < length){
      var randomNumber = Math.floor(Math.random() * length);
      if(randomNumbers.indexOf(randomNumber) === -1) randomNumbers.push(randomNumber);
    }
    for(var i = 0; i < randomNumbers.length; i++){
      if(this.deckType === "centerDeck"){
        tempDeck.push(cards[randomNumbers[i]]);
        this.deck = tempDeck;
      } else if (this.deckType === "player1Deck") {
        tempDeck.push(cards[randomNumbers[i]]);
        this.player1.hand = tempDeck;
      } else {
        tempDeck.push(cards[randomNumbers[i]])
        this.player2.hand = tempDeck;
      }
    }
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
  slap() {
    this.resetTheDeck()
    if(this.deck.length > 0) {
      var slappedCard = this.deck[0];
      var currentCardDashSplit = slappedCard.split("-");
      var currentCardPeriodSplit = currentCardDashSplit[1].split(".");
    }
    if(this.deck.length > 1){
      var previousCard = this.deck[1];
      var previousCardDashSplit = previousCard.split("-");
      var previousCardPeroidSplit = previousCardDashSplit[1].split(".")
    }
    if(this.deck.length > 2) {
      var thirdCard = this.deck[2];
      var thirdCardDashSplit = thirdCard.split("-");
      var thirdCardPeriodSplit = thirdCardDashSplit[1].split(".")
    }
    if(this.deck.length && currentCardDashSplit[1] === "jack.png" && event.key === "f" && this.player2.hand.length){
      for(var i = 0; i < this.deck.length; i++){
        this.player1.hand.push(this.deck[i])
      }
      this.slapType = "slapJack";
      this.slapper = "Player 1"
      this.deck = [];
      this.deckType = "player1Deck";
      this.shuffle(this.player1.hand, this.player1.hand.length);
    } else if(this.deck.length && currentCardDashSplit[1] === "jack.png" && event.key === "j" && this.player1.hand.length) {
      for(var i = 0; i < this.deck.length; i++){
        this.player2.hand.push(this.deck[i])
      }
      this.slapType = "slapJack";
      this.slapper = "Player 2"
      this.deck = [];
      this.deckType = "player2Deck";
      this.shuffle(this.player2.hand, this.player2.hand.length)
    } else if(this.deck.length && game.deck.length > 1 && previousCardPeroidSplit[0] === currentCardPeriodSplit[0] && event.key === "f" && this.player1.hand.length && this.player2.hand.length) {
      for(var i = 0; i < this.deck.length; i++){
        this.player1.hand.push(this.deck[i])
      }
      this.slapType = "double";
      this.slapper = "Player 1"
      this.deck = [];
      this.deckType = "player1Deck";
      this.shuffle(this.player1.hand, this.player1.hand.length)
    } else if(this.deck.length && game.deck.length > 1 && previousCardPeroidSplit[0] === currentCardPeriodSplit[0] && event.key === "j" && this.player1.hand.length && this.player2.hand.length){
      for(var i = 0; i < this.deck.length; i++){
        this.player2.hand.push(this.deck[i])
      }
      this.slapType = "double";
      this.slapper = "Player 2"
      this.deck = [];
      this.deckType = "player2Deck";
      this.shuffle(this.player2.hand, this.player2.hand.length)
    } else if (this.deck.length && game.deck.length > 2 && currentCardPeriodSplit[0] === thirdCardPeriodSplit[0] && event.key === "f" && this.player1.hand.length && this.player2.hand.length){
      for(var i = 0; i < this.deck.length; i++){
        this.player1.hand.push(this.deck[i])
      }
      this.slapType = "sandwich";
      this.slapper = "Player 1"
      this.deck = [];
      this.deckType = "player1Deck";
      this.shuffle(this.player1.hand, this.player1.hand.length)
    } else if (this.deck.length && game.deck.length > 2 && currentCardPeriodSplit[0] === thirdCardPeriodSplit[0] && event.key === "j" && this.player1.hand.length && this.player2.hand.length) {
      for(var i = 0; i < this.deck.length; i++){
        this.player2.hand.push(this.deck[i])
      }
      this.slapType = "sandwich";
      this.slapper = "Player 2"
      this.deck = [];
      this.deckType = "player2Deck";
      this.shuffle(this.player2.hand, this.player2.hand.length)
    } else if (event.key === "f" && this.player2.hand.length) {
      this.slapType = "badSlap";
      this.slapper = "Player 1";
      var forfietCard = this.player1.hand.shift()
      this.player2.hand.push(forfietCard)
    } else if (event.key === "j" && this.player1.hand.length) {
      this.slapType = "badSlap";
      this.slapper = "Player 2"
      var forfietCard = this.player2.hand.shift()
      this.player1.hand.push(forfietCard)
    } else {
      return;
    }
  }
  resetTheDeck() {
    var slappedCard = this.deck[0];
    var cardType = slappedCard.split("-");
    if(!this.player1.hand.length && event.key === "j" && cardType[1] === "jack.png") {
      for(var i = 0; i < this.player2.hand.length; i++){
        this.deck.push(this.player2.hand[i]);
      }
      this.player2.hand = [];
      this.player2.wins+=1;
      this.deckType = "centerDeck";
      this.slapType = "winner";
      playerOneDeck.classList.remove("hidden");
      this.shuffle(this.deck, this.deck.length);
      this.deal();
    } else if (!this.player2.hand.length && event.key === "f" && cardType[1] === "jack.png") {
      for(var i = 0; i < this.player1.hand.length; i++) {
        this.deck.push(this.player1.hand[i]);
      }
      this.player1.hand = [];
      this.player1.wins+=1;
      this.deckType = "centerDeck";
      this.slapType = "winner";
      playerTwoDeck.classList.remove("hidden");
      this.shuffle(this.deck, this.deck.length);
      this.deal();
    } else {

    }
  }
}
