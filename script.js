//DOM
const gameboard = document.getElementById("gameboard")


//player factory function
const createPlayer = (name, marker) => {
    return {name, marker}
}

//gameboard module
const gameBoard = (function() {
    // TODO add event listeners
    for (let i = 0; i < 9; i++){
    let square = document.getElementById(`${i}`);
    square.addEventListener('click', () => {
        game.gameState[square.id] = activePlayer.marker;
        gameBoard.display(gameState)
    }
}
    return {
        display: function(state) {
            for (let i = 0; i < 9; i++){
                let block = document.getElementById(state[i]);
                if (state[i] === 0){
                }
                else if (state[i] === 1){
                    block.innerHTML = "X"
                }
                else if (state[i] === 2){
                    block.innerHTML = "O";
                }
        }
    } 
};
})();

//game object
const game = () => {
    let gameState = [0,0,0,0,0,0,0,0,0];
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
    const playerOne = createPlayer("player one", 1);
    const playerTwo = createPlayer("player Two", 2);

    let activePlayer = playerOne;
    let hasWon = false;


}


displayBoard.display(gameState)
