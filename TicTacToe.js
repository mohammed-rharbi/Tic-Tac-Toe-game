document.addEventListener('DOMContentLoaded', ()=>{


const player1_data = JSON.parse(localStorage.getItem('player1'));
const player1Name = player1_data.playerName;
const player1Score = player1_data.score;


const player2_data = JSON.parse(localStorage.getItem('player2'));
const player2Name = player2_data.playerName;
const player2Score = player2_data.score;



let restartbtn = document.createElement('button');
restartbtn.textContent = 'RESTART';
restartbtn.className = 'resBtn';



let winCard = document.createElement('div');
let winBtn = document.createElement('button');
let wintitle = document.createElement('h4');
wintitle.className = 'wintitle';
wintitle.textContent ='';
winBtn.className = 'winbtn';
winBtn.textContent = 'Back';
winCard.className = 'winCard';
winCard.append(wintitle,winBtn);

winBtn.addEventListener('click', function hid(){

    winCard.style.display = 'none';
    document.body.classList.remove('dimmed');
    reset()
});


let O_turn = document.createElement('div');
let X_turn = document.createElement('div');
O_turn.textContent = 'O';
X_turn.textContent = 'X';
X_turn.className = 'X_turn';
O_turn.className = 'O_turn';



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


score_board.append(X_turn,player__1_div , player1_score , span_dach, player2_score , player__2_div ,O_turn );

header.appendChild(score_board);



let mainBoard = document.createElement('div');
let boardTitle = document.createElement('h1');
boardTitle.textContent =  'TIC TAC TOE';
mainBoard.className = 'mainBord';
boardTitle.className = 'boardTitle';
Boardsection.append( header,boardTitle,restartbtn,mainBoard,winCard);


if(window.location.pathname === '/Board.html'){

document.body.appendChild(Boardsection)

}


let turn = 'x';

let cells = Array(400).fill(null).map(()=> Array(20).fill(null));

for(let i = 1 ; i <= 400 ; i++){

    let cell = document.createElement('div');
    cell.className = 'boardCell';
    cell.setAttribute('id', i)
    mainBoard.appendChild(cell);


    cell.addEventListener('click', cellClick)
 
}

restartbtn.addEventListener('click' , reset);





function cellClick(e){


    const cellID = parseInt(e.target.id) - 1 ;
    const row = Math.floor(cellID / 20);
    const col = cellID % 20 ;


    if(!cells[row][col]){

        cells[row][col] = turn ;
        e.target.textContent = turn; 
        e.target.style.backgroundColor = turn === 'x' ? 'rgba(160,0,93,1)' : 'rgba(0,87,160,1)';

        if(checkwin(row , col)){
            if(turn === 'x'){
                winCard.style.display = 'block';
                wintitle.textContent = `${player1Name} WINS`;
                document.body.className = 'dimmed';
                updateScore('x');               
            }else if(turn === 'o'){
                winCard.style.display = 'block';
                wintitle.textContent = `${player2Name} WINS`;
                document.body.className = 'dimmed';
                updateScore('o');
            }
        }

        turn = turn === 'x' ? 'o' : 'x';
        O_turn.style.display = turn === 'o' ? 'block' : 'none';
        X_turn.style.display = turn === 'x' ? 'block' : 'none';
        e.target.removeEventListener('click' , cellClick);
    }
}



function checkwin(row , col){

    return (

        checkDerc(row , col , 1 , 0) ||
        checkDerc(row , col , 0 , 1) ||
        checkDerc(row , col , 1 , 1) ||
        checkDerc(row , col , 1 , -1) 
    )

}


function checkDerc(row , col , rowD , colD){

    let count = 1;
    count += checkCount(row , col , rowD , colD);
    count += checkCount(row , col , -rowD , -colD);

    return count >= 5 ;

}


function checkCount(row , col , rowD , colD){

    let count = 0;
    let r = row + rowD ;
    let c = col + colD ;
    while( r >= 0 && r < 20 && c >= 0 && c < 20 && cells[r][c] === turn ){
        
        count ++;
        r += rowD;
        c += colD;
    }

    return count;
}



function reset(){

    const cell = document.querySelectorAll('.boardCell');
    cell.forEach(cell => {
        
        cell.textContent = '';
        cell.style.backgroundColor = '';
        cell.addEventListener('click', cellClick);
    });
    cells = Array(400).fill(null).map(()=> Array(20).fill(null));
    turn = 'x';
    X_turn.style.display = 'block';
    O_turn.style.display = 'none';

}


function updateScore(win){

    let winner = win === 'x' ? 'player1' : 'player2';
    
    let playerScore = JSON.parse(localStorage.getItem(winner));

    playerScore.score += 1;

    localStorage.setItem(winner , JSON.stringify(playerScore));
}



})

