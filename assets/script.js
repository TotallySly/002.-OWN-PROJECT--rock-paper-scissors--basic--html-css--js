document.addEventListener("DOMContentLoaded", function () {
	const question = document.getElementById("question");
	const qImg = document.getElementById("qimg");
	const choiceA = document.getElementById("answerA");
	const choiceB = document.getElementById("answerB");
	const choiceC = document.getElementById("answerC");
	const answer = document.getElementById("submitAnswer");



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