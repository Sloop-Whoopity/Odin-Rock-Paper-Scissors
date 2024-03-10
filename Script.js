console.log("Hello World from the external file")

let computerSelection = "";
let playerWord = "";
let playerWins = false;
let playerScore = document.querySelector(".playerScore");
playerScore.textContent = 0;
let computerScore = document.querySelector(".computerScore");
computerScore.textContent = 0;
let tie = false;

const buttons = document.querySelector(".allButtons")

buttons.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.className) {
        case "rock":
            playerWord = "rock";
            playGame();
            break;
        case "paper":
            playerWord = "paper";
            playGame();
            break;
        case "scissors":
            playerWord = "scissors";
            playGame();
            break;
    }
});


function getComputerChoice() {
    let decision = Math.floor(Math.random() * 10); 
    console.log("decision", decision)

    if (decision >= 1 && decision < 4) {computerSelection = "Rock";
    } else if (decision >= 4 && decision < 7) {computerSelection = "Paper";
    } else  if (decision >= 7 && decision <= 9) {computerSelection = "Scissors";
    } else {getComputerChoice(); //Will run through console.log(computerChoice) twice because 
    // it goes through the function once, then completes the original function again.  
    }

    console.log(computerSelection)
    return computerSelection
}

function playRound() {
    tie = false;
    playerWins = false;
    let beginningLetter = playerWord.at(0);
    let slicedWord = playerWord.slice(1);
    let playerSelection = beginningLetter.toUpperCase() + slicedWord.toLowerCase();

    console.log("Conjoined Word", playerSelection)

    if (playerSelection === "Rock" && computerSelection === "Scissors") {playerWins = true;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {playerWins = true;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {playerWins = true;
    } else {playerWins = false}
    

    console.log("playerWins", playerWins)

    if (playerWins === true) {
        alert(`You Win! ${playerSelection} " beats " ${computerSelection}`);
        ++playerScore.textContent;
    } else if (playerWins === false && playerSelection === computerSelection) {
        tie = true, alert(`Tie! ${playerSelection} matches ${computerSelection}`);
    } else {
        alert(`You Lose! ${computerSelection} " beats " ${playerSelection}`);
        ++computerScore.textContent;
    }

    console.log("tie", tie)
    return tie
    }

function playGame() {
    
    getComputerChoice();
    playRound();

    
    if (+playerScore.textContent === 5) {
        playerScore.textContent = 5;
        alert("You have won the game");
        playAgain()
    } else if (+computerScore.textContent === 5){
        computerScore.textContent = 5;
        alert("You lose! The computer has won the game!");
        playAgain()
    }
}

function playAgain() {
    let rockButton = document.querySelector(".rock");
    let paperButton = document.querySelector(".paper");
    let scissorsButton = document.querySelector(".scissors");

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    const divContainer = document.createElement("div")
    const playAgainButton = document.createElement("button")
    playAgainButton.textContent = "Play Again?";
    buttons.appendChild(divContainer)
    divContainer.appendChild(playAgainButton)
    
    playAgainButton.addEventListener("click", () => {
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
        playAgainButton.remove(); 
    });

}
