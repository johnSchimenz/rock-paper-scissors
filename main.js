// No user interface for now.  Just in console
// User inputs rock, paper, or scissors.  Computer randomly chooses rock, paper, or scissors.
// Output is either "win", "lose", or "draw"
// Win, lose, and draw conditions based on rock, paper, scissors rules

// Player chooses rock, paper or scissors


function getPlayerChoice()
{
    let dataValidation = 0;
    let playerChoice = "default";
    do
    {
        playerChoice = prompt("Do you have what it takes to win against the computer?!?!  Type in ROCK, PAPER, or SCISSORS!");
        playerChoice = playerChoice.trim();
        playerChoice = playerChoice.toLowerCase();
        let uppercaseFirstLetter = playerChoice.slice(0, 1);
        uppercaseFirstLetter = uppercaseFirstLetter.toUpperCase();
        playerChoice = playerChoice.replace(playerChoice.charAt(0), uppercaseFirstLetter);
        console.log(`Player chooses ${playerChoice}`);
    }
    while (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors");
    return playerChoice;
}

// Computer randomly chooses Rock, Paper, or Scissors
function getComputerChoice()
{
    const min = 0;
    const max = 3;
    let computerRandomNumber = Math.floor(Math.random() * (max - min) + min);

    if (computerRandomNumber === 0)
    {
        console.log(`Computer chooses Rock`);
        return "Rock";
    }
    else if (computerRandomNumber === 1)
    {
        console.log(`Computer chooses Paper`);
        return "Paper";
    }
    else if (computerRandomNumber === 2)
    {
        console.log(`Computer chooses Scissors`);
        return "Scissors";
    }
    else{
        return "ERROR!!! Check on getComputerChoice function";
    }
}

// User inputs rock, paper, or scissors
function playRound(playerSelection, computerSelection)
{
    // Result 1: You win
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper"))
    {
        return `You win!  ${playerSelection} beats ${computerSelection}`;
    }

    // Result 2: You lose
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock"))
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
        return `Try again.  ${playerSelection} is not a valid choice.  You must choose either rock, paper, or scissors.`
    }
}

function game() {};

console.log(playRound(getPlayerChoice(), getComputerChoice()));
