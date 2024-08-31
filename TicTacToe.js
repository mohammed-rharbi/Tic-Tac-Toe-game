


let Boardsection = document.createElement('section');
Boardsection.id = 'board_page';
Boardsection.className = 'board_page';

let header = document.createElement('header');
header.className = 'score_hader';

let score_board = document.createElement('div');
score_board.className = 'score_board';

let  player__1_div = document.createElement('div');
let player1_score = document.createElement('span');
player__1_div.className = 'player__1';
player1_score.textContent = '0';

let span_dach = document.createElement('div');
span_dach.textContent = '_';


let  player__2_div = document.createElement('div');
let player2_score = document.createElement('span');
player__2_div.className = 'player__2';
player2_score.textContent = '0';


score_board.append(player__1_div , player1_score , span_dach, player2_score , player__2_div );

header.appendChild(score_board);



let board_page = document.getElementById('board_page');
let mainBoard = document.createElement('div');
let boardTitle = document.createElement('h1');
boardTitle.textContent =  'TIC TAC TOE';
mainBoard.className = 'mainBord';
boardTitle.className = 'boardTitle';
Boardsection.append( header,boardTitle,mainBoard);


if(window.location.pathname === '/Board.html'){

document.body.appendChild(Boardsection)

}


for(let i = 1 ; i <= 400 ; i++){

    let cell = document.createElement('div');
    cell.className = 'boardCell';
    cell.setAttribute('id', i)
    mainBoard.appendChild(cell);
}




