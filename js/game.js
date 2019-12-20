const choiceStack = ['paper', 'rock', 'scissors'];
let computerScore = 0;
let playerScore = 0;
const userScore_p = document.getElementById("user-score");
const computerScore_p = document.getElementById("computer-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const result_p = document.querySelector(".result > p");

/* Event Listeners */

rock_div.addEventListener('click', function() {
    game("rock");
});
paper_div.addEventListener('click', function() {
    game("paper");
});
scissors_div.addEventListener('click', function() {
    game("scissors");
});

/* Generates computer's choice */

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];
    return computerChoice;
}

function win() {
    playerScore++;
    userScore_p.innerHTML = playerScore;
}

function lose() {
    computerScore++;
    computerScore_p.innerHTML = computerScore;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == undefined) {
        result_p.innerHTML = `Ready to Play!`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        win();
        result_p.innerHTML = `You Win! Rock beats Scissors`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        lose();
        result_p.innerHTML = `You Lose! Paper covers rock`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        lose();
        result_p.innerHTML = `You Lose! Scissors cut paper`; 
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        win();
        result_p.innerHTML = `You Win! Paper covers rock`;
    } else if (playerSelection == 'scissors' && computerSelection == "rock") {
        lose();
        result_p.innerHTML = `You Lose! Rocks beats Scissors`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        win();
        result_p.innerHTML = `You Win! Scissors beat paper`;
    } else  {
        result_p.innerHTML = `That was a draw. Try Again!`;
    }
}

function game(playerSelection) {
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);  
}
game();