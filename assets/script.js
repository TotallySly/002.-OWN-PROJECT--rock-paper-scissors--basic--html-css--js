document.addEventListener("DOMContentLoaded", function () {
	const generateFlag = document.getElementById("flag");
	const question = document.getElementById("question");
	const flagImage = document.getElementById("flagImage");
	const choiceA = document.getElementById("A");
	const choiceB = document.getElementById("B");
	const choiceC = document.getElementById("C");
	
	let questions = [
		{
			question: "Whose flag is this?",
			imgSrc: "/assets/images/br.png",
			choiceA: "France",
			choiceB: "Brazil",
			choiceC: "England",
			correct: "b",
		},
		{
			question: "Whose flag is this?",
			imgSrc: "/assets/images/fr.png",
			choiceA: "France",
			choiceB: "Brazil",
			choiceC: "England",
			correct: "a",
		},
		{
			question: "Whose flag is this?",
			imgSrc: "/assets/images/gb-eng.png",
			choiceA: "France",
			choiceB: "Brazil",
			choiceC: "England",
			correct: "c",
		}
	]

	const lastQuestion = questions.length - 1;
	let runningQuestion = 0;

	// function renderQuestion () {
	// 	let q =questions[runningQuestion];
	// 	question.innerHTML = "<p>" + q.question + "</p>" ;
	// 	qImg.innerHTML = "<img src=" + q.imgSrc + ">";
	// 	choiceA.innerHTML = q.choiceA;
	// 	choiceB.innerHTML = q.choiceB;
	// 	choiceC.innerHTML = q.choiceC;
	// }

	// renderQuestion()

	let = document.getElementById("flag");
		something.addEventListener("click", () =>
		generateRandomQuestion(questions)
);	


	function generateRandomQuestion() {
		let randomQuestion = Math.floor(Math.random() * questions.length);
		let showRandomQuestion =  questions[randomQuestion];
			question.innerHTML = "<p>" + showRandomQuestion.question + "</p>";
			flagImage.innerHTML = "<img src=" + q.imgSrc + ">";
			choiceA.innerHTML = showRandomQuestion.choiceA;
			choiceB.innerHTML = showRandomQuestion.choiceB;
			choiceC.innerHTML = showRandomQuestion.choiceC;
	}




});