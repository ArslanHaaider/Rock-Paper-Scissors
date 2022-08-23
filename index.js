
// Created an Array of all the possible moves a user or Pc can make at their respective turns 

let gameMoves = ["Rock" , "Paper" , "Sicssor"]  


let userMove ;


// Will asign games Move from gameArray according to user selected number 

getuserMove = () => gameMoves[Number(prompt("Press 0 for Rock / 1 for Paper / 2 Scissors"))];




// Will get computers Move

getComputersMove = () => gameMoves[Math.floor(Math.random() * 3)];



//Defining Conditions of win and loss! 

if (getuserMove === "Rock" & getComputersMove === "Scissor" || getuserMove === "Paper" & getComputersMove === "Rock" || getuserMove === "Scissor" & getComputersMove =="Paper"){
    console.log("User wins")
}else if (getuserMove === getComputersMove){
    console.log ("Its Draw")
}else{
    console.log("Computer wins")    
}


