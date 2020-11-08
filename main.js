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
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');

// global variables
var currentGame = new Game();
var boxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];

//eventListeners
window.addEventListener('load', getStoredWins);
boxOne.addEventListener('click', runGame);
boxTwo.addEventListener('click', runGame);
boxThree.addEventListener('click', runGame);
boxFour.addEventListener('click', runGame);
boxFive.addEventListener('click', runGame);
boxSix.addEventListener('click', runGame);
boxSeven.addEventListener('click', runGame);
boxEight.addEventListener('click', runGame);
boxNine.addEventListener('click', runGame);

// functions and event handlers
function displayPlayerInput(event) {
  for (var i = 0; i < boxes.length; i++) {
    if (event.target.id === boxes[i].id) {
      boxes[i].innerText = `${currentGame.currentPlayer.token}`;
      boxes[i].classList.add('disable');
      boxes.splice(i, 1);
    };
  };
};

function updateMessageDisplayWhichTurn() {
  messageDisplay.innerText = `It's ${currentGame.currentPlayer.token}'s turn`;
};

function checkForPossibleWinningAbility() {
  if (currentGame.boxesFilled >= 5 && currentGame.boxesFilled <= 9) {
    currentGame.checkForWinner();
  };
};

function checkForDrawAbility() {
  if (currentGame.boxesFilled === 9) {
    currentGame.checkForDraw();
    currentGame.resetGame();
  };
};

function runGame() {
  displayPlayerInput(event);
  currentGame.claimBox();
  currentGame.decidePlayerTurn();
  checkForPossibleWinningAbility();
  checkForDrawAbility();
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
    currentGame.changeWinCount();
    currentGame.waitingPlayer.saveWinsToStorage();
    currentGame.resetGame();
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
  currentGame.showPlayerWinCount();
};

function displayWinCounts() {
  playerOneWins.innerText = `${currentGame.player1.winCount} wins`;
  playerTwoWins.innerText = `${currentGame.player2.winCount} wins`;
};

function getStoredWins() {
  if (localStorage.length > 0) {
    currentGame.grabWinsFromStorage();
    currentGame.showPlayerWinCount();
  };
};
//
