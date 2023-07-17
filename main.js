// No user interface for now.  Just in console
// User inputs ROCK, PAPER, or SCISSORS.  Computer randomly chooses ROCK, PAPER, or SCISSORS.
// Output is either "win", "lose", or "draw"
// Win, lose, and draw conditions based on ROCK, PAPER, SCISSORS rules

// Variable declarations
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 0;
let getNumberOfRounds = 0;

// Choose number of rounds
do
{
    getNumberOfRounds = prompt("Number of rounds.  Type in an integer");
}
while (getNumberOfRounds <= 0);

// Player chooses ROCK, PAPER or SCISSORS
function getPlayerChoice()
{
    let playerChoice = "default";
    do
    {
        playerChoice = prompt("Do you have what it takes to win against the computer?!?!  Type in ROCK, PAPER, or SCISSORS:");
        playerChoice = playerChoice.trim();
        playerChoice = playerChoice.toUpperCase();
        console.log(`You choose ${playerChoice}`);
    }
    while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS");
    return playerChoice;
}

// Computer randomly chooses ROCK, PAPER, or SCISSORS
function getComputerChoice()
{
    const min = 0;
    const max = 3;
    let computerRandomNumber = Math.floor(Math.random() * (max - min) + min);

    if (computerRandomNumber === 0)
    {
        console.log(`Computer chooses ROCK`);
        return "ROCK";
    }
    else if (computerRandomNumber === 1)
    {
        console.log(`Computer chooses PAPER`);
        return "PAPER";
    }
    else if (computerRandomNumber === 2)
    {
        console.log(`Computer chooses SCISSORS`);
        return "SCISSORS";
    }
    else{
        return "ERROR!!! Check on getComputerChoice function";
    }
}

// User inputs ROCK, PAPER, or SCISSORS
function playRound(playerSelection, computerSelection)
{
    // Result 1: You win
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER"))
    {
        console.log(`You win the round!  ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        return "win";
    }

    // Result 2: You lose
    else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK"))
    {
        console.log(`You lose the round!  ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        return "loss";

    }

    // Result 3: You tie
    else if (playerSelection === computerSelection)
    {
        console.log(`You tie the round!`);
        tieScore++;
        return "tie";
    }
    // Result 4: Invalid entry
    else 
    {
        return `Try again.  ${playerSelection} is not a valid choice.  You must choose either ROCK, PAPER, or SCISSORS.`
    }
}

function game() {
    for (let i = 0; i < getNumberOfRounds; i++)
    {
        round++;
        console.log(`ROUND ${round} - Your score: ${playerScore} vs. Computer score: ${computerScore}`);

        playRound(getPlayerChoice(), getComputerChoice());
    }

    if (playerScore > computerScore)
    {
        return `You win the match ${playerScore} to ${computerScore} with ${tieScore} ties!`;
    }

    else if (playerScore < computerScore)
    {
        return `You lose the match ${playerScore} to ${computerScore} with ${tieScore} ties.`;
    }

    else if (playerScore === computerScore)
    {
        return `No one wins, as the score is ${playerScore} to ${computerScore} with ${tieScore} ties.`;
    }

    else
    {
        return `Something went wrong.  Check your functions`;
    }
}

console.log(game());
