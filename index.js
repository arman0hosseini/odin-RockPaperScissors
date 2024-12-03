const options = document.querySelector(".player");


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

let myTurn = true;
function getHumanChoice() {
    let userChoice;
    options.addEventListener("click",
        function (e) {
            if (!myTurn) {
                console.log("It's not your turn.");
                return;
            }
            else {
                myTurn = false;
                let target = e.target;
                switch (target.id) {
                    case "rock":
                        userChoice = "rock";
                        break;
                    case "paper":
                        userChoice = "paper";
                        break;
                    case "scissors":
                        userChoice = "scissors";
                        break;
                    default:
                        userChoice = "rock";
                        break;
                }
            }
            return userChoice;
        }
    )
}

function playGame(rounds) {
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


    let humanScore = 0;
    let computerScore = 0;
    let counter = 1;
    while (counter <= rounds) {
        playRound(getHumanChoice(), getComputerChoice());
        counter++;
    }
    if (humanScore > computerScore) {
        console.log(`You Won!   User Score: ${humanScore}   Computer Score: ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
    }
    else if (humanScore < computerScore) {
        console.log(`You Lost!   User Score: ${humanScore}   Computer Score: ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
    }
    else {
        console.log("Meow");
        humanScore = 0;
        computerScore = 0;
    }
    myTurn = true;
}

playGame(5);    