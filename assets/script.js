/*jshint esversion: 6*/ 

//Was getting Validator Errors. https://stackoverflow.com/questions/42866159/arrow-function-syntax-is-only-available-in-es6-use-esversion-6 - Solution.

// Caching the ID Elements from the HTML
const compChoiceDisplay = document.getElementById("comp-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const compScoreDisplay = document.getElementById("comp-score");
const resetBtn = document.getElementById("reset-btn");
const overlay = document.querySelector("#overlay");
const possibleChoices = document.querySelectorAll(".game-btns");

//Global and Empty Variables
let playerScore = 0;
let compScore = 0;
let playerChoice;
let compChoice;
let result;

// Event Listeners to Open and Close the Modal
// https://www.youtube.com/watch?v=uUCpopjPZdI&ab_channel=codefoxx - JavaScript - How to Create a Pop-Up Modal ( Super Easy! ) (codefoxx)
document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overlay.style.display = "block";
});

document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overlay.style.display = "none";
});

// Event Listener to clear the game display, so the user can play again
resetBtn.addEventListener("click", (e) => {
    compChoiceDisplay.innerHTML = " ";
    playerChoiceDisplay.innerHTML = " ";
    resultDisplay.innerHTML = " ";
    playerScoreDisplay.innerHTML = playerScore;
    compScoreDisplay.innerHTML = compScore;
    location.reload();
});

// For each Button named possible choice, add an event listener when user clicks. When clicked, target the ID of the button and display this in Browser
// https://www.youtube.com/watch?v=RwFeg0cEZvQ&ab_channel=CodewithAniaKub%C3%B3w (Code with Ania Kubów)
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    checkResult();
}));

//Functions// 
// Generates computer Choice
function generateComputerChoice() {
    const randNum = Math.trunc(Math.random() * 3 + 1);
    console.log(randNum);

    if (randNum === 1) {
        compChoice = "🤘";
    } else if (randNum === 2) {
        compChoice = "🧻";
    } else if (randNum === 3) {
        compChoice = "✂";
    }
    compChoiceDisplay.innerHTML = compChoice;
}

// Checks the Result
function checkResult() {
    if (compChoice === playerChoice) {
        result = "Draw!";
    } else if (compChoice === "🤘" && playerChoice === "🧻") {
        result = "Player Wins!";
        playerScore++;
        playerScoreDisplay.innerHTML = `${playerScore}`;
    } else if (compChoice === "🤘" && playerChoice === "✂") {
        result = "Computer Wins!";
        compScore++;
        compScoreDisplay.innerHTML = `${compScore}`;
    } else if (compChoice === "✂" && playerChoice === "🧻") {
        result = "Computer Wins!";
        compScore++;
        compScoreDisplay.innerHTML = `${compScore}`;
    } else if (compChoice === "✂" && playerChoice === "🤘") {
        result = "Player Wins!";
        playerScore++;
        playerScoreDisplay.innerHTML = `${playerScore}`;
    } else if (compChoice === "🧻" && playerChoice === "✂") {
        result = "Player Wins!";
        playerScore++;
        playerScoreDisplay.innerHTML = `${playerScore}`;
    } else if (compChoice === "🧻" && playerChoice === "🤘") {
        result = "Computer Wins!";
        compScore++;
        compScoreDisplay.innerHTML = `${compScore}`;
    }
    resultDisplay.innerHTML = result;
}