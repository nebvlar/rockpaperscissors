//Naming variables to add events

//Buttons:
const btn = document.querySelectorAll(".btn"); //adds all of the option buttons 
const reset = document.querySelector(".reset"); //adds reset button

//Text boxes:
const userScore = document.querySelector(".playerScore"); //adds player score text 
const compScore = document.querySelector(".computerScore"); //adds computer score text
const roundResults = document.querySelector(".roundResults"); //adds result text box

//score variables
let computerScore = 0;
let playerScore = 0;

//setting the text into the boxes
compScore.textContent = `${computerScore}`; //updates the computer score as points are gained
userScore.textContent = `${playerScore}`; //updates the player score as points are gained
roundResults.textContent = "Choose an option to begin."; //Adds text into the round result box to begin with

//reset button 
reset.addEventListener('click', () => location.reload()); //When you click the reset button it refreshes

//computer random option generator
function computerPlay(){
    const choice = ["rock", "paper", "scissors"]; //Creates an array of the 3 choices
    const computerSelection = choice[Math.floor(Math.random() * choice.length)]; //chooses a random option from the array
    const img = document.querySelector(".computerChoice") //selects where the computer selection option image goes
    if (computerSelection == "rock"){
        img.src = "images/rock.png"  //Changes the image to rock if rock is generated
    } else if (computerSelection == "paper"){
        img.src = "images/paper.png" //Changes the image to paper if paper is generated
    } else if (computerSelection == "scissors"){
        img.src = "images/scissors.png" //changes the image to scissors if scissors is generated
    } return computerSelection //stops function and returns computerselection
}

//Playing a round
function playRound(playerSelection, computerSelection){
    playerSelection = btn.value //hopefully makes it so choosing a button returns its value and the value becomes the variable
    computerSelection = computerPlay(); //value of computerplay is computerselection
    if (playerSelection === computerSelection){ //In the event of a tie
        roundResults.textContent = "It's a tie!" //Prints the sentence to the roundresults box
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || //player chooses rock and computer chooses scissors)
    (playerSelection == "paper" && computerSelection == "rock") || //player chooses paper and computer chooses rock
    (playerSelection == "scissors" & computerSelection == "paper")){ //player chooses scissors and computer chooses paper
        playerScore = ++playerScore //players score goes up by one
        roundResults.textContent = `You win! ${playerSelection} beats ${computerSelection}!` //prints the choices and that the player wins to results
    } else if ((playerSelection == "rock" && computerSelection == "paper") || //player chooses rock and computer chooses paper
    (playerSelection == "paper" && computerSelection == "scissors") || //player chooses paper and computer chooses scissors
    (playerSelection == "scissors" && computerSelection == "rock")){ //player chooses scissors and computer chooses rock
        computerScore = ++computerScore //computer score goes up by one
        roundResults.textContent = `You lose! ${computerSelection} beats ${playerSelection}!` //prints the choices and that the player loses to results box
    } return roundResults.textContent //returns round results
}

//event listener to start the game
btn.forEach(button => {button.addEventListener('click', playRound)}); //when you click the button the playround function is called