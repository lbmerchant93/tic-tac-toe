class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.winCount = 0;
    this.wins = [];
  };
  saveWinsToStorage() {
    var stringifyGame = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, stringifyGame);
  };
  retrieveWinsFromStorage() {

  };
};
