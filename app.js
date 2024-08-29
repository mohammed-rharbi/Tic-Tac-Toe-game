

document.addEventListener('DOMContentLoaded',()=>{



//creation of welcome title and button 

let section = document.getElementById('welcome_sec');
section.innerHTML = 
`<h1 class="welcome">WELCOME PLAYER</h1>
<div class="start">
<button id="start_btn" onclick='rediructToFormPage()'>START</button>
</div>  
`
function rediructToFormPage(){
window.location.href = '/formPage.html';
}

document.getElementById('name_form').addEventListener('submit', (e)=>{

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

    const player2ID = Date.now();
    let player2 = { id: player1ID, playerName: playerTwo, score: [] };  

    storPlayers(player1 , player2)
 }
 







})






function storPlayers(player1 , player2){

    localStorage.setItem('player1' , JSON.stringify(player1));
    localStorage.setItem('player2' , JSON.stringify(player2));

}










});


