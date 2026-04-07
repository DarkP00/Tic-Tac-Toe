function intialize(board, win, tie, lose, turn, sts){
    win = 0;
    lose = 0;
    tie = 0;
    sts = 0;
    turn = "Yours";
    board = ["", "", "", "", "", "", "", "", ""];
    return [board, win, tie, lose, turn, sts];
}
function uiUpdate(board, win, tie, lose, turn, sts){
    document.getElementById("win").innerHTML = `Win<br > ${win}`;
    document.getElementById("tie").innerHTML = `Draw<br > ${tie}`;
    document.getElementById("lose").innerHTML = `lose<br > ${lose}`;
    for (let i = 0; i < board.length; i++) {
        document.getElementById(`i${i}`).src = boardUICondition(board[i]);
    }
    if (sts === 1){
        document.getElementById("roundState").innerText = `You won`;
    } else if (sts === 2){
        document.getElementById("roundState").innerText = `Computer won`;
    } else if (sts === 3){
        document.getElementById("roundState").innerText = `Its a draw`;
    } else{
        document.getElementById("roundState").innerText = `${turn} Turn!`;}
    }
function isValid(board, move){
    console.log(move)
    console.log(board[move])
    if (board[move] === ""){
        return true
        console.log("case 1")
    } 
    console.log("case 2")
    return false
}
function isWin(board, turn) {
    let player
    if (turn === "Yours"){
        player = "X"
    }else{
        player = "O"
    }
    return winCond.some(combo => combo.every(index => board[index] === player));
}
function isDraw(board){
    console.log("draw cehcked")
    return (!board.some(cell => cell === ""))
}
function playerSwitch(turn){
    if  (turn === "Yours"){
        turn = "Computer's"
        return turn
    } else {
        turn = "Yours"
        return turn
    }
}
function compMove(board){
    let move = Number(4);
    while(!isValid(board, move)){
        move = Math.floor(Math.random()*9)
    }
    board[move] = "O";
    return board;
}
function reset(board, win, lose, tie, turn, sts){
    [board, win, lose, tie, turn] = intialize(board, win, tie, lose, turn)
    console.log("reseted")
    return [board, win, tie, lose, turn, sts]
}
function replay(board, win, lose, tie, turn, sts){
    turn = "Yours";
    board = ["", "", "", "", "", "", "", "", ""];
    sts = 0;
    console.log("replay")
    return [board, win, lose, tie, turn, sts]
}
function boardUICondition(x){
    if (x === "O"){
        return "assets/images/comp.png"
    }
    else if ( x === "X"){
        return "assets/images/player.png"
    }
    else{
        return ""
    }
}
function playerCo(board, win, lose, tie, turn, sts, move){
    console.log(move)
    console.log(board[move])
    if (!isValid(board, move)){
        return [board, win, lose, tie, turn, sts]
    }
    else{
        board[move] = "X"
    }
    if (isWin(board, turn)){
        sts = 1;
        win += 1;
        return [board, win, lose, tie, turn, sts]
    }
    if (isDraw(board)){
        sts = 3;
        tie += 1;
        return [board, win, lose, tie, turn, sts]
    }
    turn = playerSwitch(turn)
    board = compMove(board)
    if (isWin(board, turn)){
        sts = 2;
        lose += 1;
        return [board, win, lose, tie, turn, sts]
    }
    if (isDraw(board)){
        sts = 3;
        tie += 1;
        return [board, win, lose, tie, turn, sts]
    }
    playerSwitch(turn)
    return [board, win, lose, tie, turn, sts]
}