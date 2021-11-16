document.addEventListener("DOMContentLoaded", function () {
  // All the variables required that will always be required.

  const currentQuestion = 0;
  const score = 0;
  const totalQuestions = quizQuestions.length;

  // Retrieving the elements from the HTML so we can access them within the DOM

  const question = document.getElementById("question");
  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const optionC = document.getElementById("optionC");
  const optionD = document.getElementById("optionD");
  const nxtButton = document.getElementById("nextQuestion");
  const result = document.getElementById("score");


