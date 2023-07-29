// NOTES: You may need to get rid of some console.log statements, depending on what you want your results to be.

// Variable declarations - DONE
let playerScore = 0;
let computerScore = 0;
let round = 0;
let getNumberOfRounds = 0;
let playerChoice = "playerDefault";
let computerChoice = "computerDefault";

// Choose number of rounds - DONE
do
{
    getNumberOfRounds = Math.round(prompt("Number of rounds.  Type in an integer"));
}
while (getNumberOfRounds <= 0);

// Player chooses ROCK, PAPER or SCISSORS - DONE
function getPlayerChoice(btn)
{
    playerChoice = btn.getAttribute("id");
    playerChoice = playerChoice.toUpperCase();

    getComputerChoice();

    playRound(playerChoice, computerChoice);

    return playerChoice;
}

// Computer randomly chooses ROCK, PAPER, or SCISSORS - DONE
function getComputerChoice()
{
    const min = 0;
    const max = 3;
    let computerRandomNumber = Math.floor(Math.random() * (max - min) + min);

    if (computerRandomNumber === 0)
    {
        return computerChoice = "ROCK";
    }
    else if (computerRandomNumber === 1)
    {
        return computerChoice = "PAPER";
    }
    else if (computerRandomNumber === 2)
    {
        return computerChoice = "SCISSORS";
    }
}

// One round of ROCK, PAPER, SCISSORS is played - DONE
function playRound(playerSelection, computerSelection)
{
    // Result 1: You win
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER"))
    {
        round++;
        let roundValue = document.querySelector("#round");
        roundValue.innerText = round;
        
        playerScore++;

        let playerValue = document.querySelector("#playerScore");
        playerValue.innerText = playerScore;

        checkFinalResult();

        return "win";
    }

    // Result 2: You lose
    else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK"))
    {
        round++;
        let roundValue = document.querySelector("#round");
        roundValue.innerText = round;
        
        computerScore++;

        let computerValue = document.querySelector("#computerScore");
        computerValue.innerText = computerScore;

        checkFinalResult();

        return "loss";

    }

    // Result 3: You tie
    else if (playerSelection === computerSelection)
    {
        round++;
        let roundValue = document.querySelector("#round");
        roundValue.innerText = round;
        
        checkFinalResult();

        return "tie";
    }
    // Result 4: Invalid entry
    else 
    {
        return `Try again.  ${playerSelection} is not a valid choice.  You must choose either ROCK, PAPER, or SCISSORS.`;
    }
}

function checkFinalResult()
{
    if (round === getNumberOfRounds)
    {
        let statementValue = document.querySelector("#statement");

        if (playerScore > computerScore)
        {
            let blurb = `You win the match ${playerScore} to ${computerScore}!`;
            statementValue.innerText = blurb;
        }

        else if (playerScore < computerScore)
        {
            let blurb = `You lose the match ${playerScore} to ${computerScore}.`;
            statementValue.innerText = blurb;
        }

        else if (playerScore === computerScore)
        {
            let blurb = `No one wins, as the score is ${playerScore} to ${computerScore}.`;
            statementValue.innerText = blurb;
        }
    }
}


/*
// Function that loops through the entire match
function game() {
    for (let i = 0; i < getNumberOfRounds; i++)
    {
        round++;
        let roundValue = document.querySelector("#round");
        roundValue.innerText = round;
        
    }

    if (playerScore > computerScore)
    {
        playerScore++;
        return `You win the match ${playerScore} to ${computerScore}!`;
    }

    else if (playerScore < computerScore)
    {
        computerScore++;
        return `You lose the match ${playerScore} to ${computerScore}.`;
    }

    else if (playerScore === computerScore)
    {
        return `No one wins, as the score is ${playerScore} to ${computerScore}.`;
    }

    else
    {
        return `Something went wrong.  Check your functions`;
    }
}
*/