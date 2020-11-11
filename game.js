class Game {
  constructor() {
    this.player1 = new Player('One', '🔥');
    this.player2 = new Player('Two', '❄️');
    this.players = [this.player1, this.player2];
    this.openBoxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];
    this.currentPlayer;
    this.waitingPlayer;
    this.gamesPlayed = 0;
    if (this.gamesPlayed % 2 === 0) {
      this.currentPlayer = this.player1;
    } else if (this.gamesPlayed % 2 != 0) {
      this.currentPlayer = this.player2;
    };
    this.boxesFilled = 0;
  };
  claimBox() {
    this.boxesFilled += 1;
    for (var i = 0; i < this.openBoxes.length; i++) {
      if (event.target.id === this.openBoxes[i].id) {
        this.openBoxes.splice(i, 1);
      };
    };
  };
  decidePlayerTurn() {
    if (this.currentPlayer.token === '🔥') {
      this.currentPlayer = this.player2;
      this.waitingPlayer = this.player1;
    } else {
      this.currentPlayer = this.player1;
      this.waitingPlayer = this.player2;
    };
  };
  resetGame() {
    this.gamesPlayed += 1;
    this.boxesFilled = 0;
    this.openBoxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];
    setTimeout(createNewGame, 1000);
  };
  assignPlayerWinsFromStorage() {
    this.player1.retrieveWinsFromStorage();
    this.player2.retrieveWinsFromStorage();
  };
};
