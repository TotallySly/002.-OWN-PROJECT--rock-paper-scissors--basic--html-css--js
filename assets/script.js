// document.addEventListener("DOMContentLoaded", function () {});

//Global Variables

let userScore = 0;
let computerScore = 0;

/*
let userClicksRock = document
  .querySelector(".rock-icon")
  .addEventListener("click", function () {
    document.querySelector(
      ".display-computer-choice"
    ).innerHTML = `<i class="fas fa-hand-rock"></i>`;
  });

const userClicksPaper = document
  .querySelector(".paper-icon")
  .addEventListener("click", function () {
    document.querySelector(
      ".display-computer-choice"
    ).innerHTML = `<i class="fas fa-hand-paper"></i>`;
  });

const userClicksScissor = document
  .querySelector(".scissor-icon")
  .addEventListener("click", function () {
    document.querySelector(
      ".display-computer-choice"
    ).innerHTML = `<i class="fas fa-hand-scissors"></i>`;
  });

  */

// Generates computer choice
let computerDecision = Math.trunc(Math.random() * 3) + 1;
console.log(computerDecision);

//Displays Computer Choice
if (computerDecision === 1) {
  document.querySelector(
    ".display-computer-choice"
  ).innerHTML = `<i class="fas fa-hand-rock"></i>`;
} else if (computerDecision === 2) {
  document.querySelector(
    ".display-computer-choice"
  ).innerHTML = `<i class="fas fa-hand-paper"></i>`;
} else if (computerDecision === 3) {
  document.querySelector(
    ".display-computer-choice"
  ).innerHTML = `<i class="fas fa-hand-scissors"></i>`;
}

/*
const playGame = function () {
  if (userClicksRock) {
    generateComputerChoice();
    computerChoice();
  } else if (userClicksPaper) {
    generateComputerChoice();
    computerChoice();
  } else if (userClicksScissor) {
    generateComputerChoice();
    computerChoice();
  }
};

playGame();
*/
