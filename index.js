function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper or Scissors?", getComputerChoice());
    return userChoice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice} and Computer chose ${computerChoice}`)

    if ((humanChoice === "rock") && (computerChoice === "rock")) {
        console.log("Draw!");
    }
    else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        console.log("You Lose! Paper beats Rock");
        computerScore++
    }
    else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        console.log("You Won! Rock beats Scissors");
        humanScore++
    }
    else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        console.log("You Won! Paper beats Rock");
        humanScore++
    }
    else if ((humanChoice === "paper") && (computerChoice === "paper")) {
        console.log("Draw!");
    }
    else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        console.log("You Lose! Scissors beats Paper");
        computerScore++
    }
    else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        console.log("You Lose! Scissors beats Rock");
        computerScore++
    }
    else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        console.log("You Won! Scissors beats Paper");
        humanScore++
    }
    else if ((humanChoice === "scissors") && (computerChoice === "scissors")) {
        console.log("Draw!");
    }
}

playRound(humanChoice, computerChoice);