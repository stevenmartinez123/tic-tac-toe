
// factory function to create a player object
function Player(name) {
    return {
        name, 
        turn: true,
        winner: true
    };
};
//instantiates player one and two, creates an array to hold tictactoe results
var playerOne;
var playerTwo;
const game = new Array(9);

//IIFE to start game, takes players names from form and displays gameboard
(function startGame() {
    let startBtn = document.querySelector('#startGameBtn');
    startBtn.addEventListener('click', function(){
        let playerOneName = document.querySelector('#playerOne').value;
        playerOneName = playerOneName.length > 0 ? playerOneName : 'Player One';
        let playerTwoName = document.querySelector('#playerTwo').value;
        playerTwoName = playerTwoName.length > 0 ? playerTwoName : 'Player Two';

        playerOne = Player(playerOneName);
        playerTwo = Player(playerTwoName);

        let gameBoardContainer = document.querySelector('#gameBoardContainer');
        let nameContainer = document.querySelector('#playerNameContainer');

        gameBoardContainer.style.display = 'flex';
        nameContainer.style.display = 'none';
        event.preventDefault();
    });

})();

//IIFE to load gameboard on to the screen 
(function populateGameBoard() {
    let board = document.querySelector('.gameboard');
    for (let i = 0; i < game.length; i++) {
        let div = document.createElement('div');
        div.className = 'gameboard-div';
        div.id = `boardID-${i+1}`;
        board.appendChild(div);
        div.addEventListener('click', XorO)
    }
})();

//function to display X or O on div and adds result to array
function XorO() {
    if (this.textContent.toString().length > 0) {
        return;
    }

    let index = this.id.toString().substring(8);

    if (playerOne.turn == true) {
        this.textContent = 'X';
        game[index - 1] = 'X';
        this.style.backgroundColor = '#F99273'; 
        playerOne.turn = false;
        winCheck(game[index - 1]);
    } else {
        this.textContent = 'O';
        game[index - 1] = 'O';
        this.style.backgroundColor = '#61AAB3'; 
        playerOne.turn = true;
        winCheck(game[index - 1]);
    }

};

//checks each choice to see if there is a winning result
function winCheck(letter) {

    if  ((game[0] == letter && game[1] == letter && game[2] == letter) || //horizontal win 1st row
    (game[3] == letter && game[4] ==  letter && game[5] == letter) ||  //horizontal win 2nd row
    (game[6] == letter && game[7] == letter && game[8] == letter) || //horizontal win 3rd row
    (game[0] == letter && game[3] == letter && game[6] == letter) || //vertical win first row left side
    (game[1] == letter && game[4] == letter && game[7] == letter) || //vertical win center
    (game[2] == letter && game[5] == letter && game[8] == letter) || //vertical win third row right side
    (game[0] == letter && game[4] == letter && game[8] == letter) || //diagnol win left
    (game[2] == letter && game[4] == letter && game[6] == letter)) { //diagnol win right        
        gameOver(letter);
    } else if (!game.includes(undefined)) { //if the array is full then the game will end in draw 
        letter = 'draw';
        gameOver(letter);
    }
};

//displays that the game is over in a new div 
function gameOver(letter) {
    let gameBoardContainer = document.querySelector('#gameBoardContainer');
    let container = document.querySelector('#gameOverContainer')
    let gameOver = document.querySelector('.gameOver');
    let heading = document.createElement('h1');
    let button = document.createElement('button');
    button.id = 'playAgainBtn';
    heading.id = 'gameOverHeading';
    gameOver.appendChild(heading);
    button.textContent = 'Play Again';
    gameOver.appendChild(button);
    if (letter == 'X') {
        heading.textContent = `${playerOne.name} Wins!`;
    } else if (letter == 'O') {
        heading.textContent = `${playerTwo.name} Wins!`;
    } else if (letter == 'draw') {
        heading.textContent = 'DRAW!';
    }
        gameBoardContainer.style.display = 'none';
        container.style.display = 'flex';
    button.addEventListener('click', function(){
        location.reload();
    });
};