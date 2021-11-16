document.addEventListener("DOMContentLoaded", function () {
  // All the variables required that will always be required.

  const currentQuestion = 0;
  const score = 0;
  const totalQuestions = quizQuestions.length;

  // Retrieving the elements from the HTML so we can access them within the DOM

  const quizContainer = document.getElementById("quizContainer");
  const question = document.getElementById("question");
  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const optionC = document.getElementById("optionC");
  const optionD = document.getElementById("optionD");
  const nxtButton = document.getElementById("nextQuestion");
  const result = document.getElementById("score");

  // Function to display the questions within the HTML document. The quest variable is retrieving the different indices from the questions.js script and this will be displayed within the HTML by using getElementById("question").

  // The options are being retried from the questions script. with quest.a relating the the first option and this then being displayed within the html by targeting the ID of optionA, and so forth with the other options.

  function displayQuestion(questionIndex) {
    let quest = quizQuestions(questionIndex);
    question.textContent = questionIndex + 1 + "." + quest.question;
    optionA.textContent = quest.a;
    optionB.textContent = quest.b;
    optionC.textContent = quest.c;
    optionD.textContent = quest.d;
  }

  button.addEventListener("click", () => displayNextQuestion());

  function displayNextQuestion() {}
});
