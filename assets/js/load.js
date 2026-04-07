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

[board, win, tie, lose, turn, sts] = intialize(board, win, lose, tie, turn, sts)
uiUpdate(board, win, lose, tie, turn, sts)
console.log(board)

document.getElementById("a1").addEventListener("click", () => {
  move = Number(0)
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  console.log(`${board}, ${win}, ${lose}, ${tie}, ${turn}, ${sts}, ${move}`)
  uiUpdate(board, win, lose, tie, turn, sts)
});
document.getElementById("a2").addEventListener("click", () => {
  move = 1
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  uiUpdate(board, win, lose, tie, turn, sts)
});
document.getElementById("a3").addEventListener("click", () => {
  move = 2
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  uiUpdate(board, win, lose, tie, turn, sts)
});
document.getElementById("b1").addEventListener("click", () => {
  move = 3
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  uiUpdate(board, win, lose, tie, turn, sts)
});
document.getElementById("b2").addEventListener("click", () => {
  move = 4
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  uiUpdate(board, win, lose, tie, turn, sts)
});
document.getElementById("b3").addEventListener("click", () => {
  move = 5
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  uiUpdate(board, win, lose, tie, turn, sts)
});
document.getElementById("c1").addEventListener("click", () => {
  move = 6
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  uiUpdate(board, win, lose, tie, turn, sts)
});
document.getElementById("c2").addEventListener("click", () => {
  move = 7
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  uiUpdate(board, win, lose, tie, turn, sts)
});
document.getElementById("c3").addEventListener("click", () => {
  move = 8
  [board, win, lose, tie, turn, sts] = playerCo(board, win, lose, tie, turn, sts, move)
  uiUpdate(board, win, lose, tie, turn, sts)
});

document.getElementById("restart").addEventListener("click", () => {
 [board, win, tie, lose, turn, sts] = reset(board, win, lose, tie, turn, sts);
 uiUpdate(board, win, tie, lose, turn, sts);
});
document.getElementById("replay").addEventListener("click", () => {
  [board, win, lose, tie, turn, sts] = replay(board, win, lose, tie, turn, sts);
  uiUpdate(board, win, lose, tie, turn, sts)
});


