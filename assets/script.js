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
    question:
      "In which year did Denmark win the football European Championships?",
    a: "1992",
    b: "1996",
    c: "1988",
    d: "2006",
    correctAnswer: "a",
  },
  {
    question: "In which sport do they compete for the Stanley Cup?",
    a: "Sailing",
    b: "Ice Hockey",
    c: "Golf",
    d: "Horse Racing",
    correctAnswer: "b",
  },
  {
    question: "The Derby is a horse race held in which English town?",
    a: "Epsom",
    b: "Aintree",
    c: "Cheltenham",
    d: "Ascot",
    correctAnswer: "a",
  },
  {
    question: "What is the maximum break one can make in Snooker?",
    a: "150",
    b: "149",
    c: "148",
    d: "147",
    correctAnswer: "d",
  },
  {
    question:
      "In which year did Andy Murray win his first Wimbledon Tennis Title ",
    a: "2012",
    b: "2013",
    c: "2014",
    d: "2015",
    correctAnswer: "b",
  },
  {
    question: "How many Olympic gold medals has Usain Bolt won? ",
    a: "7",
    b: "8",
    c: "9",
    d: "10",
    correctAnswer: "b",
  },
  {
    question: "Who won the first ever FIFA Woman's World Cup?",
    a: "United States",
    b: "Sweden",
    c: "Norway",
    d: "Brazil",
    correctAnswer: "a",
  },
  {
    question: "The heptathlon is made up of how many events?",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correctAnswer: "b",
  },
  {
    question: "In tennis, which word is used for the score of zero?",
    a: "Hate",
    b: "Zero",
    c: "Nul points",
    d: "Love",
    correctAnswer: "d",
  },
  {
    question:
      "Which football team, in 2003/04, won the English Premier League without losing a single game?",
    a: "Chelsea",
    b: "Manchester United",
    c: "Arsenal",
    d: "Liverpool",
    correctAnswer: "c",
  },
];

const musicQuestions = [
  {
    question:
      "In the UK Charts, as of November 2021, which song holds the record for longest unbroken number one?",
    a: "Shape Of You - Ed Sheeran",
    b: "Love Is All Around - Wet Wet Wet",
    c: "(Everything I Do) I Do It for You - Bryan Adams",
    d: "I Will Always Love You - Whitney Housten",
    correctAnswer: "c",
  },
  {
    question:
      "As of November 2021, which is the best selling movie soundtrack?",
    a: "The Bodyguard",
    b: "Saturday Night Fever",
    c: "Dirty Dancing",
    d: "Titanic: Music from the Motion Picture",
    correctAnswer: "a",
  },
  {
    question: "Which city were The Beetles formed?",
    a: "Manchester",
    b: "London",
    c: "Liverpool",
    d: "Birmingham",
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
