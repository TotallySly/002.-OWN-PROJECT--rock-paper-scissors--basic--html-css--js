const compChoiceDisplay = document.getElementById("comp-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");


// TODO
// Will need to change to class name if i plan to add more buttons. I.E GAME RULES/HARDER GAME (MAYBE)
const possibleChoices = document.querySelectorAll("button");


// Empty variables for player and user choice.
let playerChoice;
let compChoice;


// For each Button named possible choice, add an event listener when user clicks. When clicked, target the ID of the button and display this in Browser
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  playerChoice = e.target.id


  // TODO
  //Change to Font Awesome Icons
  playerChoiceDisplay.innerHTML = playerChoice

  //Generate Computer Choice
  generateComputerChoice();
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
  } else {
    compChoice = "scissors"
  }

  // Displays Computer Choice to the logo. Might need to change the compChoice variable name to display Font Awesome icons.
  compChoiceDisplay.innerHTML = compChoice;
}


