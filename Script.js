console.log("Hello World from the external file")

let computerSelection = "";
let playerWord = prompt("Do you pick rock, paper, or scissors?", "");

function getComputerChoice() {
    let decision = Math.floor(Math.random() * 10); 
    console.log("decision", decision)

    if (decision >= 1 && decision < 4) {computerSelection = "Rock";
    } else if (decision >= 4 && decision < 7) {computerSelection = "Paper";
    } else  if (decision >= 7 && decision <= 9) {computerSelection = "Scissors";
    } else {getComputerChoice(); //Will run through console.log(computerChoice) twice because it goes through the function once, then completes the original function again.  
    }

    console.log(computerSelection)
    return computerSelection
}

function executeGame() {
    let playerWins = false;
    let beginningLetter = playerWord.at(0);
    let slicedWord = playerWord.slice(1);
    let playerSelection = beginningLetter.toUpperCase() + slicedWord.toLowerCase();
    console.log("Conjoined Word", playerSelection)
    if (playerSelection === "rock" && computerSelection === "scissors") {playerWins = true;
    } else if (playerSelection === "paper" && computerSelection === "rock") {playerWins = true;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {playerWins = true;
    } else {playerWins = false}
    

    console.log("playerWins", playerWins)

    if (playerWins === true) {alert(`You Win! ${playerSelection} " beats " ${computerSelection}`);
    } else if (playerWins === false && playerSelection === computerSelection) {alert(`Tie! ${playerSelection} matches ${computerSelection}`);
    } else {alert(`You Lose! ${computerSelection} " beats " ${playerSelection}`);
    }

}

