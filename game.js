var playerScore = 0;
var computerScore = 0;
var currentPlayerChoice;
var currentComputerChoice;

//finds HTML elements to display results
const playerChoiceDisplay = document.getElementById("player-output");
const computerChoiceDisplay = document.getElementById("computer-output");
const resultDisplay = document.getElementById("result-text");
const playerScoreDisplay = document.getElementById("player-score-value");
const computerScoreDisplay = document.getElementById("computer-score-display");

function computerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:
            currentComputerChoice = capitaliseChoice("rock");
            return "rock";
            break;
        case 1:
            currentComputerChoice = capitaliseChoice("paper");
            return "paper";
            break;
        case 2:
            currentComputerChoice = capitaliseChoice("scissors");
            return "scissors";
            break;
        default:
            console.log("Error in computerChoice");
            break;
    }
}
function addPoint(){
    playerScore++
    if(playerScore >= 5){
        console.log("You Win!");
    }
}
function decideWinner(playerChoice, computerChoice){
    const rockWinDetails = "Rock blunts Scissors!";
    const paperWinDetails = "Paper covers Rock!";
    const scissorsWinDetails = "Scissors cuts Paper!";
    const rockLossDetails = "Rock is covered by Paper.";
    const paperLossDetails = "Paper is cut by Scissors.";
    const scissorsLossDetails = "Scissors are blunted by Rock";

    playerChoiceDisplay.textContent = currentPlayerChoice;
    console.log(currentComputerChoice);
    computerChoiceDisplay.textContent = currentComputerChoice;

    if(playerChoice === computerChoice){
        return "It's a draw!";
    } else if(playerChoice === "rock" && computerChoice === "scissors"){
        addPoint();
        return "You Win! " + rockWinDetails;
    } else if(playerChoice === "paper" && computerChoice === "rock"){
        addPoint();
        return "You Win! " + paperWinDetails;
    } else if(playerChoice === "scissors" && computerChoice === "paper"){
        addPoint();
        return "You Win! " + scissorsWinDetails;
    } else {
        switch(computerChoice){
            case "rock":
                playerScore = 0;
                return "You Lose! " + rockLossDetails;
                break;
            case "paper":
                playerScore = 0;
                return "You Lose! " + paperLossDetails;
                break;
            case "scissors":
                playerScore = 0;
                return "You Lose! " + scissorsLossDetails;
                break;
        }
    }
}
function capitaliseChoice(input){
    switch(input){
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            console.log("Error in capitaliseChoice");
            break;
    }
}
function playGame (buttonInput){
    let input = buttonInput;
    currentPlayerChoice = capitaliseChoice(input);
    let result = decideWinner(input, computerChoice());
    console.log(result);
}
const buttons = document.querySelectorAll("a");
buttons.forEach((a) => {
a.addEventListener('click', function(){
    playGame(a.id);
  })
})