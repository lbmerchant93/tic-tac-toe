class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.winCount = 0;
  };
  changeWinCount() {
    this.winCount += 1;
  };
  saveWinsToStorage() {
    var stringifyGame = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, stringifyGame);
  };
  retrieveWinsFromStorage() {
    for (var i = 0; i < localStorage.length; i++) {
      var storageKey = localStorage.key(i);
      var storageWins = JSON.parse(localStorage.getItem(storageKey));
      if (storageWins.id === "One" && this.id === "One") {
        this.winCount = storageWins.winCount;
      } else if (storageWins.id === "Two" && this.id === "Two") {
        this.winCount = storageWins.winCount;
      };
    };
  };
};
