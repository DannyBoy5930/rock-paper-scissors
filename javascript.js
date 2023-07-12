
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let result = choice[(Math.floor(Math.random() * choice.length))]

    console.log("Computer choice: " + result);

    return result;
}

function playRound(playerSelection, computerSelection) {

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    let result;

    if 
    (playerSelection === computerSelection) {
        result = "Tie GAME! Play Again"
    } else if (
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors")) {
        result = "You Win!"
    } else {
        result = "YOU LOSE!"
    }

    return result;
}

function game() {

    let index = 5;
    for (let i = 0; i < index; i++) {
        let playerSelection = prompt("RPS. Pick your poison: ");
        console.log("Player choice: " + playerSelection)
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));    }
}

game();