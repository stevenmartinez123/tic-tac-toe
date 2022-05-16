function Player(name) {
    return {
        name, 
        turn: true,
        winner: true
    };
};

const playerOne = Player('Bob');
const playerTwo = Player('Jim');
const game = new Array(9);

(function populateGameBoard() {
    var board = document.querySelector('.gameboard');
    for (let i = 0; i < game.length; i++) {
        let div = document.createElement('div');
        div.className = 'gameboard-div';
        div.id = `boardID-${i+1}`;
        board.appendChild(div);
        div.addEventListener('click', XorO)
    }
})();


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

function winCheck(letter) {

    if  ((game[0] == letter && game[1] == letter && game[2] == letter) || //horizontal win 1st row
    (game[3] == letter && game[4] ==  letter && game[5] == letter) ||  //horizontal win 2nd row
    (game[6] == letter && game[7] == letter && game[8] == letter) || //horizontal win 3rd row
    (game[0] == letter && game[3] == letter && game[6] == letter) || //vertical win first row left side
    (game[1] == letter && game[4] == letter && game[7] == letter) || //vertical win center
    (game[2] == letter && game[5] == letter && game[8] == letter) || //vertical win third row right side
    (game[0] == letter && game[4] == letter && game[8] == letter) || //diagnol win left
    (game[2] == letter && game[4] == letter && game[6] == letter)) { //diagnol win right

        let board = document.querySelector('.gameboard');
        board.style.transition = '1s';
        board.style.opacity = 0;
        gameOver(letter);
    } 
};

function gameOver(letter) {
    
};


