function intialize(board, win, lose, tie, turn, sts){
    win = 0;
    lose = 0;
    tie = 0;
    sts = 0;
    turn = "Yours";
    board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
    console.log("initialized");
    return [board, win, lose, tie, turn, sts];
}

function uiUpdate(board, win, tie, lose, turn, sts){
    document.getElementById("win").innerHTML = `Win<br > ${win}`;
    document.getElementById("tie").innerHTML = `Draw<br > ${tie}`;
    document.getElementById("lose").innerHTML = `lose<br > ${lose}`;
    for (let i = 0; i < board.length; i++) {
        const imgElement = document.getElementById(`i${i}`);
        if (imgElement) {
            imgElement.src = boardUICondition(board[i]);
        }
    }
    if (sts === 1){
        document.getElementById("roundState").innerText = `You won`;
    } else if (sts === 2){
        document.getElementById("roundState").innerText = `Computer won`;
    } else if (sts === 3){
        document.getElementById("roundState").innerText = `Its a draw`;
    } else{
        document.getElementById("roundState").innerText = `${turn} Turn!`;
    }
    console.log("ui updated");
}

function isValid(board, move){
    if (board[move] === "E"){
        console.log("valid move");
        return true;
    } 
    console.log("invalid move");
    return false;
}

function isWin(board, turn) {
    let player;
    if (turn === "Yours"){
        player = "X";
    } else {
        player = "O";
    }
    return winCond.some(combo => combo.every(index => board[index] === "X"));
}

function isDraw(board){
    console.log("draw checked");
    return (!board.some(cell => cell === "E"));
}

function playerSwitch(turn){
    if (turn === "Yours"){
        return "Computer's";
    } else {
        return "Yours";
    }
}

function compMove(board){
    let move = -1;
    if (move === -1) {
        if (board[4] === "E") {
            move = 4;
        } else {
            do {
                move = Math.floor(Math.random() * 9);
            } while (!isValid(board, move));
        }
    }
    
    board[move] = "O";
    return board;
}

function reset(board, win, lose, tie, turn, sts){
    return intialize(board, win, lose, tie, turn, sts);
}

function replay(board, win, lose, tie, turn, sts){
    turn = "Yours";
    board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
    sts = 0;
    console.log("replay");
    return [board, win, lose, tie, turn, sts];
}

function boardUICondition(x){
    if (x === "O"){
        return "assets/images/comp.png";
    }
    else if (x === "X"){
        return "assets/images/player.png";
    }
    else{
        return ""; // Empty string for empty cells
    }
}

function playerCo(board, win, lose, tie, turn, sts, move){
    console.log(`Player move: ${move}`);
    console.log(`Board at move: ${board[move]}`);
    
    if (!isValid(board, move)){
        return [board, win, lose, tie, turn, sts];
    }
    
    console.log("Placing X");
    board[move] = "X";
    
    if (isWin(board, turn)){
        sts = 1;
        win += 1;
        console.log("Player won!");
        return [board, win, lose, tie, turn, sts];
    }
    
    if (isDraw(board)){
        sts = 3;
        tie += 1;
        console.log("Its a draw!");
        return [board, win, lose, tie, turn, sts];
    }
    
    // Switch to computer's turn
    turn = playerSwitch(turn);
    console.log(`Now it's ${turn} turn`);
    
    // Computer's move
    board = compMove(board);
    console.log(`Computer moved: ${board}`);
    
    // Check win after computer's move
    if (isWin(board, turn)){
        sts = 2;
        lose += 1;
        console.log("Computer won!");
        return [board, win, lose, tie, turn, sts];
    }
    
    // Check draw after computer's move
    if (isDraw(board)){
        sts = 3;
        tie += 1;
        console.log("Its a draw!");
        return [board, win, lose, tie, turn, sts];
    }
    
    // Switch back to player
    turn = playerSwitch(turn);
    console.log(`Back to ${turn} turn`);
    
    console.log(`Final: board=${board}, win=${win}, lose=${lose}, tie=${tie}, turn=${turn}, sts=${sts}`);
    return [board, win, lose, tie, turn, sts];
}