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
let win;
let lose;
let tie;
let board;
let turn;
let move;
let sts;

// Initialize the game
[board, win, lose, tie, turn, sts] = intialize(board, win, lose, tie, turn, sts);
uiUpdate(board, win, tie, lose, turn, sts);
console.log(board);

// Player move handlers
document.getElementById("a1").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return; // Don't allow moves if game is over or it's computer's turn
  move = 0;
  console.log(board);
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  console.log(`board: ${board}, win: ${win}, lose: ${lose}, tie: ${tie}, turn: ${turn}, sts: ${sts}`);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("a2").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return;
  move = 1;
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("a3").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return;
  move = 2;
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("b1").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return;
  move = 3;
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("b2").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return;
  move = 4;
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("b3").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return;
  move = 5;
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("c1").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return;
  move = 6;
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("c2").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return;
  move = 7;
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("c3").addEventListener("click", () => {
  if (sts !== 0 || turn !== "Yours") return;
  move = 8;
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("restart").addEventListener("click", () => {
  [board, win, lose, tie, turn, sts] = reset(board, win, lose, tie, turn, sts);
  uiUpdate(board, win, tie, lose, turn, sts);
});

document.getElementById("replay").addEventListener("click", () => {
  [board, win, lose, tie, turn, sts] = replay(board, win, lose, tie, turn, sts);
  uiUpdate(board, win, tie, lose, turn, sts);
});