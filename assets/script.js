document.addEventListener("DOMContentLoaded", function () {
  // All the variables required that will always be required.

  const currentQuestion = 0;
  const score = 0;

  // const question = document.getElementById("question");
  // const question2 = document.getElementById("question2");
  // const option1 = document.getElementById("answer1");
  // const option2 = document.getElementById("answer2");
  // const option3 = document.getElementById("answer3");
  // const option4 = document.getElementById("answer4");
  // const nxtButton = document.getElementById("nextQuestion");
  // const result = document.getElementById("score");

  let music = document.getElementById("music");
  let output = document.getElementById("question");
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

  function generateRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  }

  function createArrayOfNumbers(start, end) {
    let myArray = [];

    for (let i = start; i <= end; i++) {
      myArray.push(i);
    }

    return myArray;
  }

  let numbersArray = createArrayOfQuestions(1, 9);

  console.log(numbersArray);

  // music.addEventListener("click", () => {
  //   if (randomMusicQuestions.length == 0) {
  //     output.innerText = "No more questions";
  //   }
  //   let randomIndex = generateRandomNumber(0, randomMusicQuestions.length - 1);
  //   let randomQuestion = musicQuestions[randomIndex];
  //   randomMusicQuestions.splice(randomIndex, 1);
  //   output.innerText = randomQuestion;
  // });

  // function generateRandomMusicQuestion() {
  //   let randomMusicQuestion = Math.floor(Math.random() * musicQuestions.length);
  //   let showRandomMusicQuestion = musicQuestions[randomMusicQuestion];
  //   question.innerHTML = "<p>" + showRandomMusicQuestion.question + "</p>";
  //   option1.innerHTML = showRandomMusicQuestion.a;
  //   option2.innerHTML = showRandomMusicQuestion.b;
  //   option3.innerHTML = showRandomMusicQuestion.c;
  //   option4.innerHTML = showRandomMusicQuestion.d;
  // question2.innerHTML = "<p>" + showRandomMusicQuestion.question + "</p>";
  // option5.innerHTML = showRandomMusicQuestion.a;
  // option6.innerHTML = showRandomMusicQuestion.b;
  // option7.innerHTML = showRandomMusicQuestion.c;
  // option8.innerHTML = showRandomMusicQuestion.d;
  // }
});
