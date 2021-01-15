var game = new Game();
var centerDeck = document.getElementById("centerDeck");
var centerDeckImage = document.getElementById("centerDeckImage")

window.addEventListener("load", dealAndShuffle);
window.addEventListener("keydown", addCardToCenterDeck);

function dealAndShuffle() {
  game.shuffle(game.cards);
  game.deal();
}

function addCardToCenterDeck() {
  centerDeck.classList.remove("hidden");
  if(event.key === 'q'){
    game.currentPlayer = game.player1;
    game.dealToMiddle();
    updateCardImage();
  } else if(event.key === 'p'){
    game.currentPlayer = game.player2;
    game.dealToMiddle();
    updateCardImage();
  }
}

function updateCardImage() {
  centerDeckImage.src = `${game.deck[0]}`;
}
