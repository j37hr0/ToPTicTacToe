const ticTacToeGame = function() {
    let board;
    let currentPlayer = "X";
    let squares = document.querySelectorAll("#gameboard .buttons");
    let restartBtn = document.getElementById("restart");
    let turnMessage = document.getElementById("turnMessage");
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
    //restart button functionality
    restartBtn.addEventListener('click', startGame)

    //add listener and handle click on each square
    function handleClick (e){
        squareArr = [...squares];
        let index = squareArr.indexOf(e.target);
        let box = squareArr[index];
        placeMarker(box, currentPlayer, index);

        if (checkIfWin()){
            //display a winner if there is one
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
    function checkIfWin(board, winConditions) {

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
    function displayWinner(){

    }


    //starts or restarts the game (resets board, etc)
    function startGame(){
        board = ['','','','','','','','','']
        squares.forEach(square => {
            square.removeEventListener('click', handleClick);
            square.innerHTML = "";
            square.addEventListener('click', handleClick, {once: true})
        })
    }
    console.log(squares);
    startGame();
} 

ticTacToeGame();