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
        console.log(winner)
        if (winner){
            displayWinner(winner);
        }
        switchPlayers();
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
        const winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ];

        winConditions.forEach(condition =>{
            if(board[winConditions[0]] && board[condition[0]]===board[condition[1]] && board[condition[0]] === board[condition[2]]){
            actualWinner = board[condition[0]];
        }
    })
        return actualWinner = actualWinner? actualWinner : board.includes('')? null: 'Tie'
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
        if (winner === "X" || winner === "O"){
            winnerMessage.innerText = `The winner is ${actualWinner}`;
            modal.style.display = "block;"
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