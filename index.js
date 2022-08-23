
// Created an Array of all the possible moves a user or Pc can make at their respective turns 

let gameMoves = ["Rock" , "Paper" , "Sicssor"]  


let userMove ;


// Will asign games Move from gameArray according to user selected number 

getuserMove = () => gameMoves[Number(prompt("Press 0 for Rock / 1 for Paper / 2 Scissors"))];




// Will get computers Move

getComputersMove = () => gameMoves[Math.floor(Math.random() * 3)];





// Main game function 

function Game() {
    let game = true;
    while (game) {
        let userMove = getuserMove();
        let computerMove = getComputersMove();
        console.log(userMove)
        console.log(computerMove)
        //Defining Conditions of win and loss! 
        if (userMove === "Rock" & computerMove === "Scissor" || userMove === "Paper" & computerMove === "Rock" || userMove === "Scissor" & computerMove =="Paper"){
            console.log(`User Wins  ${userMove} beats ${computerMove}!`)
            game = false
        }else if (userMove === computerMove){
            console.log ("Its Draw")
            continue
        }else{
            console.log(`Computer Wins ${computerMove} beats ${userMove}!`)
            game = false    
        }

    }
}

Game()