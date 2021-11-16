document.addEventListener("DOMContentLoaded", function () {
  // All the variables required that will always be required.

  const currentQuestion = 0;
  const score = 0;
  const totalQuestions = quizQuestions.length;

  // Retrieving the elements from the HTML so we can access them within the DOM

  const quizContainer = document.getElementById("quizContainer");
  const question = document.getElementById("question");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const option4 = document.getElementById("option4");
  const nxtButton = document.getElementById("nextQuestion");
  const result = document.getElementById("score");

  // Function to display the questions within the HTML document.

  function displayQuestion(questionIndex) {
    let quest = quizQuestions(questionIndex);
    question.textContent = questionIndex + 1 + "." + quest.question;
    option1.textContent = quest.a;
    option2.textContent = quest.b;
    option3.textContent = quest.c;
    option4.textContent = quest.d;
  }
});
