//DOM
const gameboard = document.getElementById("gameboard")

//globals
let gameState = [0,0,0,1,2,2,1,2,0];
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
        display: function(gameState) 
        {
            for (let i = 0; i < gameState.length; i++){
                let block = document.querySelectorAll('.gameboard p');
                console.log(block)
                let newArr = Array.from(block)
                console.log(newArr)
                // if (gameState[i] == 1){
                //     block.innerText = "X";
                //     console.log(block);
                // }
                // else if (gameState[i] == 2){
                //     block.innerText = "O";
                // }
                // else {
                //     block.innerText = "";
                // }
        }
    },
    // play: function(event) {
    //     if (game.activePlayer === game.playerOne){
    //         let index = event.target.dataset.array;
    //         gameState[index] = 1;
    //         gameBoard.display(gameState);
    //         console.log(gameState[index])
    //     }
    //     else if (game.activePlayer === game.playerTwo) {
    //         let index = event.target.dataset.array;
    //         gameState[index] = 2;
    //         gameBoard.display(gameState);
    //         console.log(gameState[index])
    //     }
    // }
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








// add event listeners
for (let i = 0; i < 9; i++){
    let sqauare = document.getElementById(`${i}`);
    sqauare.addEventListener = ('click', gameBoard.play);

}


gameBoard.display(gameState, gameboard)