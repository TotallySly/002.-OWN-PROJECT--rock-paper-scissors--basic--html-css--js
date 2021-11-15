document.addEventListener("DOMContentLoaded", function () {
  const question = document.getElementById("question");
  const choiceA = document.getElementById("answerA");
  const choiceB = document.getElementById("answerB");
  const choiceC = document.getElementById("answerC");
  const answer = document.getElementById("submitAnswer");

  /****************************************************************
   * **************************************************************
   */
  // This is generating random Sports Questions. However, at present it is only random, so random questions are reappearing. Need to come up with code to eliminate duplicate questions being produced.

  const sportQuestions = [
    {
      question:
        "In which year did Denmark win the football European Championships?",
      a: "1992",
      b: "1996",
      c: "1988",
      d: "2006",
      correctAnswer: "a",
    },
    {
      question: "In which sport do they compete for the Stanley Cup?",
      a: "Sailing",
      b: "Ice Hockey",
      c: "Golf",
      d: "Horse Racing",
      correctAnswer: "b",
    },
    {
      question: "The Derby is a horse race held in which English town?",
      a: "Epsom",
      b: "Aintree",
      c: "Cheltenham",
      d: "Ascot",
      correctAnswer: "a",
    },
    {
      question: "What is the maximum break one can make in Snooker?",
      a: "150",
      b: "149",
      c: "148",
      d: "147",
      correctAnswer: "d",
    },
    {
      question:
        "In which year did Andy Murray win his first Wimbledon Tennis Title ",
      a: "2012",
      b: "2013",
      c: "2014",
      d: "2015",
      correctAnswer: "b",
    },
    {
      question: "How many Olympic gold medals has Usain Bolt won? ",
      a: "7",
      b: "8",
      c: "9",
      d: "10",
      correctAnswer: "b",
    },
    {
      question: "Who won the first ever FIFA Woman's World Cup?",
      a: "United States",
      b: "Sweden",
      c: "Norway",
      d: "Brazil",
      correctAnswer: "a",
    },
    {
      question: "The heptathlon is made up of how many events?",
      a: "6",
      b: "7",
      c: "8",
      d: "9",
      correctAnswer: "b",
    },
    {
      question: "In tennis, which word is used for the score of zero?",
      a: "Hate",
      b: "Zero",
      c: "Nul points",
      d: "Love",
      correctAnswer: "d",
    },
    {
      question:
        "Which football team, in 2003/04, won the English Premier League without losing a single game?",
      a: "Chelsea",
      b: "Manchester United",
      c: "Arsenal",
      d: "Liverpool",
      correctAnswer: "c",
    },
  ];

  let sport = document.getElementById("sport");
  sport.addEventListener("click", () =>
    generateRandomSportsQuestion(sportQuestions)
  );

  function generateRandomSportsQuestion() {
    let randomSportQuestion = Math.floor(Math.random() * sportQuestions.length);
    let showRandomSportQuestion = sportQuestions[randomSportQuestion];
    question.innerHTML = "<p>" + showRandomSportQuestion.question + "</p>";
    answerA.innerHTML = showRandomSportQuestion.a;
    answerB.innerHTML = showRandomSportQuestion.b;
    answerC.innerHTML = showRandomSportQuestion.c;
    answerD.innerHTML = showRandomSportQuestion.d;

    console.log(sportQuestions[randomSportQuestion]);
  }

  // This is generating random Sports Questions. However, at present it is only random, so random questions are reappearing. Need to come up with code to eliminate duplicate questions being produced.

  // Just need to replace sport with other quiz names!
  /****************************************************************
   * **************************************************************
   */

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
    let randomMusicQuestion = Math.floor(Math.random() * musicQuestions.length);
    let showRandomMusicQuestion = musicQuestions[randomMusicQuestion];
    question.innerHTML = "<p>" + showRandomMusicQuestion.question + "</p>";
    answerA.innerHTML = showRandomMusicQuestion.a;
    answerB.innerHTML = showRandomMusicQuestion.b;
    answerC.innerHTML = showRandomMusicQuestion.c;
    answerD.innerHTML = showRandomMusicQuestion.d;

    console.log(musicQuestions[randomMusicQuestion]);
  }

  const filmQuestions = [
    {
      question:
        "For which movie did Steven Spielberg win his first Oscar for Best Director?",
      a: "E.T.",
      b: "Schindler's List",
      c: "Jaws",
      d: "Jurassic Park",
      correctAnswer: "b",
    },
    {
      question:
        "Which film won an Oscar for Best Makeup and Hairstyling despite having a budget of $250",
      a: "Dallas Buyers Club",
      b: "The Blair Witch Project",
      c: "Paranormal Activity",
      d: "Lord of the Rings",
      correctAnswer: "a",
    },
    {
      question: "Who played Private Ryan in Saving Private Ryan",
      a: "Tom Sizemore",
      b: "Edward Burns",
      c: "Tom Hanks",
      d: "Matt Damon",
      correctAnswer: "d",
    },
    {
      question: "In The Big Lebowski, which band does The Dude hate?",
      a: "The Beetles",
      b: "Eagles",
      c: "The Rolling Stones",
      d: "Steely Dan",
      correctAnswer: "b",
    },
    {
      question: "Helena Bonham Carter and Meat Loaf appear in which film?",
      a: "Fight Club",
      b: "The Rocky Horror Picture Show",
      c: "Rocky",
      d: "Waynes World",
      correctAnswer: "a",
    },
    {
      question: "On which planet was Superman born?",
      a: "Saturn",
      b: "Mars",
      c: "Kypton",
      d: "Earth",
      correctAnswer: "c",
    },
    {
      question: "Who directed th 1997 film Jackie Brown?",
      a: "Tim Burton",
      b: "James Cameron",
      c: "Steven Spielberg",
      d: "Quentin Taratino",
      correctAnswer: "d",
    },
    {
      question:
        "How many times was Leonardo DiCaprio nominated for an Oscar before winning Best Actor in 2016",
      a: "3",
      b: "4",
      c: "5",
      d: "6",
      correctAnswer: "d",
    },
    {
      question: "Which social network is the film The Social Network based on?",
      a: "Instagram",
      b: "MySpace",
      c: "Twitter",
      d: "Facebook",
      correctAnswer: "d",
    },
    {
      question: "Which sport is the subject of the 1993 film Cool Runnings?",
      a: "Bobsleigh",
      b: "Ice Hockey",
      c: "Long Distance Running",
      d: "Ice Skating",
      correctAnswer: "a",
    },
  ];

  let film = document.getElementById("film");
  film.addEventListener("click", () =>
    generateRandomFilmQuestion(filmQuestions)
  );

  function generateRandomFilmQuestion() {
    let randomFilmQuestion = Math.floor(Math.random() * filmQuestions.length);
    let showRandomFilmQuestion = filmQuestions[randomFilmQuestion];
    question.innerHTML = "<p>" + showRandomFilmQuestion.question + "</p>";
    answerA.innerHTML = showRandomFilmQuestion.a;
    answerB.innerHTML = showRandomFilmQuestion.b;
    answerC.innerHTML = showRandomFilmQuestion.c;
    answerD.innerHTML = showRandomFilmQuestion.d;

    console.log(filmQuestions[randomFilmQuestion]);
  }

  const randomQuestions = [
    {
      question: "Name the Cuban leader who was in power in 1959?",
      a: "Fidal Castro",
      b: "Fray Bentos",
      c: "Chairman Mao",
      d: "Joseph Stalin",
      correctAnswer: "a",
    },
    {
      question: "What is the capital city of Australia",
      a: "Melbourne",
      b: "Sydney",
      c: "Canberra",
      d: "Perth",
      correctAnswer: "c",
    },
    {
      question: "When was the end of the First World War?",
      a: "1917",
      b: "1918",
      c: "1944",
      d: "1945",
      correctAnswer: "b",
    },
    {
      question: "What is the smallest country in the world?",
      a: "San Marino",
      b: "Federated States of Micronesia",
      c: "Monaco",
      d: "Vatican City",
      correctAnswer: "d",
    },
    {
      question: "Where does the cocktail, Moijto originate from?",
      a: "United States",
      b: "Mexico",
      c: "Cuba",
      d: "Spain",
      correctAnswer: "c",
    },
    {
      question: "What is the name of Kim Kardashians eldest child?",
      a: "North West",
      b: "South West",
      c: "John West",
      d: "Fred West",
      correctAnswer: "a",
    },
    {
      question: "Which year did Margaret Thatcher die?",
      a: "2012",
      b: "2013",
      c: "2014",
      d: "2015",
      correctAnswer: "b",
    },
    {
      question: "Which is the largest country in the world?",
      a: "United States",
      b: "Canada",
      c: "China",
      d: "Russia",
      correctAnswer: "d",
    },
    {
      question: "How many sides does a hendecagon have?",
      a: "14",
      b: "15",
      c: "16",
      d: "17",
      correctAnswer: "d",
    },
    {
      question: "Who painted the Mona Lisa",
      a: "Claude Monet",
      b: "Vincent van Gogh",
      c: "Leonardo da Vinci",
      d: "Michelangelo",
      correctAnswer: "c",
    },
  ];

  let random = document.getElementById("random");
  random.addEventListener("click", () =>
    generateRandomRandomQuestion(randomQuestions)
  );

  function generateRandomRandomQuestion() {
    let randomRandomQuestion = Math.floor(
      Math.random() * randomQuestions.length
    );
    let showRandomRandomQuestion = randomQuestions[randomRandomQuestion];
    question.innerHTML = "<p>" + showRandomRandomQuestion.question + "</p>";
    answerA.innerHTML = showRandomRandomQuestion.a;
    answerB.innerHTML = showRandomRandomQuestion.b;
    answerC.innerHTML = showRandomRandomQuestion.c;
    answerD.innerHTML = showRandomRandomQuestion.d;

    console.log(randomQuestions[randomRandomQuestion]);
  }
});
