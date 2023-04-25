// Created an Array of all the possible moves a user or Pc can make at their respective turns

let gameMoves = ["Rock", "Paper", "Sicssor"];

let userMove;


// Will asign games Move from gameArray according to user selected number
userImage = document.querySelector('.userMoveImg');
computerImage = document.querySelector('.computersMoveImg');

function getuserMove() {
  switch(this.classList[1]){
    case 'rock':
      userMove = "Rock";
      userImage.innerHTML = "<img src='./images/rock-svgrepo-com.svg' alt='rock'>"
      break;
    case 'paper':
      userMove = "Paper";
      userImage.innerHTML = "<img src='./images/paper-svgrepo-com.svg' alt='rock'>"
      break;
    case 'scissors':
      userMove = "Scissor";
      userImage.innerHTML = "<img src='./images/scissors-svgrepo-com.svg' alt='rock'>"
      return ;
      break;
    default:
  }
}

const playButtons  = document.querySelectorAll('.userMove');
playButtons.forEach(element => {element.addEventListener('click',getuserMove)
});


// Will get computers Move

getComputersMove = () => gameMoves[Math.floor(Math.random() * 3)];

// Main game function to play game 
Results = document.querySelector('.results');
let userWinscounter = 0;
let computerWinsCounter = 0;
let continues = true;

function resultCheck(){
  if (userWinscounter === 5){
    Results.innerHTML = "<button class='playAgain'>Game Over 😎😍 You Won! Play Again</button>"
    PlayAgain = document.querySelector('.playAgain');
    PlayAgain.addEventListener('click',()=>{location.reload()});
    userWinscounter = 0;
    computerWinsCounter = 0;
    playButtons.forEach(element => {element.disabled = true
  }
);}
  else if(computerWinsCounter === 5){

    Results.innerHTML = "<button class='playAgain'>Game Over 😭 😱 You Lost to the Computer! Play Again</button>"
    PlayAgain = document.querySelector('.playAgain');
    PlayAgain.addEventListener('click',()=>{location.reload()});
    userWinscounter = 0;
    computerWinsCounter = 0;
    playButtons.forEach(element => {element.disabled = true
  }
);}
}


function playGame(){
  gameInfo = document.querySelector('.gameInfo');
  
  let computerMove = getComputersMove();

  //WHILE LOOP WHICH STOPS AFTER a PLAYER WON 5 TIMES
  switch(computerMove){
    case 'Rock':
        computerImage.innerHTML = "<img src='./images/rock-svgrepo-com.svg' alt='rock'>";
      if(userMove === "Rock"){
        Results.textContent =  "Draw";
        gameInfo.textContent = `User Score: ${userWinscounter} Computer Score: ${computerWinsCounter}`;
        resultCheck();
      }else if(userMove === "Paper"){
        userWinscounter ++;
        Results.textContent = "You Win";
        gameInfo.textContent = `User Score: ${userWinscounter} Computer Score: ${computerWinsCounter}`;
        resultCheck();
      }else{
        computerWinsCounter ++;
        Results.textContent = "You Lose";
        gameInfo.textContent = `User Score: ${userWinscounter} Computer Score: ${computerWinsCounter}`;
        resultCheck();
        
        
      }
      break;
    case 'Paper':
      computerImage.innerHTML = "<img src='./images/paper-svgrepo-com.svg' alt='rock'>";
      if(userMove === "Rock"){
        computerWinsCounter ++;
        Results.textContent =  "You Lose";
        gameInfo.textContent = `User Score: ${userWinscounter} Computer Score: ${computerWinsCounter}`;
        resultCheck();
      }else if(userMove === "Paper"){
        Results.textContent = "Draw";
      }else{
        userWinscounter ++;
        Results.textContent =  "You Win";
        gameInfo.textContent = `User Score: ${userWinscounter} Computer Score: ${computerWinsCounter}`;
        resultCheck();

      }
      break;
    case 'Scissor':
      computerImage.innerHTML = "<img src='./images/scissors-svgrepo-com.svg' alt='rock'>";
      if(userMove === "Rock"){
        userWinscounter ++;
        Results.textContent =  "You Win";
        gameInfo.textContent = `User Score: ${userWinscounter} Computer Score: ${computerWinsCounter}`;
        resultCheck();
        
      }else if(userMove === "Paper"){
        computerWinsCounter ++;
        Results.textContent =  "You Lose";
        gameInfo.textContent = `User Score: ${userWinscounter} Computer Score: ${computerWinsCounter}`;
        resultCheck();
      }else{
        Results.textContent =  "Draw";
        resultCheck();
        
      }
      break;
    default:
  }
}
playButtons.forEach(element => {element.addEventListener('click',playGame)
});

PlayAgain = document.querySelector('.playAgain');

PlayAgain.addEventListener('click',()=>{location.reload()});