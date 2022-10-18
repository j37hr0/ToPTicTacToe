const ticTacToeGame = function() {
    let board;
    let currentPlayer = "X";
    let squares = document.querySelectorAll("#gameboard .buttons");
    let restartBtn = document.getElementById("restart");
    let turnMessage = document.getElementById("turnMessage");
    let modal = document.getElementById("modal");
    let winnerMessage = document.getElementById("winnerMessage");

    //restart button functionality
    restartBtn.addEventListener('click', startGame)

    //add listener and handle click on each square
    function handleClick (e){
        squareArr = [...squares];
        let index = squareArr.indexOf(e.target);
        let box = squareArr[index];
        placeMarker(box, currentPlayer, index);
        let winner = checkIfWin();
        if (winner === "Tie"){
            displayWinner(winner);
            console.log(winner)
        }
        else if (winner == "X"){
            displayWinner("X");
            console.log(winner);
        }
        else if (winner == "O"){
            displayWinner("O");
            console.log(winner)
        }
        else {
        switchPlayers();
        }
    }

    //places current players marker
    function placeMarker(el, currentPlayer, index){
        el.innerText = currentPlayer;
        board[index] = currentPlayer;
        console.log(board);
    }

    //checks if there is a win, run after every click
    function checkIfWin() {
        let actualWinner;
        if ((board[0] === "X" && board[1] === "X" && board[2] === "X") || (board[3] === "X" && board[4] === "X" && board[5] === "X") || (board[6] === "X" && board[7] === "" && board[8] === "X") 
        || (board[0] === "X" && board[3] === "X" && board[6] === "X") || (board[1] === "X" && board[4] === "X" && board[7] === "X") || (board[2] === "X" && board[5] === "X" && board[8] === "X")
        || (board[0] === "X" && board[4] === "X" && board[8] === "X") || (board[6] === "X" && board[4] === "X" && board[2] === "X"))
        {
            actualWinner = "X";
        }
        else if ((board[0] === "O" && board[1] === "O" && board[2] === "O") || (board[3] === "O" && board[4] === "O" && board[5] === "O") || (board[6] === "O" && board[7] === "" && board[8] === "O") 
        || (board[0] === "O" && board[3] === "O" && board[6] === "O") || (board[1] === "O" && board[4] === "O" && board[7] === "O") || (board[2] === "O" && board[5] === "O" && board[8] === "O")
        || (board[0] === "O" && board[4] === "O" && board[8] === "O") || (board[6] === "O" && board[4] === "O" && board[2] === "O"))
        {
            actualWinner = "O";
        }
        else if (board[0] !== "" && board[1] !== "" && board[2] !== "" && board[3] !== "" && board[4] !== "" && board[5] !== "" && board[6] !== "" && board[7] !== "" &&
        board[8])
        {
            actualWinner = "Tie";
        }
        else {
            actualWinner = "";
        }
        return actualWinner;
    }
    // handles switching turns and players
    function switchPlayers(){
       if (currentPlayer === "X"){
        currentPlayer = "O";
        turnMessage.innerHTML = `It is ${currentPlayer}'s turn`;
       }
       else if (currentPlayer === "O"){
        currentPlayer = "X";
        turnMessage.innerHTML = `It is ${currentPlayer}'s turn`;
       }
    }

    //displays winner name or tie
    function displayWinner(winner){
        if (winner === "X"){
            winnerMessage.innerText = 'The winner is X';
            modal.style.display = "block";
        }
        else if (winner === "O"){
            winnerMessage.innerText = 'The winner is O';
            modal.style.display = "block";
        }
        else if (winner === "Tie"){
            winnerMessage.innerText = "It is a tie";
            modal.style.display = "block";
        }
    }

    //starts or restarts the game (resets board, etc)
    function startGame(){
        board = ['','','','','','','','','']
        squares.forEach(square => {
            modal.style.display = "none";
            square.removeEventListener('click', handleClick);
            square.innerHTML = "";
            square.addEventListener('click', handleClick, {once: true})
        })
    }
    console.log(squares);
    startGame();
} 

ticTacToeGame();