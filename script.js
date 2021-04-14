const buttons = document.querySelectorAll('.btn');
const resultText = document.querySelector('.results');
const reset = document.querySelector('.reset')

let playerScore = 0;
let computerScore = 0;
let round = 0;

function countRounds(){
    round += 1;
    return round;
}
function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    const computerIcon = document.querySelector('.computerChoice');

    if (computerSelection == "rock"){
        computerIcon.src="images/rock.png";
    } else if (computerSelection == "paper"){
        computerIcon.src="images/paper.png";
    } else if (computerSelection == "scissors"){
        computerIcon.src="images/scissors.png";
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    switch (true){
        case (playerSelection === computerSelection):
            resultText.textContent = "It's a tie!"
            compScore.textContent = `${computerScore}`;
            userScore.textContent = `${playerScore}`;
                break;
            case (playerSelection === "rock" && computerSelection == "scissors"):
            case (playerSelection === "paper" && computerSelection === "rock"):
            case (playerSelection === "scissors" && computerSelection === "paper"):
                playerScore = ++playerScore    
                compScore.textContent = `${computerScore}`;
                userScore.textContent = `${playerScore}`;
                resultText.textContent = `You win! ${playerSelection} beats ${computerSelection}!`
                break;
            case (playerSelection == "rock" && computerSelection == "paper"):
            case (playerSelection == "paper" && computerSelection == "scissors"):
            case (playerSelection == "scissors" && computerSelection == "rock"):
                computerScore = ++computerScore
                compScore.textContent = `${computerScore}`;
                userScore.textContent = `${playerScore}`;
               resultText.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`
                break;
   
}
}
const compScore = document.querySelector(".computerScore");
const userScore = document.querySelector(".playerScore");
compScore.textContent = `${computerScore}`;
userScore.textContent = `${playerScore}`;

function endGame(playerScore, computerScore){
    if (playerScore === 5 || computerScore === 5){
        buttons.forEach((button) => {
            button.setAttribute('disabled', '');
        })
        if (playerScore > computerScore){
            resultText.textContent = "Congratulations!"
        } else {
            resultText.textContent = "Do better next time!"
        } button.reset.style.visibility = 'visible';
    } reset.style.visibility = "visible";
}
function resetGame(){
    reset.addEventListener('click', () => {
        window.location.reload();
    })
};
function playGame(){
    let playerSelection;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (buttons.value = "rock"){
                playerSelection = "rock"
            } else if (buttons.value = "paper"){
                playerSelection = "paper"
            } else {
                playerSelection = "scissors"
            }
            countRounds();
            playRound(playerSelection, computerPlay());
            endGame(playerScore, computerScore);
            resetGame();
        })
    })
}
playGame();