//querySelectors
var messageDisplay = document.querySelector('.display-turn');
var boxOne = document.querySelector('.one');
var boxTwo = document.querySelector('.two');
var boxThree = document.querySelector('.three');
var boxFour = document.querySelector('.four');
var boxFive = document.querySelector('.five');
var boxSix = document.querySelector('.six');
var boxSeven = document.querySelector('.seven');
var boxEight = document.querySelector('.eight');
var boxNine = document.querySelector('.nine');

// global variables
var currentGame = new Game();
var boxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];

//eventListeners
boxOne.addEventListener('click', displayPlayerInput);
boxTwo.addEventListener('click', displayPlayerInput);
boxThree.addEventListener('click', displayPlayerInput);
boxFour.addEventListener('click', displayPlayerInput);
boxFive.addEventListener('click', displayPlayerInput);
boxSix.addEventListener('click', displayPlayerInput);
boxSeven.addEventListener('click', displayPlayerInput);
boxEight.addEventListener('click', displayPlayerInput);
boxNine.addEventListener('click', displayPlayerInput);

// functions and event handlers
function displayPlayerInput(event) {
  for (var i = 0; i < boxes.length; i++) {
    if (event.target.id === boxes[i].id) {
      boxes[i].innerText = `${currentGame.currentPlayer.token}`;
      boxes[i].classList.add('disable');
      boxes.splice(i, 1);
    };
  };
  currentGame.claimBox();
  currentGame.decidePlayerTurn();
  messageDisplay.innerText = `It's ${currentGame.currentPlayer.token}'s turn`;
  if (currentGame.boxesFilled >= 5 && currentGame.boxesFilled <= 9) {
    currentGame.checkForWinner();
    if (messageDisplay.innerText.includes('won!')) {
      currentGame.chooseWinner();
      currentGame.resetGame();
    };
  }
  if (currentGame.boxesFilled === 9) {
    currentGame.checkForDraw();
    currentGame.resetGame();
  };
};

function checkWinningConditions() {
  if (boxOne.innerText === boxTwo.innerText && boxTwo.innerText === boxThree.innerText && boxOne.innerText != '') {
    messageDisplay.innerText = `${boxOne.innerText} won!`;
  } else if (boxFour.innerText === boxFive.innerText && boxFive.innerText === boxSix.innerText && boxFour.innerText != '') {
    messageDisplay.innerText = `${boxFour.innerText} won!`;
  } else if (boxSeven.innerText === boxEight.innerText && boxEight.innerText === boxNine.innerText && boxSeven.innerText != '') {
    messageDisplay.innerText = `${boxSeven.innerText} won!`;
  } else if (boxOne.innerText === boxFour.innerText && boxFour.innerText === boxSeven.innerText && boxOne.innerText != '') {
    messageDisplay.innerText = `${boxOne.innerText} won!`;
  } else if (boxTwo.innerText === boxFive.innerText && boxFive.innerText === boxEight.innerText && boxTwo.innerText != '') {
    messageDisplay.innerText = `${boxTwo.innerText} won!`;
  } else if (boxThree.innerText === boxSix.innerText && boxSix.innerText === boxNine.innerText && boxThree.innerText != '') {
    messageDisplay.innerText = `${boxThree.innerText} won!`;
  } else if (boxOne.innerText === boxFive.innerText && boxFive.innerText === boxNine.innerText && boxOne.innerText != '') {
    messageDisplay.innerText = `${boxOne.innerText} won!`;
  } else if (boxThree.innerText === boxFive.innerText && boxFive.innerText === boxSeven.innerText && boxThree.innerText != '') {
    messageDisplay.innerText = `${boxThree.innerText} won!`;
  };
};

function declareWinner() {
  if (messageDisplay.innerText.includes('won!')) {
    game.chooseWinner();
  };
};

function disableBoxesAfterWin() {
  if (messageDisplay.innerText.includes('won!')) {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.add('disable');
    };
  };
};

function checkDrawConditions() {
  if (!messageDisplay.innerText.includes('won!')) {
    messageDisplay.innerText = `Its a draw!`
  };
};

function createNewGame() {
  boxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove('disable');
    boxes[i].innerText = ``;
  };
  messageDisplay.innerText = `It's ${currentGame.currentPlayer.token}'s turn`;
};

function displayWinCount() {

}
//
