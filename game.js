class Game {
  constructor() {
    this.player1 = new Player('One', 'X');
    this.player2 = new Player('Two', 'O');
    this.players = [this.player1, this.player2];
    this.openBoxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];
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
    for (var i = 0; i < currentGame.openBoxes.length; i++) {
      if (event.target.id === currentGame.openBoxes[i].id) {
        this.openBoxes.splice(i, 1);
      }
    }
  }
  decidePlayerTurn() {
    if (this.currentPlayer.token === 'X') {
      this.currentPlayer = this.player2;
      this.waitingPlayer = this.player1;
    } else {
      this.currentPlayer = this.player1;
      this.waitingPlayer = this.player2;
    };
    updateMessageDisplayWhichTurn();
  };
  changeWinCount() {
    this.waitingPlayer.winCount += 1;
  }
  checkForWinner() {
    checkWinningConditions();
    declareWinner();
    disableBoxesAfterWin();
  };
  checkForDraw() {
    checkDrawConditions();
  };
  resetGame() {
    this.gamesPlayed += 1;
    this.boxesFilled = 0;
    this.openBoxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];
    var timer;
    timer = setTimeout(createNewGame, 1000);
  };
  showPlayerWinCount() {
    displayWinCounts();
  };
  grabWinsFromStorage() {
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      var storageWins = JSON.parse(localStorage.getItem(storageKey));
      if (storageWins.id === "One") {
        this.player1.winCount = storageWins.winCount;
      } else if (storageWins.id === "Two") {
        this.player2.winCount = storageWins.winCount;
      };
    };
  };
  saveWinningBoard() {

  };
};
