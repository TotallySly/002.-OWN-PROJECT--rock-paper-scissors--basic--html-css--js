//Wait for the DOM to finish loading
// Get the button elements and add event listeners to them
// Code Taken from Code Institute's 'Love Maths'

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

function runGame() {}

function checkAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displaySportQuestions() {}

function displayMusicQuestion() {}

function displayFilmQuestions() {}

function displayRandomQuestions() {}

// Questions

const sportQuestions = [
  {
    question: "In which year did England win the football World Cup?",
    a: "1966",
    b: "1996",
    c: "1066",
    d: "1666",
    correctAnswer: "a",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
];

const musicQuestions = [
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
];

const filmQuestions = [
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
];

const randomQuestions = [
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    correctAnswer: "",
  },
];
