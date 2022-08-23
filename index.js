
// Created an Array of all the possible moves a user or Pc can make at their respective turns 

let gameMoves = ["Rock" , "Paper" , "Sicssor"]  


let userMove ;


// Will asign games Move from gameArray according to user selected number 

function getuserMove(){
    let validNumber =  Number(prompt("Press 0 for Rock \n1 for Paper \n2 Scissors"))
    while (validNumber <0 || validNumber > 2){
        validNumber = Number(prompt( " Enter a valid number \n Press 0 for Rock \n1 for Paper\n2 Scissors"))
    }
    return gameMoves[validNumber]
}




// Will get computers Move

getComputersMove = () => gameMoves[Math.floor(Math.random() * 3)]

// Main game function 

function Game() {
    let computerWins = 0;
    let userWins = 0;

    // A for loop to play game four times  

    for (let i = 0 ; i <5 ; i++){
        let round = true
        while (round) {
            let userMove = getuserMove();
            let computerMove = getComputersMove();
            console.log(userMove)
            console.log(computerMove)
            //Defining Conditions of win and loss! 
            if (userMove === "Rock" & computerMove === "Scissor" || userMove === "Paper" & computerMove === "Rock" || userMove === "Scissor" & computerMove =="Paper"){
                console.log(`User Wins  ${userMove} beats ${computerMove}`)
                userWins += 1;
                round = false
            }else if (userMove === computerMove){
                console.log ("Its Draw")
                continue
            }else{
                console.log(`Computer Wins ${computerMove} beats ${userMove}`)
                computerWins += 1
                round = false    
            }
    
        }
    }
    // Declaring the winner of five round game 
    if (computerWins > userWins){
        console.log(`Computer wins with  ${computerWins} \n User with ${userWins} `)
    }else{
        console.log(`User wins with  ${userWins} \n Computer with ${computerWins} `)

    }
}
Game()