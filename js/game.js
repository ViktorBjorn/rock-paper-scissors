const choiceStack = ['Paper', 'Rock', 'Scissors'];
let computerScore = 0;
let playerScore = 0;
const userScore_p = document.getElementById("user-score");
const computerScore_p = document.getElementById("computer-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const result_div = document.querySelector(".result");


rock_div.addEventListener('click', function() {
    game("rock");
});
paper_div.addEventListener('click', function() {
    game("paper");
});
scissors_div.addEventListener('click', function() {
    game("scissors");
});

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
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        win();
        result_div.innerHTML = `You Win! Rock beats Scissors`;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        lose();
        result_div.innerHTML = `You Lose! Paper covers rock`;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        lose();
        result_div.innerHTML = `You Lose! Scissors cut paper`; 
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        win();
        result_div.innerHTML = `You Win! Paper covers rock`;
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        lose();
        result_div.innerHTML = `You Lose! Rocks beats Scissors`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        win();
        result_div.innerHTML = `You Win! Scissors beat paper`;
    }
    else result_div.innerHTML = `That was a draw. Try Again!`;
}

function game(playerSelection) {
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);  
}
game();