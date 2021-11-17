document.addEventListener("DOMContentLoaded", function () {
	const generateFlag = document.getElementById("flag");
	const question = document.getElementById("question");
	const flagImage = document.getElementById("flagImage");
	const choiceA = document.getElementById("A");
	const choiceA = document.getElementById("B");
	const choiceA = document.getElementById("C");
	
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



	let music = document.getElementById("music");
		music.addEventListener("click", () =>
		generateRandomMusicQuestion(musicQuestions)
		);

	function generateRandomMusicQuestion() {
		let randomMusicQuestion = Math.floor(Math.random() * musicQuestions.length);
		let showRandomMusicQuestion = musicQuestions[randomMusicQuestion];
			question.innerHTML = "<p>" + showRandomMusicQuestion.question + "</p>";
			answerA.innerHTML = showRandomMusicQuestion.a;
			answerB.innerHTML = showRandomMusicQuestion.b;
			answerC.innerHTML = showRandomMusicQuestion.c;
			answerD.innerHTML = showRandomMusicQuestion.d;

		console.log(musicQuestions[randomMusicQuestion]);
	}



});