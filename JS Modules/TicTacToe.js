// Tic Tac Toe Module
const TicTacToe = (function () {
    // Initialize Board and Players
    let _Board = [];
    const _player1 = {name: 'Player1', shape: 'X'};
    const _player2 = {name: 'Player2', shape: 'O'};
    let _currentPlayer = _player1;
    // private functions
    const _renderBoard = () => {
        let index = 0;
        document.querySelectorAll('.square').forEach(square => {
            square.innerText = _Board[index];
            index++;
        });
    }
    function _conditionCheck (boardValue) {
        return (boardValue === _currentPlayer.shape);
    }
    function _tieCheck (boardValue) {
        return (boardValue != ' ');
    }
    const _checkBoard = () => {
        const top = [_Board[0], _Board[1], _Board[2]];
        const middleAcross = [_Board[3], _Board[4], _Board[5]];
        const bottom = [_Board[6], _Board[7], _Board[8]];
        const left = [_Board[0], _Board[3], _Board[6]];
        const middle = [_Board[1], _Board[4], _Board[7]];
        const right = [_Board[2], _Board[5], _Board[8]];
        const diagonalLeft = [_Board[0], _Board[4], _Board[8]];
        const diagonalRight = [_Board[2], _Board[4], _Board[6]];
        const winConditions = [top, middleAcross, bottom, left, middle, right, diagonalLeft, diagonalRight];
        let winner = false;
        winConditions.forEach(condition => {
            if (condition.every(_conditionCheck)) {
                winner = true;
            }            
        });
        if (winner) {
            document.querySelector('.console').innerText = `Game Over! ${_currentPlayer.name} is the winner!`;
        } else if (_Board.every(_tieCheck)) {
            document.querySelector('.console').innerText = 'Tie!';
        } else {
            if (_currentPlayer === _player1){
                _currentPlayer = _player2;
            } else {
                _currentPlayer = _player1;
            }
            document.querySelector('.console').innerText = `${_currentPlayer.name}, it is your turn!`;
        }
    }
    // public functions
    const resetBoard = () => {
        _Board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        _currentPlayer = _player1;
        document.querySelector('.console').innerText = `Starting new game. ${_currentPlayer.name}, it is your turn!`;
        _renderBoard();
    }
    const Play = (position) => {
        if (_Board[position] == ' '){
            _Board[position] = _currentPlayer.shape;
            _renderBoard();
            _checkBoard();
        }
    }
    const changeName = (playerNumber, newName) => {
        if (playerNumber === 1){
            _player1.name = newName;
            document.querySelector('.console').innerText = `Player 1's new name is ${newName}!`;
        } else if (playerNumber === 2){
            _player2.name = newName;
            document.querySelector('.console').innerText = `Player 2's new name is ${newName}!`;
        } else {
            document.querySelector('.console').innerText = 'Invalid Player Number. Usage:\nTicTacToe.changeName(1, "Buzz LightYear")';
        }
    }
    return {Play, resetBoard, changeName}
})();