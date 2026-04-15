const score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
}
const winCond = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let end = 0;
let board = ["", "", "", "", "", "", "", "", ""];
board = rePlay();

function rePlay(){
    board = ["", "", "", "", "", "", "", "", ""];
    uiLoad();
    return board;
}

function reSet() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    scoreSave();
    board = rePlay();
    return board;
}

function uiLoad(){
    for (i = 0; i < 9; i++){
        document.getElementById(`i${i}`).src = uiCheck(i);
    }
    document.getElementById("win").innerHTML = `Win<br>${score.win}`;
    document.getElementById("lose").innerHTML = `Lose<br>${score.lose}`;
    document.getElementById("tie").innerHTML = `Draw<br>${score.tie}`;
    if (end === 1){
        document.getElementById("roundState").innerText = `You won! 🥳🥳🥳`;
    } else if (end === 2){
        document.getElementById("roundState").innerText = `You lost! 😔😔😔`;
    } else if (end === 3){
        document.getElementById("roundState").innerText = `Its a draw! 😮😮😮`;
    } else{
        document.getElementById("roundState").innerText = `Your Turn!`;
    }
}

function uiCheck(x){
    if (board[x] === "X") {
        return "assets/images/player.png";
    } else if (board[x] === "O") {
        return "assets/images/comp.png";
    }
    else {
        return "";
    }
}