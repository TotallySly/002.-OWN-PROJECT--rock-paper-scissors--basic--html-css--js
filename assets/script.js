//TODO INNER.HTML the Font AWESOME ICON for compter choice. Get element by ID and variable maybe?????? Copy and paste in a string does work.
//TODO INNER.HTML the Font Awsome Icon for Player Choice.
//TODO randNum generates random number 1 - 3. If playing harder game. Will need to generate more numbers and assign them. !!!!!! MAYBE !!!!!!!!!!!!!!


// Caching the ID Elements from the HTML
const compChoiceDisplay = document.getElementById("comp-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const compScoreDisplay = document.getElementById("comp-score");
const resetBtn = document.getElementById("reset-btn");
const overlay = document.querySelector("#overlay");

document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overlay.style.display = "block";
})

document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overlay.style.display = "none";
})


const possibleChoices = document.querySelectorAll(".play-btn");

// Empty variables for player and user choice.
let playerChoice;
let compChoice;
let result;


//Global Variables
let playerScore = 0;
let compScore = 0;



// For each Button named possible choice, add an event listener when user clicks. When clicked, target the ID of the button and display this in Browser
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice;

    //Generate Computer Choice
    generateComputerChoice();
    checkResult();

}));

// Resets Scores
resetBtn.addEventListener("click", (e) => {
    compChoiceDisplay.innerHTML = " ";
    playerChoiceDisplay.innerHTML = " ";
    resultDisplay.innerHTML = " ";
    playerScoreDisplay.innerHTML = "0";
    compScoreDisplay.innerHTML = "0";
})

//Functions// 
// Generate Computer Choice


function generateComputerChoice() {
    const randNum = Math.trunc(Math.random() * 3 + 1);
    console.log(randNum);

    if (randNum === 1) {
        compChoice = "rock";
    } else if (randNum === 2) {
        compChoice = "paper";
    } else if (randNum === 3) {
        compChoice = "scissors";
    }

    // Displays Computer Choice to the logo. Might need to change the compChoice variable name to display Font Awesome icons.
    compChoiceDisplay.innerHTML = compChoice;
}

// Check The Result


//BUG FIRST RESULT IS NOT ADDED TO THE SCORE. MUST FIX ----- FIXED
//BUG SOME SCORES DO NOT UPDATE FIX ----- FIXED
//BUG SOME SCORES GO UP IN INCREMENTS OF MORE THAN ONE.....
function checkResult() {
    if (compChoice === playerChoice) {
        result = "Draw!";
    } else if (compChoice === "rock" && playerChoice === "paper") {
        result = "Player Wins!";
        playerScore++
        playerScoreDisplay.innerHTML = `${playerScore}`;
    } else if (compChoice === "rock" && playerChoice === "scissors") {
        result = "Computer Wins!";
        compScore++
        compScoreDisplay.innerHTML = `${compScore}`;
    } else if (compChoice === "scissors" && playerChoice === "paper") {
        result = "Computer Wins!";
        compScore++
        compScoreDisplay.innerHTML = `${compScore}`;
    } else if (compChoice === "scissors" && playerChoice === "rock") {
        result = "Player Wins!";
        playerScore++
        playerScoreDisplay.innerHTML = `${playerScore}`;
    } else if (compChoice === "paper" && playerChoice === "scissors") {
        result = "Player Wins!";
        playerScore++
        playerScoreDisplay.innerHTML = `${playerScore}`;
    } else if (compChoice === "paper" && playerChoice === "rock") {
        result = "Computer Wins!";
        compScore++
        compScoreDisplay.innerHTML = `${compScore}`;
    }

    //Display Result in HTML
    resultDisplay.innerHTML = result;
}