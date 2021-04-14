const userScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".computerScore");
const roundResults = document.querySelector(".results");

let computerScore = 0;
let playerScore = 0;
compScore.innerHTML = `${computerScore}`
userScore.innerHTML = `${playerScore}`

const btn = document.querySelectorAll(".btn");
const reset = document.querySelector(".reset");

reset.addEventListener('click', () => location.reload());
btn.forEach(button => {button.addEventListener('click', getPlayerChoice)});

function playRound(playerChoice, computerSelection){ 
    if ((playerChoice == "rock" && computerSelection == "rock") || 
    (playerChoice == "paper" && computerSelection == "paper") ||
    (playerChoice == "scissors" && computerSelection == "scissors")){
    roundResults.innerHTML = "It's a tie!"
    } else if ((playerChoice == "rock" && computerSelection == "scissors") || 
                (playerChoice == "paper" && computerSelection == "rock") || 
                (playerChoice == "scissors" && computerSelection == "paper")){
                   playerScore = ++playerScore;
                    roundResults.innerHTML  = `You win! ${playerSelection} beats ${computerSelection}!`
                } else if ((playerChoice == "rock" && computerSelection == "paper") || 
                            (playerChoice == "paper" && computerSelection == "scissors") || 
                            (playerChoice == "scissors" && computerSelection == "rock")){
                                computerScore = ++computerScore;
                                roundResults.innerHTML  = `You lose! ${computerSelection} beats ${playerSelection}!`
                            }
                            isWin();
                        } 


function computerPlay(){
    const choice = ["rock", "paper", "scissors"];
    const computerSelection = choice[Math.floor(Math.random() * choice.length)];
    const img = document.querySelector(".computerChoice");

    if (computerSelection == "rock"){
        img.src = "images/rock.png";
    } else if (computerSelection == "paper"){
        img.src = "images/paper.png";
    } else if (computerSelection == "scissors"){
        img.src = "images/scissors.png"
    } return computerSelection
}

function isWin(){
    if (playerScore === 5){
        roundResults.innerHTML  = "Congratulations!"

    } else if (computerScore === 5){
        roundResults.innerHTML  = "Better luck next time!"
    } 
}

function getPlayerChoice(e){
    let playerChoice = (e.button.value)
    playRound(playerChoice, computerPlay());
}    


