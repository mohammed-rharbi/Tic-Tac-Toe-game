


let board_page = document.getElementById('board_page');
let mainBoard = document.createElement('div');
let boardTitle = document.createElement('h1');
boardTitle.textContent =  'TEC TAC TOE';
mainBoard.className = 'mainBord';
boardTitle.className = 'boardTitle';
board_page.append(boardTitle,mainBoard);



for(let i = 1 ; i <= 400 ; i++){

    let cell = document.createElement('div');
    cell.className = 'boardCell';

    mainBoard.appendChild(cell);
}


