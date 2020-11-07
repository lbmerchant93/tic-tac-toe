class Game {
  constructor() {
    this.player1 = new Player('One', 'X');
    this.player2 = new Player('Two', 'O');
    this.currentPlayer = this.player1;
    this.boxesFilled = 0;
  };
  decidePlayerTurn() {
    this.boxesFilled += 1;
    if (this.currentPlayer.token === 'X') {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    };
  };
  checkForWinner() {
    if (boxOne.innerText === boxTwo.innerText && boxOne.innerText === boxThree.innerText) {
      messageDisplay.innerText = `${boxOne.innerText} won!`;
    } else if (boxFour.innerText === boxFive.innerText && boxFour.innerText === boxSix.innerText) {
      messageDisplay.innerText = `${boxFour.innerText} won!`;
    } else if (boxSeven.innerText === boxEight.innerText && boxSeven.innerText === boxNine.innerText) {
      messageDisplay.innerText = `${boxSeven.innerText} won!`;
    } else if (boxOne.innerText === boxFour.innerText && boxOne.innerText === boxSeven.innerText) {
      messageDisplay.innerText = `${boxOne.innerText} won!`;
    } else if (boxTwo.innerText === boxFive.innerText && boxTwo.innerText === boxEight.innerText) {
      messageDisplay.innerText = `${boxTwo.innerText} won!`;
    } else if (boxThree.innerText === boxSix.innerText && boxThree.innerText === boxNine.innerText) {
      messageDisplay.innerText = `${boxThree.innerText} won!`;
    } else if (boxOne.innerText === boxFive.innerText && boxOne.innerText === boxNine.innerText) {
      messageDisplay.innerText = `${boxOne.innerText} won!`;
    } else if (boxThree.innerText === boxFive.innerText && boxThree.innerText === boxSeven.innerText) {
      messageDisplay.innerText = `${boxThree.innerText} won!`;
    }
    if (messageDisplay.innerText.includes('won!')) {
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.add('disable');
      };
    };
  };
  checkForDraw() {
    if(!messageDisplay.innerText.includes('won!')) {
      messageDisplay.innerText = `Its a draw!`
    }
  };
  saveWinningBoard() {

  };
  resetGame() {

  };
};
