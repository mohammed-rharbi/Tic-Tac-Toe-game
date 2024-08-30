document.addEventListener('DOMContentLoaded' , ()=>{


//creation of welcome title and button

let welcome_section = document.querySelector('#welcome_sec');
let img = document.createElement('img');
let welcome_title = document.createElement('h1');
let btn_div = document.createElement('div');
let start_button = document.createElement('button');


welcome_section.append(img , welcome_title , btn_div );
img.src = '/public/original.png';
img.className = 'logo';
welcome_title.className = 'welcome';
welcome_title.textContent = 'WELCOME PLAYER';
btn_div.className = 'start';
start_button.className = 'start_button'
start_button.textContent = 'START';
btn_div.appendChild(start_button);
start_button.onclick = ()=>{window.location.href = '/formPage.html';
}

//


let players_form = document.querySelector('form');




function sumbit_Players(e){

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
      let player1 = { id: player1ID , playerName: playerOne , score: 0 };  
  
  
      const player2ID = Date.now() + 1;
      let player2 = { id: player2ID, playerName: playerTwo, score: 0 };  
  
  
      playersInotStorage(player1 , player2)
      
   }
   
   document.getElementById('player_1').value = '';
   document.getElementById('player_2').value = '';
  

   location.href = '/Board.html';
}  


players_form.addEventListener('submit' , sumbit_Players);
players_form.removeEventListener('submit' , sumbit_Players);



function playersInotStorage(player1 , player2){

   localStorage.setItem('player1' , JSON.stringify(player1));
   localStorage.setItem('player2' , JSON.stringify(player2));   
}




})




