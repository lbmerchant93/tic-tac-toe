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
var game = new Game();
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
      boxes[i].innerText = `${game.currentPlayer.token}`;
      boxes[i].classList.add('disable');
      boxes.splice(i, 1);
    };
  };
  game.decidePlayerTurn();
  messageDisplay.innerText = `It's ${game.currentPlayer.token}'s turn`;
  if (game.boxesFilled >= 5 && game.boxesFilled <= 8) {
    game.checkForWinner();
  } else if (game.boxesFilled === 9){
    game.checkForDraw();
  }
};









//
