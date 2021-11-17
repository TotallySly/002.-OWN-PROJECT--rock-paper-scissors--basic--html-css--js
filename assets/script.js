document.addEventListener("DOMContentLoaded", function () {
  //   Functions
		function buildQuiz() {
			const output = [ ];

			// For each question
			myQuestions.forEach(
				(currentQuestion, questionNumber) => {
					// Variable to store list of answers
					const answers = [ ];

					// and for each available answer...
					for(letter in currentQuestion.answers) {
						answers.push (
							`<label>
								<input type="radio" name="question${questionNumber}" value=${letter}
								${letter} :
								${currentQuestion.answers[letter]}
							</label>`
						);
					}
					
					// adding question and its answers to the output
					output.push (
						`<div class="question"> ${currentQuestion.question}</div>
						<div class="answers> ${answers.join(' ')} </div>`
					);
				}
			);
		}
		function showResults() {}

  // Variables for the Quiz
		const quizContainer = (document.getElementById = "quiz");
		const resultsContainer = (document.getElementById = "results");
		const submitButton = (document.getElementById = "submit");
		const myQuestions = [
			{
			question: "For which movie did Steven Spielberg win his first Oscar for Best Director?",
			answers: {
				a: "E.T.",
				b: "Schindler's List",
				c: "Jaws",
				d: "Jurassic Park"
			},
			correctAnswer: "b",
		},
			{
			question: "Which film won an Oscar for Best Makeup and Hairstyling despite having a budget of $250",
			answers: {
				a: "Dallas Buyers Club",
				b: "The Blair Witch Project",
				c: "Paranormal Activity",
				d: "Lord of the Rings"
			},
			correctAnswer: "a",
		},
			{
			question: "Who played Private Ryan in Saving Private Ryan",
			answers: {
				a: "Tom Sizemore",
				b: "Edward Burns",
				c: "Tom Hanks",
				d: "Matt Damon"
			},
			correctAnswer: "d",
		},
			{
			question: "In The Big Lebowski, which band does The Dude hate?",
			answers: {
				a: "The Beetles",
				b: "Eagles",
				c: "The Rolling Stones",
				d: "Steely Dan"
			},
			correctAnswer: "b",
		},
			{
			question: "Helena Bonham Carter and Meat Loaf appear in which film?",
			answers: {
				a: "Fight Club",
				b: "The Rocky Horror Picture Show",
				c: "Rocky",
				d: "Waynes World"
			},
			correctAnswer: "a",
		},
			{
			question: "On which planet was Superman born?",
			answers: {
				a: "Saturn",
				b: "Mars",
				c: "Kypton",
				d: "Earth"
			},
			correctAnswer: "c",
		},
			{
			question: "Who directed th 1997 film Jackie Brown?",
			answers: {
				a: "Tim Burton",
				b: "James Cameron",
				c: "Steven Spielberg",
				d: "Quentin Taratino"
			},
			correctAnswer: "d",
		},
			{
			question: "How many times was Leonardo DiCaprio nominated for an Oscar before winning Best Actor in 2016",
			answers: {
				a: "3",
				b: "4",
				c: "5",
				d: "6"
			},
			correctAnswer: "d"
		},
			{
			question: "Which social network is the film The Social Network based on?",
			answer: {
				a: "Instagram",
				b: "MySpace",
				c: "Twitter",
				d: "Facebook"
			},
			correctAnswer: "d"
		},
			{
			question: "Which sport is the subject of the 1993 film Cool Runnings?",
			answers: {
				a: "Bobsleigh",
				b: "Ice Hockey",
				c: "Long Distance Running",
				d: "Ice Skating"
			},
			correctAnswer: "a",
		},
	];

  //   DIsplays functions right away.
		buildQuiz();

  //   On submit, show the results
		submitButton.addEventListener("click", showResults);
});
