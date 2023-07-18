let board = ["", "", "", "", "", "", "", "", ""];
let currentplayer = "X";
let scoreX = 0;
let scoreO = 0;

const winning_combination = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function move(cellIndex) {
  if (board[cellIndex] === "" && !isGameOver()) {
    board[cellIndex] = currentplayer;

    const cell = document.getElementsByClassName("cell")[cellIndex];
    cell.innerHTML = currentplayer;

    if (win(currentplayer)) {
      message(`Player ${currentplayer} wins!`);
      updateScoreboard();
    } else if (draw()) {
      message("It's a draw!");
    } else {
      currentplayer = currentplayer === "X" ? "O" : "X";
    }
  }
}

function win(player) {
  for (let i = 0; i < winning_combination.length; i++) {
    const [a, b, c] = winning_combination[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      if (player === "X") {
        scoreX++;
      } else if (player === "O") {
        scoreO++;
      }
      return true;
    }
  }
  return false;
}

function draw() {
  return board.every(cell => cell !== "");
}

function isGameOver() {
  return win("X") || win("O") || draw();
}

function message(textmessage) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = textmessage;
}

function btnreset() {
  board = ["", "", "", "", "", "", "", "", ""];
  
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  
  currentplayer = "X";

  message("");
}
function scoreboardbutton(){
    scoreO=0;
    scoreX=0;
    board = ["", "", "", "", "", "", "", "", ""];
  
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
    }
    
    currentplayer = "X";
  
    message("");
    const scoreXElement = document.getElementById("score-x");
  const scoreOElement = document.getElementById("score-o");
  scoreXElement.textContent = scoreX;
  scoreOElement.textContent = scoreO;


}

function updateScoreboard() {
  const scoreXElement = document.getElementById("score-x");
  const scoreOElement = document.getElementById("score-o");
  scoreXElement.textContent = scoreX;
  scoreOElement.textContent = scoreO;
}
