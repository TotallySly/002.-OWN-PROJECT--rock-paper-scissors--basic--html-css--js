// Document to test out script structure

let userMouseClick = document.getElementById("startQuiz");
let sport = document.getElementById("sport");

if (userMouseClick === sport.addEventListener);
"click", () => generateRandomSportsQuestion(sportQuestions);
{
  function generateRandomSportsQuestion() {
    let randomSportQuestion = Math.floor(Math.random() * sportQuestions.length);
    let showRandomSportQuestion = sportQuestions[randomSportQuestion];
    question.innerHTML = "<p>" + showRandomSportQuestion.question + "</p>";
    answerA.innerHTML = showRandomSportQuestion.a;
    answerB.innerHTML = showRandomSportQuestion.b;
    answerC.innerHTML = showRandomSportQuestion.c;
    answerD.innerHTML = showRandomSportQuestion.d;

    console.log(sportQuestions[randomSportQuestion]);
  }
} else if (userMouseClick === music.addEventListener);
