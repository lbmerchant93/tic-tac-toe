class Game {
  constructor() {
    this.player1 = new Player('One', 'X');
    this.player2 = new Player('Two', 'O');
    this.currentPlayer = this.player1;
  };
  decidePlayerTurn() {
    if(this.currentPlayer.token === 'X'){
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    };
  };
  checkForWinner() {

  };
  checkForDraw() {

  };
  saveWinningBoard() {

  };
  resetGame() {

  };
};
