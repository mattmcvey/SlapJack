var game = new Game()


window.addEventListener("load", dealAndShuffle)

function dealAndShuffle() {
  game.shuffle(game.cards);
  game.deal();
}
