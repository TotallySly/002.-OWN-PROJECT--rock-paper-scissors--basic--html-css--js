document.addEventListener("DOMContentLoaded", function () {
  function generateQuiz(
    questions,
    quizContainer,
    resultsContainer,
    submitButton
  ) {
    function showQuestions(questions, quizContainer) {}
    function showResults(questions, quizContainer, resultsContainer) {}

    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
      showResults(questions, quizContainer, resultsContainer);
    };
  }
});
