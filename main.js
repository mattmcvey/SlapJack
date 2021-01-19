var game = new Game();
var centerDeck = document.getElementById("centerDeck");
var centerDeckImage = document.getElementById("centerDeckImage");
var playerOnedDeck = document.getElementById("playerTwoDeck");
var playerTwoDeck = document.getElementById("playerTwoDeck");
var headerMessage = document.getElementById("header")

window.addEventListener("load", dealAndShuffle);
window.addEventListener("keydown", addCardToCenterDeck);

function dealAndShuffle() {
  game.shuffle(game.cards, 52);
  game.deal();
}

function addCardToCenterDeck(event) {
  if(game.player1.hand.length && event.key === 'q' && game.currentPlayer === "player1"){
    game.currentPlayer = "player2";
    header.classList.add("hidden")
    var playedCard = game.player1.playCard();
    game.deck.unshift(playedCard)
    updateCardImage();
    console.log(game.player1.hand)
  } else if(game.player2.hand.length && event.key === 'p' && game.currentPlayer === "player2"){
    game.currentPlayer = "player1";
    header.classList.add("hidden")
    var playedCard = game.player2.playCard();
    game.deck.unshift(playedCard)
    updateCardImage();
    console.log(game.player2.hand)
  } else if(!game.player2.hand.length && event.key === "q"){
    game.currentPlayer = "player1"
    playerTwoDeck.classList.add("hidden")
    var playedCard = game.player1.playCard();
    game.deck.unshift(playedCard)
    updateCardImage();
    console.log(game.player1.hand)
  } else if (!game.player1.hand.length && event.key === "p"){
    game.currentPlayer = "player2"
    playerOneDeck.classList.add("hidden")
    var playedCard = game.player2.playCard();
    game.deck.unshift(playedCard)
    updateCardImage();
  } else if (event.key === "f" || event.key === "j"){
    if(event.key === "f") {
      playerOneDeck.classList.remove("hidden");
    } else if(event.key === "j") {
      playerTwoDeck.classList.remove("hidden");
    }
    game.slap();
    //game.resetTheDeck();
    slapMessage()
  } else {
    event.preventDefault(event)
  }
}

function updateCardImage() {
  centerDeck.classList.remove("hidden");
  centerDeckImage.src = `${game.deck[0]}`;
}

function slapMessage() {
  if(game.slapType === "slapJack"){
    header.classList.remove("hidden")
    headerMessage.innerText = `SLAPJACK! ${game.slapper} takes the pile!`
  } else if (game.slapType === "double") {
    header.classList.remove("hidden")
    headerMessage.innerText = `DOUBLE! ${game.slapper} takes the pile!`
  } else if (game.slapType === "sandwich") {
    header.classList.remove("hidden")
    headerMessage.innerText = `SANDWICH! ${game.slapper} takes the pile!`
  } else if (game.slapType === "badSlap") {
    header.classList.remove("hidden")
    headerMessage.innerText = `BAD SLAP! ${game.slapper} forfiets a card!`
  } else if (game.slapType === "winner") {
    header.classList.remove("hidden")
    headerMessage.innerText = `WINNER! ${game.slapper} wins the game!`
  }
}
