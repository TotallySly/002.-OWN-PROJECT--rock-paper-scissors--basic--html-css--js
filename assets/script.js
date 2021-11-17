document.addEventListener("DOMContentLoaded", function () {
	const myQuestions = [
    {
    question:
        "For which movie did Steven Spielberg win his first Oscar for Best Director?", 
        answers: {
    a: "E.T.",
    b: "Schindler's List",
    c: "Jaws",
    d: "Jurassic Park"
    },
		correctAnswer: "b"
    },
    {
    question:
        "Which film won an Oscar for Best Makeup and Hairstyling despite having a budget of $250",
        answers: {
    a: "Dallas Buyers Club",
    b: "The Blair Witch Project",
    c: "Paranormal Activity",
    d: "Lord of the Rings"
    },
    correctAnswer: "a"
    },
    {
    question: "Who played Private Ryan in Saving Private Ryan",
    answers: {
    a: "Tom Sizemore",
    b: "Edward Burns",
    c: "Tom Hanks",
    d: "Matt Damon"
    },
    correctAnswer: "d"
    },
    {
    question: "In The Big Lebowski, which band does The Dude hate?",
    answers: {
    a: "The Beetles",
    b: "Eagles",
    c: "The Rolling Stones",
    d: "Steely Dan"
    },
    correctAnswer: "b"
    },
    {
    question: "Helena Bonham Carter and Meat Loaf appear in which film?",
    answers: {
    a: "Fight Club",
    b: "The Rocky Horror Picture Show",
    c: "Rocky",
    d: "Waynes World",
    },
    correctAnswer: "a",
    },
    {
    question: "On which planet was Superman born?",
    answers: {
    a: "Saturn",
    b: "Mars",
    c: "Kypton",
    d: "Earth",
    },
    correctAnswer: "c",
    },
    {
    question: "Who directed th 1997 film Jackie Brown?",
    answers: {
    a: "Tim Burton",
    b: "James Cameron",
    c: "Steven Spielberg",
    d: "Quentin Taratino",
    },
    correctAnswer: "d",
    },
    {
    question:
        "How many times was Leonardo DiCaprio nominated for an Oscar before winning Best Actor in 2016",
        answers: {
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    },
    correctAnswer: "d",
    },
    {
    question: "Which social network is the film The Social Network based on?",
    answers: {
    a: "Instagram",
    b: "MySpace",
    c: "Twitter",
    d: "Facebook",
    },
    correctAnswer: "d",
    },
    {
    question: "Which sport is the subject of the 1993 film Cool Runnings?",
    answers: {
    a: "Bobsleigh",
    b: "Ice Hockey",
    c: "Long Distance Running",
    d: "Ice Skating",
    },
    correctAnswer: "a",
    },
	];

	const startQuiz = document.getElementById("start")
	const questions= document.getElementById("questions");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");

	generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)

	function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
		function showQuestions(questions, quizContainer) {
			let output = [];
			const answers;
		
			for(let i = 0; i < questions.length; i++){
				answers = [ ];
				for(letter in questions[i].answers){
					answers.push(
						'<label>'+
							'<input type="radio" name="question'+i+'"value="'
							+letter+'">'+ letter + ': '
							+ questions[i].answers[letter]+ 
						'</label>'
					) ; 
				}   
				output.push(
					'<div>' + questions[i].question + '</div>'
					+ '<div>' + answers.join("") + '</div>'
				);  
			}
			quizContainer.innerHTML = output.join("");
		}

		function showResults(questions, quizContainer, resultsContainer){
			let answerContainers = quizContainer.querySelectorAll(".answers");

			let userAnswer = " "; 
			let numCorrect = 0;

			for(let i=0; i<questions.length; i++) {
				userAnswer = (answerContainers[i].querySelector('input[name=questions'+i+"]:checked") ||{}).value;

				if(userAnswer===questions[i].correctAnswer) {
					numCorrect++;
					answerContainers[i].style.color = "lightgreen";
				}
				else {
					answerContainers[i].style.color="red"
				}
			}
			resultsContainer.innerHTML = numCorrect + "out of" + questions.length;
		}
	
		showQuestions(questions, quizContainer);

		submitButton.onclick = function () {
			showResults(questions, quizContainer, resultsContainer);
		}
	}
});
