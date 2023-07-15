// No user interface for now.  Just in console
// User inputs rock, paper, or scissors.  Computer randomly chooses rock, paper, or scissors.
// Output is either "win", "lose", or "draw"
// Win, lose, and draw conditions based on rock, paper, scissors rules

// User inputs rock, paper, or scissors

function getComputerChoice()
{
    const min = 0;
    const max = 3;
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getComputerChoice());

    // If none of the 3 chosen, prompt to pick again
// Computer randomly choses rock, paper, or scissors
// Results
    // If win, state "winner"
    // If lose, state "loser"
    // If tie, state "draw"