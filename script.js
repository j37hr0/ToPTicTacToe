//DOM
const gameboard = document.getElementById("gameboard")


//globals
var gameState = [0,0,0,0,0,0,0,0,0];
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


//player factory function
const createPlayer = (name, marker) => {
    return {name, marker}
}

//gameboard module
const gameBoard = (function() {
    return {
        display: function(state) {
            for (let i = 0; i < 9; i++){
                let block = document.getElementById(state[i]);
                if (state[i] === 1){
                    block.innerHTML = "X"
                }
                else if (state[i] === 2){
                    block.innerHTML = "O";
                }
                else if (state[i] === 0){
                }
        }
    },
    play: function(e) {
        if (game.activePlayer === game.playerOne){
            gameState[e] = 1;
            gameBoard.display(gameState);
            console.log(e)

        }
        else if (game.activePlayer === game.playerTwo) {
            gameState[e] = 2;
            gameBoard.display(gameState);

        }
    }
};
})();

//game object
const game = () => {
    const playerOne = createPlayer("player one", 1);
    const playerTwo = createPlayer("player Two", 2);
    let activePlayer = playerOne;
    let hasWon = false;

    return {activePlayer, hasWon}
}





gameBoard.display(gameState)


// add event listeners
for (let i = 0; i < 9; i++){
    let sqauare = document.getElementById(`${i}`);
    sqauare.addEventListener = ('click', gameBoard.play())
}


