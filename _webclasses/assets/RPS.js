function reset() {
  $("#cpu-Rock").removeClass("alert-info");
  $("#cpu-Paper").removeClass("alert-info");
  $("#cpu-Scissors").removeClass("alert-info");
  $("#cpu-Rock").removeClass("alert-dark");
  $("#cpu-Paper").removeClass("alert-dark");
  $("#cpu-Scissors").removeClass("alert-dark");
};

function cpuSelectRock() {
  reset();
  $("#cpu-Rock").addClass("alert-dark");
  $("#cpu-Paper").addClass("alert-info");
  $("#cpu-Scissors").addClass("alert-info");
}

function cpuSelectPaper() {
  reset();
  $("#cpu-Rock").addClass("alert-info");
  $("#cpu-Paper").addClass("alert-dark");
  $("#cpu-Scissors").addClass("alert-info");
}

function cpuSelectScissors() {
  reset();
  $("#cpu-Rock").addClass("alert-info");
  $("#cpu-Paper").addClass("alert-info");
  $("#cpu-Scissors").addClass("alert-dark");
}

function cpuPick() {
  var pick = Math.floor(Math.random() * 3);
  switch (pick) {
    case 0:
      cpuSelectRock();
      break;
    case 1:
      cpuSelectPaper();
      break;
    default:
      cpuSelectScissors();
  }
  return pick;
}

function playerWin() {
  $("#game-result").removeClass().addClass("alert alert-success").html("You Win!");
}

function playerLose() {
  $("#game-result").removeClass().addClass("alert alert-danger").html("You Lose!");
}

function playerTie() {
  $("#game-result").removeClass().addClass("alert alert-light").html("We Tied!");
}

function playGame(choice) {
  pick = cpuPick();
  var outcome = choice - pick;
  switch (outcome) {
    case 0:
      playerTie();
      break;
    case 1:
    case -2:
      playerWin();
      break;
    default:
      playerLose()
  }
};

$("#btn-Rock").click(function () {
  playGame(0);
});

$("#btn-Paper").click(function () {
  playGame(1);
});

$("#btn-Scissors").click(function () {
  playGame(2);
});