const choiceStack = ['Paper', 'Rock', 'Scissors'];
let computerScore = 0;
let playerScore = 0;
const userScore_p = document.getElementById("user-score");
const computerScore_p = document.getElementById("computer-score");

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    return computerChoice;
}

function win() {
    playerScore++;
    userScore_p.innerHTML = playerScore;
    computerScore_p.innerHTML = computerScore;
}

function lose() {
    computerScore++;
    computerScore_p.innerHTML = computerScore;
    userScore_p.innerHTML = playerScore;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        win();
        return `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        lose();
        return `You Lose! Paper covers rock. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        lose();
        return `You Lose! Scissors cut paper. Score: ${playerScore} to ${computerScore}`; 
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        win();
        return `You Win! Paper covers rock. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        lose();
        return `You Lose! Rocks beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        win();
        return `You Win! Scissors beat paper. Score: ${playerScore} to ${computerScore}`;
    }
    else return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type: Rock, Paper, or Scissors')
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}
game();