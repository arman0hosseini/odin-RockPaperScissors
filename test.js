const options = document.querySelector(".player");
const scoreboard = document.querySelector(".scoreboard");
const currentRound = document.querySelector(".current-round");
let userChoice;

options.addEventListener("click",
    function (e) {
        let target = e.target;
        userChoice = target.id;
        playRound(userChoice, getComputerChoice());
    }
)


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
let userScore = 0;
let computerScore = 0;
function playRound(userChoice, computerChoice) {

    if ((userChoice === "rock") && (computerChoice === "rock")) {
        currentRound.textContent = ("Draw!");
    }
    else if ((userChoice === "rock") && (computerChoice === "paper")) {
        currentRound.textContent = ("You Lost! Paper beats Rock");
        computerScore++
    }
    else if ((userChoice === "rock") && (computerChoice === "scissors")) {
        currentRound.textContent = ("You Won! Rock beats Scissors");
        userScore++

    }
    else if ((userChoice === "paper") && (computerChoice === "rock")) {
        currentRound.textContent = ("You Won! Paper beats Rock");
        userScore++

    }
    else if ((userChoice === "paper") && (computerChoice === "paper")) {
        currentRound.textContent = ("Draw!");
    }
    else if ((userChoice === "paper") && (computerChoice === "scissors")) {
        currentRound.textContent = ("You Lost! Scissors beats Paper");
        computerScore++

    }
    else if ((userChoice === "scissors") && (computerChoice === "rock")) {
        currentRound.textContent = ("You Lost! Scissors beats Rock");
        computerScore++

    }
    else if ((userChoice === "scissors") && (computerChoice === "paper")) {
        currentRound.textContent = ("You Won! Scissors beats Paper");
        userScore++

    }
    else if ((userChoice === "scissors") && (computerChoice === "scissors")) {
        currentRound.textContent = ("Draw!");
    }
    scoreboard.textContent = `User Score: ${userScore} and Computer Score: ${computerScore}`;
    if (userScore >= 5) {
        scoreboard.textContent = ("You Won the Game!");
        currentRound.textContent = "";
        userScore = 0; computerScore = 0;
    }
    else if (computerScore >= 5) {
        scoreboard.textContent = ("You Lost the Game!");
        currentRound.textContent = "Vomp Vomp!";
        userScore = 0;
        computerScore = 0;
    }
}

