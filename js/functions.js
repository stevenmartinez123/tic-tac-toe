function Player(name) {
    return {
        name
    };
};

(function gameBoard() {
    var game = new Array(9);
    var board = document.querySelector('.gameboard');
    for (let i = 0; i < game.length; i++) {
        let div = document.createElement('div');
        div.className = 'gameboard-div';
        div.id = `boardID-${i+1}`;
        board.appendChild(div);
        div.textContent = `${i + 1}`;
    }
})();

