const player1_data = JSON.parse(localStorage.getItem('player1'));
const player1Name = player1_data.playerName;
const player1Score = player1_data.score;


const player2_data = JSON.parse(localStorage.getItem('player2'));
const player2Name = player2_data.playerName;
const player2Score = player2_data.score;





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
player__1_div.textContent = player1Name;
player1_score.textContent = player1Score;

let span_dach = document.createElement('div');
span_dach.textContent = '_';


let  player__2_div = document.createElement('div');
let player2_score = document.createElement('span');
player__2_div.className = 'player__2';
player__2_div.textContent = player2Name;
player2_score.textContent = player2Score;


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




