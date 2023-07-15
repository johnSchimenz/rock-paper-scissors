// No user interface for now.  Just in console
// User inputs rock, paper, or scissors.  Computer randomly chooses rock, paper, or scissors.
// Output is either "win", "lose", or "draw"
// Win, lose, and draw conditions based on rock, paper, scissors rules

// Computer randomly choses rock, paper, or scissors
function getComputerChoice()
{
    const min = 0;
    const max = 3;
    return Math.floor(Math.random() * (max - min) + min);
}

// User inputs rock, paper, or scissors
function playRound(playerSelection, computerSelection)
{
    
}


    // If none of the 3 chosen, prompt to pick again
// Results
    // If win, state "winner"
    // If lose, state "loser"
    // If tie, state "draw"