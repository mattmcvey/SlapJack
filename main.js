var game = new Game();
var centerDeck = document.getElementById("centerDeck");
var centerDeckImage = document.getElementById("centerDeckImage")

window.addEventListener("load", dealAndShuffle);
window.addEventListener("keydown", addCardToCenterDeck);

function dealAndShuffle() {
  game.shuffle(game.cards, 52);
  game.deal();
}

function addCardToCenterDeck(event) {
  if(game.player1.hand.length && event.key === 'q' && game.currentPlayer === "player1"){
    game.currentPlayer = "player2";
    var playedCard = game.player1.playCard();
    game.deck.unshift(playedCard)
    updateCardImage();
    console.log(game.player1.hand)
  } else if(game.player2.hand.length && event.key === 'p' && game.currentPlayer === "player2"){
    game.currentPlayer = "player1";
    var playedCard = game.player2.playCard();
    game.deck.unshift(playedCard)
    updateCardImage();
    console.log(game.player2.hand)
  } else if (event.key === "f" || event.key === "j"){
    game.slap();
  } else {
    event.preventDefault(event)
  }
}

function updateCardImage() {
  centerDeck.classList.remove("hidden");
  centerDeckImage.src = `${game.deck[0]}`;
}
