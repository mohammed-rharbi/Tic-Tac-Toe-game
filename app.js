document.addEventListener('DOMContentLoaded' , ()=>{


//creation of welcome title and button

if(window.location.pathname === '/index.html' || window.location.pathname === '/'){

   let welcome_section = document.createElement('section');

   welcome_section.className = 'welcome_sec';
   document.body.appendChild(welcome_section);
   
let img = document.createElement('img');
let welcome_title = document.createElement('h1');
let btn_div = document.createElement('div');
let start_button = document.createElement('button');
img.src = '/public/original.png';
img.className = 'logo';
welcome_title.className = 'welcome';
welcome_title.textContent = 'WELCOME PLAYER';
btn_div.className = 'start';
start_button.className = 'start_button'
start_button.textContent = 'START';
welcome_section.append(img , welcome_title , btn_div );
btn_div.appendChild(start_button);
start_button.onclick = ()=>{window.location.href = '/formPage.html';
}

}
//




   let formSection = document.createElement('section');
   formSection.className = 'fromPage';
   formSection.id = 'fromPage';


   let Form =  document.createElement('form');
   Form.id = 'name_form';

   let mainDiv = document.createElement('div');
   mainDiv.className = 'input-group';

   let div1 = document.createElement('div');
   div1.className = 'player1';
   let label1 = document.createElement('label');
   let input1 = document.createElement('input');
   let error1 = document.createElement('p');
   error1.textContent = 'please provide a user name';
   error1.className = 'error';
   label1.textContent = 'player 1'
   input1.id = 'player_1';
   input1.setAttribute('type','text');
   input1.setAttribute('placeholder','Enter your');


   let div2 = document.createElement('div');
   div2.className = 'player2';
   let label2 = document.createElement('label');
   let input2 = document.createElement('input');
   let error2 = document.createElement('p');
   error2.textContent = 'please provide a user name';
   error2.className = 'error';
   label2.textContent = 'player 2'
   input2.id = 'player_2';
   input2.setAttribute('type','text');
   input2.setAttribute('placeholder','Enter your');

   let okButton = document.createElement('button');
   okButton.textContent = 'OK';
   okButton.type = 'submit';


   div1.append(label1 , input1 , error1);
   div2.append(label2 , input2 , error2);

   mainDiv.append(div1 , div2);

   Form.append(mainDiv , okButton);

   formSection.appendChild(Form);

  if(window.location.pathname === '/formPage.html'){
   document.body.appendChild(formSection); 
}




function sumbit_Players(e){

   e.preventDefault();

   let playerOne = input1.value.trim();   
   let playerTwo = input2.value.trim();   
  
   if(!playerOne){
      error1.style.display = 'block';
   }
   if(!playerTwo){
      error2.style.display = 'block';
   }
  
   if(playerOne && playerTwo){
  
      const player1ID = Date.now();
      let player1 = { id: player1ID , playerName: playerOne , score: 0 };  
  
  
      const player2ID = Date.now() + 1;
      let player2 = { id: player2ID, playerName: playerTwo, score: 0 };  
  
  
      playersInotStorage(player1 , player2)
      location.href = '/Board.html';

      Form.removeEventListener('click', sumbit_Players);
   }
   
   input1.value = '';
   input2.value = '';
  
}  


Form.addEventListener('submit' , sumbit_Players);


function playersInotStorage(player1 , player2){

   localStorage.setItem('player1' , JSON.stringify(player1));
   localStorage.setItem('player2' , JSON.stringify(player2));   
}




})




