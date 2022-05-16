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
    } else {
        this.textContent = 'O';
        game[index - 1] = 'O';
        this.style.backgroundColor = '#61AAB3'; 
        playerOne.turn = true;
    }

    winCheck();
};

function winCheck() {
    
};


