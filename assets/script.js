document.addEventListener("DOMContentLoaded", function () {
  // Variables for the Quiz
  const quizContainer = (document.getElementById = "quiz");
  const resultsContainer = (document.getElementById = "results");
  const submitButton = (document.getElementById = "submit");

  function buildQuiz() {}

  function showResults() {}

  //   DIsplays functions right away.
  buildQuiz();

  //   On submit, show the results
  submitButton.addEventListener("click", showResults);
});
