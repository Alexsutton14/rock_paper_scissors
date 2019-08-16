var playerScore = 0;
var computerScore = 0;
var currentPlayerChoice;
var currentComputerChoice;

//finds HTML elements to display results
const playerChoiceDisplay = document.getElementById("player-output");
const computerChoiceDisplay = document.getElementById("computer-output");
const resultDisplay = document.getElementById("result-text");
const playerScoreDisplay = document.getElementById("player-score-value");
const computerScoreDisplay = document.getElementById("computer-score-value");
const resetButton = document.getElementById("reset-button");
const winnerDisplay = document.getElementById("winner-display");

function computerChoice(){
    //Generate random number between 0 and 3
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
            return "scissors";
            break;
    }
}
function addPoint(winner){
    if(winner === "player"){
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        if(playerScore >= 5){
            console.log("You Win!");
            winnerDisplay.textContent = "You Win!";
            resetButton.style.visibility = "visible";
        }
    }
    if(winner === "computer"){
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        if(computerScore >= 5){
            console.log("Computer Wins!");
            winnerDisplay.textContent = "Computer Wins!";
            resetButton.style.visibility = "visible";
        }
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
        addPoint("player");
        return "You Win! " + rockWinDetails;
    } else if(playerChoice === "paper" && computerChoice === "rock"){
        addPoint("player");
        return "You Win! " + paperWinDetails;
    } else if(playerChoice === "scissors" && computerChoice === "paper"){
        addPoint("player");
        return "You Win! " + scissorsWinDetails;
    } else {
        switch(computerChoice){
            case "rock":
                addPoint("computer");
                return "You Lose! " + scissorsLossDetails;
                break;
            case "paper":
                addPoint("computer");
                return "You Lose! " + rockLossDetails;
                break;
            case "scissors":
                addPoint("computer");
                return "You Lose! " + paperLossDetails;
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
    resultDisplay.textContent = result;
}
function resetGame (){
    //resets all scores to zero and string values to null
    playerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    currentPlayerChoice = null;
    playerChoiceDisplay.textContent = currentPlayerChoice;
    computerScore = 0;
    computerScoreDisplay.textContent = computerScore;
    currentComputerChoice = null;
    computerChoiceDisplay.textContent = currentComputerChoice;
    resultDisplay.textContent = null;
    winnerDisplay.textContent = null;
    resetButton.style.visibility = "hidden";
}
const buttons = document.querySelectorAll("a");
buttons.forEach((a) => {
    if(a.id !== "reset-button"){
        a.addEventListener("click", function(){
            playGame(a.id);
          })
    }
})
resetButton.addEventListener("click", resetGame);