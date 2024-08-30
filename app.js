

//creation of welcome title and button


let section = document.getElementById('welcome_sec');
section.innerHTML = 
`
<img src="/public/original.png" class="logo" alt="tic tac toe">
<h1 class="welcome">WELCOME PLAYER</h1>
<div class="start">
<button id="start_btn" onclick="rediructToFormPage()">START</button>
</div>  
`


function rediructToFormPage(){
window.location.href = '/formPage.html';
}

let formi = document.getElementById('name_form');

formi.addEventListener('submit', (e)=>{

    e.preventDefault();

 let playerOne = document.getElementById('player_1').value.trim();   
 let playerTwo = document.getElementById('player_2').value.trim();   

 if(!playerOne){
    document.getElementById('player1Error').style.display = 'block';
 }
 if(!playerTwo){
    document.getElementById('player2Error').style.display = 'block';
 }

 if(playerOne && playerTwo){

    const player1ID = Date.now();
    let player1 = { id: player1ID , playerName: playerOne , score: [] };  
    localStorage.setItem('player1' , JSON.stringify(player1));


    const player2ID = Date.now() + 1;
    let player2 = { id: player2ID, playerName: playerTwo, score: [] };  
    localStorage.setItem('player2' , JSON.stringify(player2));


 }
 







})












