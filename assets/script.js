const compChoiceDisplay = document.getElementById("comp-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");

// TODO
// Will need to change to class name if i plan to add more buttons. I.E GAME RULES/HARDER GAME (MAYBE)
const possibleChoices = document.querySelectorAll("button");



let playerChoice;


// For each Button named possible choice, add an event listener when user clicks. When clicked, target the ID of the button and display this in Browser
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  playerChoice = e.target.id

  // TODO
  //Change to Font Awesome Icons
  playerChoiceDisplay.innerHTML = playerChoice
}))


//Functions// 
