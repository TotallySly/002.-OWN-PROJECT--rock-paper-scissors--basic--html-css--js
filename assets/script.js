document.addEventListener("DOMContentLoaded", function () {
  const choiceA = document.getElementById("answerA");
  const choiceB = document.getElementById("answerB");
  const choiceC = document.getElementById("answerC");
  const answer = document.getElementById("submitAnswer");

  const musicQuestions = [
    {
      question:
        "In the UK Charts, as of November 2021, which song holds the record for longest unbroken number one?",
      a: "Shape Of You - Ed Sheeran",
      b: "Love Is All Around - Wet Wet Wet",
      c: "(Everything I Do) I Do It for You - Bryan Adams",
      d: "I Will Always Love You - Whitney Houston",
      correctAnswer: "c",
    },
    {
      question:
        "As of November 2021, which is the best selling movie soundtrack?",
      a: "The Bodyguard",
      b: "Saturday Night Fever",
      c: "Dirty Dancing",
      d: "Titanic: Music from the Motion Picture",
      correctAnswer: "a",
    },
    {
      question: "Which city were The Beetles formed?",
      a: "Manchester",
      b: "London",
      c: "Liverpool",
      d: "Birmingham",
      correctAnswer: "c",
    },
    {
      question:
        "Vanessa Carlton became a one-hit wonder in 2001 for which song?",
      a: "Teenage Dirtbag",
      b: "A Thousand Miles",
      c: "How Bizarre",
      d: "Who Let The Dogs Out",
      correctAnswer: "b",
    },
    {
      question:
        "According to the Guinness Book of World Records, who is the best selling female artist of all time?",
      a: "Madonna",
      b: "Mariah Carey",
      c: "Whitney Houston",
      d: "Cher",
      correctAnswer: "a",
    },
    {
      question: "How many luftballons did Nena sing about?",
      a: "102",
      b: "101",
      c: "100",
      d: "99",
      correctAnswer: "d",
    },
    {
      question: "In which year did Katy Perry kiss a girl and like it?",
      a: "2007",
      b: "2008",
      c: "2009",
      d: "2010",
      correctAnswer: "b",
    },
    {
      question:
        "As of November 2021, which is the biggest UK selling album this Millennium?",
      a: "21 - Adele",
      b: "Back to Black - Amy Winehouse",
      c: "Back to Bedlam - James Blunt",
      d: "Spirit - Leona Lewis",
      correctAnswer: "a",
    },
    {
      question: "Which singer was born Georgios Kyriacos Panayiotou?",
      a: "Elton John",
      b: "Freddie Mercury",
      c: "Bob Dylan",
      d: "George Michael",
      correctAnswer: "d",
    },
    {
      question:
        "Which group's 1987 debut album was title Appetite for Destruction?",
      a: "Kiss",
      b: "Whitespace",
      c: "Guns N Roses",
      d: "Journey",
      correctAnswer: "c",
    },
  ];
  const music = document.getElementById("music");
  music.addEventListener("click", () => getRandomMusicQuestions());
  music.addEventListener("click", () => loadQuestions());

  function getRandomMusicQuestions(number) {
    let musicSet = [];
    while (musicSet.length < number) {
      let randomIndex = Math.floor(Math.random() * musicQuestions.length);
      if (musicSet.indexOf(randomIndex) === -1) {
        musicSet.push(randomIndex);
      }
    }
    return musicQuestions.filter(function (d, i) {
      return musicSet.indexOf(i) > -1;
    });
  }
  function loadQuestions(musicSet) {
    for (let i = 0; i < 6; i++) musicSet[i];
    question.innerHTML = "<p>" + musicSet.question + "</p>";
    answerA.innerHTML = showRandomMusicQuestion.a;
    answerB.innerHTML = showRandomMusicQuestion.b;
    answerC.innerHTML = showRandomMusicQuestion.c;
    answerD.innerHTML = showRandomMusicQuestion.d;
  }

  loadQuestions();
});
