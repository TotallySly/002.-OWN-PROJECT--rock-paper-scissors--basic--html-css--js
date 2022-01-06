// Caching the ID Elements from the HTML
const compChoiceDisplay = document.getElementById("comp-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const compScoreDisplay = document.getElementById("comp-score");

// TODO
// Will need to change to class name if i plan to add more buttons. I.E GAME RULES/HARDER GAME (MAYBE)
//const possibleChoices = document.querySelectorAll("button");
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

  // TODO
  //Change to Font Awesome Icons
  playerChoiceDisplay.innerHTML = playerChoice;

  //Generate Computer Choice
  generateComputerChoice();
  checkResult();
}));

//Functions// 
// Generate Computer Choice

//TODO randNum generates random number 1 - 3. If playing harder game. Will need to generate more numbers and assign them.
function generateComputerChoice() {
  const randNum = Math.trunc(Math.random() * 3 + 1);
  console.log(randNum);

  // TODO Change string to maybe template literal to display Font Awesome Icons. Or Assign to variables. Need to test.
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


//BUG FIRST RESULT IS NOT ADDED TO THE SCORE. MUST FIX
//BUG SOME SCORES DO NOT UPDATE FIX
function checkResult() {
  if (compChoice === playerChoice) {
    result = "Draw!";
  } else if (compChoice === "rock" && playerChoice === "paper") {
    result = "Player Wins!";
    playerScoreDisplay.innerHTML = playerScore++;
  } else if (compChoice === "rock" && playerChoice === "scissors") {
    result = "Computer Wins!";
    compScoreDisplay.innerHTML = compScore++;
  } else if (compChoice === "scissors" && playerChoice === "paper") {
    result = "Computer Wins!";
    compScoreDisplay.innerHTML = compScore++;
  } else if (compChoice === "scissors" && playerChoice === "rock") {
    result = "Player Wins!";
    playerScoreDisplay.innerHTML = playerScore++;
  } else if (compChoice === "paper" && playerChoice === "scissors") {
    result = "Player Wins!";
    playerScoreDisplay.innerHTML = playerScore++;
  } else if (compChoice === "paper" && playerChoice === "rock") {
    result = "Computer Wins!";
    compScoreDisplay.innerHTML = compScore++;
  }
  
  //Display Result in HTML
  resultDisplay.innerHTML = result;
}


//TODO Score Function
//TODO RESET FUNCTION