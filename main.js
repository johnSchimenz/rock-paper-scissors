// No user interface for now.  Just in console
// User inputs ROCK, PAPER, or SCISSORS.  Computer randomly chooses ROCK, PAPER, or SCISSORS.
// Output is either "win", "lose", or "draw"
// Win, lose, and draw conditions based on ROCK, PAPER, SCISSORS rules

// Global variables
let playerScore = 0;
let computerScore = 0;
let round = 0;

// Player chooses ROCK, PAPER or SCISSORS
function getPlayerChoice()
{
    let playerChoice = "default";
    do
    {
        playerChoice = prompt("Do you have what it takes to win against the computer?!?!  Type in ROCK, PAPER, or SCISSORS!");
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
        return `You win!  ${playerSelection} beats ${computerSelection}`;
    }

    // Result 2: You lose
    else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK"))
    {
        return `You lose!  ${computerSelection} beats ${playerSelection}`;

    }

    // Result 3: You tie
    else if (playerSelection === computerSelection)
    {
        return `You tie!`;
    }
    // Result 4: Invalid entry
    else 
    {
        return `Try again.  ${playerSelection} is not a valid choice.  You must choose either ROCK, PAPER, or SCISSORS.`
    }
}

function game() {
    round++;
    console.log(round);
    console.log()

    playRound(getPlayerChoice(), getComputerChoice());

    if ()




};

console.log(playRound(getPlayerChoice(), getComputerChoice()));
