document.addEventListener("DOMContentLoaded", function () {
  const question = document.getElementById("question");
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

  let music = document.getElementById("music");
  music.addEventListener("click", () =>
    generateRandomMusicQuestion(musicQuestions)
  );

  function generateRandomMusicQuestion() {
    let randomMusicQuestion = "";
    for (let x in musicQuestions) {
      randomMusicQuestion += musicQuestions[x] + " ";
    }
    question.innerHTML = "<p>" + randomMusicQuestion.question + "</p>";
    answerA.innerHTML = randomMusicQuestion.a;
    answerB.innerHTML = randomMusicQuestion.b;
    answerC.innerHTML = randomMusicQuestion.c;
    answerD.innerHTML = randomMusicQuestion.d;

    console.log(musicQuestions[randomMusicQuestion]);
  }
  //    const music = document.getElementById("music");
  //   const film = document.getElementById("film");
  //   const choiceA = document.getElementById("answerA");
  //   const choiceB = document.getElementById("answerB");
  //   const choiceC = document.getElementById("answerC");
  //   const answer = document.getElementById("submitAnswer");
  //   const musicQuestions = [
  //     {
  //       question:
  //         "In the UK Charts, as of November 2021, which song holds the record for longest unbroken number one?",
  //       a: "Shape Of You - Ed Sheeran",
  //       b: "Love Is All Around - Wet Wet Wet",
  //       c: "(Everything I Do) I Do It for You - Bryan Adams",
  //       d: "I Will Always Love You - Whitney Houston",
  //       correctAnswer: "c",
  //     },
  //     {
  //       question:
  //         "As of November 2021, which is the best selling movie soundtrack?",
  //       a: "The Bodyguard",
  //       b: "Saturday Night Fever",
  //       c: "Dirty Dancing",
  //       d: "Titanic: Music from the Motion Picture",
  //       correctAnswer: "a",
  //     },
  //     {
  //       question: "Which city were The Beetles formed?",
  //       a: "Manchester",
  //       b: "London",
  //       c: "Liverpool",
  //       d: "Birmingham",
  //       correctAnswer: "c",
  //     },
  //     {
  //       question:
  //         "Vanessa Carlton became a one-hit wonder in 2001 for which song?",
  //       a: "Teenage Dirtbag",
  //       b: "A Thousand Miles",
  //       c: "How Bizarre",
  //       d: "Who Let The Dogs Out",
  //       correctAnswer: "b",
  //     },
  //     {
  //       question:
  //         "According to the Guinness Book of World Records, who is the best selling female artist of all time?",
  //       a: "Madonna",
  //       b: "Mariah Carey",
  //       c: "Whitney Houston",
  //       d: "Cher",
  //       correctAnswer: "a",
  //     },
  //     {
  //       question: "How many luftballons did Nena sing about?",
  //       a: "102",
  //       b: "101",
  //       c: "100",
  //       d: "99",
  //       correctAnswer: "d",
  //     },
  //     {
  //       question: "In which year did Katy Perry kiss a girl and like it?",
  //       a: "2007",
  //       b: "2008",
  //       c: "2009",
  //       d: "2010",
  //       correctAnswer: "b",
  //     },
  //     {
  //       question:
  //         "As of November 2021, which is the biggest UK selling album this Millennium?",
  //       a: "21 - Adele",
  //       b: "Back to Black - Amy Winehouse",
  //       c: "Back to Bedlam - James Blunt",
  //       d: "Spirit - Leona Lewis",
  //       correctAnswer: "a",
  //     },
  //     {
  //       question: "Which singer was born Georgios Kyriacos Panayiotou?",
  //       a: "Elton John",
  //       b: "Freddie Mercury",
  //       c: "Bob Dylan",
  //       d: "George Michael",
  //       correctAnswer: "d",
  //     },
  //     {
  //       question:
  //         "Which group's 1987 debut album was title Appetite for Destruction?",
  //       a: "Kiss",
  //       b: "Whitespace",
  //       c: "Guns N Roses",
  //       d: "Journey",
  //       correctAnswer: "c",
  //     },
  //   ];
  //   let music = document.getElementById("music");
  //   music.addEventListener("click", () => getRandomMusicQuestions()); {
  //   function loadQuestions() {
  //     function getRandomMusicQuestion ()
  //     let questionSet = getRandomQuestionSet(5);
  //     for (let [key, value] of Object.entries(musicQuestions)) {
  //       question.innerHTML = "<p>" + questionSet.question + "</p>";
  //       answerA.innerHTML = questionSet.a;
  //       answerB.innerHTML = questionSet.b;
  //       answerC.innerHTML = questionSet.c;
  //       answerD.innerHTML = questionSet.d;
  //     }
  //   }
  //   function getRandomMusicQuestions(number) {
  //     let musicSet = [];
  //     while (musicSet.length < number) {
  //       let randomIndex = Math.floor(Math.random() * musicQuestions.length);
  //       if (musicSet.indexOf(randomIndex) === -1) {
  //         musicSet.push(randomIndex);
  //       }
  //     }
  //     return musicQuestions.filter(function (d, i) {
  //       return musicSet.indexOf(i) > -1;
  //     });
  //   }
  // }
  // const filmQuestions = [
  //   {
  //     question:
  //       "For which movie did Steven Spielberg win his first Oscar for Best Director?",
  //     a: "E.T.",
  //     b: "Schindler's List",
  //     c: "Jaws",
  //     d: "Jurassic Park",
  //     correctAnswer: "b",
  //   },
  //   {
  //     question:
  //       "Which film won an Oscar for Best Makeup and Hairstyling despite having a budget of $250",
  //     a: "Dallas Buyers Club",
  //     b: "The Blair Witch Project",
  //     c: "Paranormal Activity",
  //     d: "Lord of the Rings",
  //     correctAnswer: "a",
  //   },
  //   {
  //     question: "Who played Private Ryan in Saving Private Ryan",
  //     a: "Tom Sizemore",
  //     b: "Edward Burns",
  //     c: "Tom Hanks",
  //     d: "Matt Damon",
  //     correctAnswer: "d",
  //   },
  //   {
  //     question: "In The Big Lebowski, which band does The Dude hate?",
  //     a: "The Beetles",
  //     b: "Eagles",
  //     c: "The Rolling Stones",
  //     d: "Steely Dan",
  //     correctAnswer: "b",
  //   },
  //   {
  //     question: "Helena Bonham Carter and Meat Loaf appear in which film?",
  //     a: "Fight Club",
  //     b: "The Rocky Horror Picture Show",
  //     c: "Rocky",
  //     d: "Waynes World",
  //     correctAnswer: "a",
  //   },
  //   {
  //     question: "On which planet was Superman born?",
  //     a: "Saturn",
  //     b: "Mars",
  //     c: "Kypton",
  //     d: "Earth",
  //     correctAnswer: "c",
  //   },
  //   {
  //     question: "Who directed th 1997 film Jackie Brown?",
  //     a: "Tim Burton",
  //     b: "James Cameron",
  //     c: "Steven Spielberg",
  //     d: "Quentin Taratino",
  //     correctAnswer: "d",
  //   },
  //   {
  //     question:
  //       "How many times was Leonardo DiCaprio nominated for an Oscar before winning Best Actor in 2016",
  //     a: "3",
  //     b: "4",
  //     c: "5",
  //     d: "6",
  //     correctAnswer: "d",
  //   },
  //   {
  //     question: "Which social network is the film The Social Network based on?",
  //     a: "Instagram",
  //     b: "MySpace",
  //     c: "Twitter",
  //     d: "Facebook",
  //     correctAnswer: "d",
  //   },
  //   {
  //     question: "Which sport is the subject of the 1993 film Cool Runnings?",
  //     a: "Bobsleigh",
  //     b: "Ice Hockey",
  //     c: "Long Distance Running",
  //     d: "Ice Skating",
  //     correctAnswer: "a",
  //   },
  // ];
  // let film = document.getElementById("film");
  // film.addEventListener("click", () => generateRandomFilmQuestion(filmQuestions));
  // function generateRandomFilmQuestion() {
  //   let randomFilmQuestion = Math.floor(Math.random() * filmQuestions.length);
  //   let showRandomFilmQuestion = filmQuestions[randomFilmQuestion];
  //   question.innerHTML = "<p>" + showRandomFilmQuestion.question + "</p>";
  //   answerA.innerHTML = showRandomFilmQuestion.a;
  //   answerB.innerHTML = showRandomFilmQuestion.b;
  //   answerC.innerHTML = showRandomFilmQuestion.c;
  //   answerD.innerHTML = showRandomFilmQuestion.d;
  //   console.log(filmQuestions[randomFilmQuestion]);
  // }
});
