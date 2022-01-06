document.addEventListener("DOMContentLoaded", function () {});

//Global Variables

let userScore = 0;
let computerScore = 0;

const userClickRock = document
  .querySelector(".rock-icon")
  .addEventListener("click", function () {
    document.querySelector(
      ".display-computer-choice"
    ).innerHTML = `<i class="fas fa-hand-rock"></i>`;
  });

const userClickPaper = document
  .querySelector(".paper-icon")
  .addEventListener("click", function () {
    document.querySelector(
      ".display-computer-choice"
    ).innerHTML = `<i class="fas fa-hand-paper"></i>`;
  });

const userClickScissor = document
  .querySelector(".scissor-icon")
  .addEventListener("click", function () {
    document.querySelector(
      ".display-computer-choice"
    ).innerHTML = `<i class="fas fa-hand-scissors"></i>`;
  });
