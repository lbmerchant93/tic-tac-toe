class Game {
  constructor() {
    this.player1 = new Player('One', 'X');
    this.player2 = new Player('Two', 'O');
    this.players = [this.player1, this.player2];
    this.currentPlayer;
    this.waitingPlayer;
    this.gamesPlayed = 0;
    if (this.gamesPlayed % 2 === 0) {
      this.currentPlayer = this.player1;
    } else if (this.gamesPlayed % 2 != 0) {
      this.currentPlayer = this.player2;
    }
    this.boxesFilled = 0;
  };
  claimBox() {
    this.boxesFilled += 1;
  }
  decidePlayerTurn() {
    if (this.currentPlayer.token === 'X') {
      this.currentPlayer = this.player2;
      this.waitingPlayer = this.player1;
    } else {
      this.currentPlayer = this.player1;
      this.waitingPlayer = this.player2;
    };
  };
  chooseWinner() {
    this.waitingPlayer.winCount += 1;
  }
  checkForWinner() {
    checkWinningConditions();
    disableBoxesAfterWin();
  };
  checkForDraw() {
    checkDrawConditions();
  };
  resetGame() {
    this.gamesPlayed += 1;
    this.boxesFilled = 0;
    var timer;
    timer = setTimeout(createNewGame, 1000);
  };
  showPlayerWinCount() {
    displayWinCounts();
  }
  saveWinningBoard() {

  };
};
