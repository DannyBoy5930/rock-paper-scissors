
const choice_button = document.querySelectorAll(".choice");
const rock_button = document.querySelector("#rock-button");
const paper_button = document.querySelector("#paper-button");
const scissors_button = document.querySelector("#scissors-button");

const roundsText = document.querySelector(".round-text")

const scores = document.querySelector(".scores");
const resultText = document.querySelector(".result-text");
const reset_button = document.querySelector(".play-again");

let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let result = choice[(Math.floor(Math.random() * choice.length))]

    return result;
}

function roundCount() {
    round++;
    roundsText.innerText = `Round: ${round}`;
    return round;
}

function playRound(playerSelection, computerSelection) {
    let result;

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result = "Tie GAME! Play Again"
        resultText.innerText = `You chose ${playerSelection} whilst the Computer chose ${computerSelection}. TIE!`
    } else if ((playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors")) {
        playerScore += 1;
        result = "You Win!"
        resultText.innerText = `You chose ${playerSelection} whilst the Computer chose ${computerSelection}. YOU WIN!`
    } else {
        computerScore += 1;
        result = "YOU LOSE!"
        resultText.innerText = `You chose ${playerSelection} whilst the Computer chose ${computerSelection}. YOU LOSE!`
    }
    console.log(result);
    scores.innerText = `Your Score: ${playerScore} | Computer Score: ${computerScore}`;
    return result;
}

function resetGame() {
  reset_button.addEventListener("click", () => {
    window.location.reload();
  });
}

function endGame(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    choice_button.forEach((choice) => {
      choice.setAttribute('disabled', '');
      choice.classList.add('disabled-button', 'opacity');
    });

    const finishText = document.querySelector(".finish");
    if (playerScore > computerScore) {
      finishText.innerText = "You won! You saved humanity!"
    } else {
      finishText.innerText = "You lost! You humanity is doomed!"
    }
    
    reset_button.style.visibility = 'visible';
  }
}

function playGame() {
    let playerSelection;
    choice_button.forEach((choice) => {
      choice.addEventListener('click', () => {
        if (choice.classList.contains('rock-btn')) {
          playerSelection = 'rock';
          console.log(1);
        } else if (choice.classList.contains('paper-btn')) {
          playerSelection = 'paper';
          console.log(2);
        } else {
          playerSelection = 'scissors';
          console.log(3);
        }
        roundCount();
        let computerSelection;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        endGame(playerScore, computerScore);
        resetGame();
      });
    });
  }

playGame();