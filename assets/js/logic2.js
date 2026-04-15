function main(move){
    if(!isValid(move)) {
        return
    }
    board[move] = "X"
    if(isWin("X")){
        score.win += 1;
        scoreSave();
        end = 1;
        uiLoad();
        frezzBoard()
        return board;
    }
    if(isDraw()){
        score.tie += 1;
        scoreSave();
        end = 3;
        uiLoad();
        frezzBoard()
        return board;
    }
    compMove();
    if(isWin("O")){
        score.lose += 1;
        scoreSave();
        end = 2;
        uiLoad();
        frezzBoard()
        return board;
    }
    if(isDraw()){
        score.tie += 1;
        scoreSave();
        end = 3;
        uiLoad();
        frezzBoard()
        return board;
    }
    uiLoad()
    return
}

function isValid(move){
    return (board[move] === "")
}
function isWin(x){
    return winCond.some(combo => combo.every(index => board[index] === x));
}
function isDraw(){
    return (!board.some(cell => cell === ""));
}
function scoreSave(){
    localStorage.setItem("score", JSON.stringify(score));
}

function compMove(){
    let move = 0;
    let factor = -1;
    for(i = 0; i < 9; i++) {
        if(!isValid(i)) {
            continue;
        }
        move = i;
        board[i] = "O"
        if(isWin("O")){
            board[i] = "O";
            factor = i;
        }
        board[i] = "X"
        if(isWin("X")){
            board[i] = "O";
            factor = i;
        }
        board[i] = ""
    }
    if (!(factor === -1)){
        move = factor;
    }
    isValid(4) ? board[4] = "O" : board[move] = "O";
    return board
}
function frezzBoard(){
    for(i = 0; i < 9; i++){
        if(board[i]===""){
            board[i]="E"
        }
    }
}