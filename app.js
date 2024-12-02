const quizQuestions = [
  {
    id: 1,
    question: "What does the 'M' in MERN stack stand for?",
    options: {
      a: "MongoDB",
      b: "MySQL",
      c: "Microsoft SQL",
      d: "MariaDB",
    },
    answer: "MongoDB",
  },
  {
    id: 2,
    question: "Which of the following is used to manage state in React?",
    options: {
      a: "Redux",
      b: "Node.js",
      c: "Express",
      d: "MongoDB",
    },
    answer: "Redux",
  },
  {
    id: 3,
    question: "What is the primary function of Node.js in the MERN stack?",
    options: {
      a: "Database management",
      b: "Client-side scripting",
      c: "Server-side JavaScript runtime",
      d: "Routing requests",
    },
    answer: "Server-side JavaScript runtime",
  },
  // {
  //   id: 4,
  //   question:
  //     "Which language is used for building the front-end in the MERN stack?",
  //   options: {
  //     a: "Java",
  //     b: "HTML",
  //     c: "JavaScript",
  //     d: "CSS"
  //   },
  //   answer: "JavaScript"
  // },
  // {
  //   id: 5,
  //   question: "What is Express.js used for in the MERN stack?",
  //   options: {
  //     a: "Database interaction",
  //     b: "Building user interfaces",
  //     c: "Routing and handling HTTP requests",
  //     d: "Server-side logic"
  //   },
  //   answer: "Routing and handling HTTP requests"
  // },
  // {
  //   id: 6,
  //   question: "What is the purpose of MongoDB in the MERN stack?",
  //   options: {
  //     a: "Frontend development",
  //     b: "Database management (NoSQL)",
  //     c: "Routing",
  //     d: "State management"
  //   },
  //   answer: "Database management (NoSQL)"
  // },
  // {
  //   id: 7,
  //   question: "What is the primary use of React in the MERN stack?",
  //   options: {
  //     a: "Server-side scripting",
  //     b: "Building dynamic user interfaces",
  //     c: "Database management",
  //     d: "Networking"
  //   },
  //   answer: "Building dynamic user interfaces"
  // },
  // {
  //   id: 8,
  //   question: "Which of the following is NOT a common tool in the MERN stack?",
  //   options: {
  //     a: "MongoDB",
  //     b: "Express",
  //     c: "React",
  //     d: "Ruby on Rails"
  //   },
  //   answer: "Ruby on Rails"
  // },
  // {
  //   id: 9,
  //   question:
  //     "In the software industry, what is the purpose of Continuous Integration (CI)?",
  //   options: {
  //     a: "To automate deployment processes",
  //     b: "To integrate new features into production manually",
  //     c: "To ensure frequent code integration and testing",
  //     d: "To monitor database performance"
  //   },
  //   answer: "To ensure frequent code integration and testing"
  // },
  // {
  //   id: 10,
  //   question: "What is a REST API?",
  //   options: {
  //     a: "A type of database management system",
  //     b: "A set of conventions for web services",
  //     c: "A programming language",
  //     d: "A server-side framework"
  //   },
  //   answer: "A set of conventions for web services"
  // }
];

console.log("quizQuestions length", quizQuestions.length);
var quesContainer = document.getElementById("quesContainer");
var question = document.getElementById("question");
var optionsList = document.getElementById("optionsList");
var nextBtn = document.getElementById("nextBtn");
var resultCard = document.getElementById("resultCard");
var correctAnswers = document.getElementById("correctAnswers");
var wrongAnswers = document.getElementById("wrongAnswers");
var score = document.getElementById("score");
var percentage = document.getElementById("percentage");
var resultStatus = document.getElementById("status");
var indexNumber = 0;
var correctAns = 0;
var wrongAns = 0;

const handleQuestion = () => {
  nextBtn.disabled = false;
  var questionPrint =
    indexNumber + 1 + ")" + " " + quizQuestions[indexNumber].question;
  var optionPrint = quizQuestions[indexNumber].options;
  question.innerHTML = questionPrint;
  optionsList.innerHTML = "";
  for (var key in optionPrint) {
    optionsList.innerHTML += `
    <form>
    <label>
    <input type="radio" name="quizOption" value="${optionPrint[key]}" onclick="checkAnswer(this)">
    ${optionPrint[key]}
    </label><br>
    </form>
    `;
  }

  if (indexNumber === quizQuestions.length - 1) {
    nextBtn.textContent = "Submit";
  }
};

const nextQuestion = () => {
  if (indexNumber < quizQuestions.length - 1) {
    nextBtn.disabled = false;
    indexNumber++;
    handleQuestion();
  } else {
    nextBtn.textContent = "Submit";
    if ((nextBtn.textContent = "Submit")) {
      nextBtn.onclick = submission();
    }
  }
};

const submission = () => {
  //   alert("Submitted");
  console.log("correctAns", correctAns);
  console.log("wrongAns", wrongAns);
  correctAnswers.innerHTML = correctAns;
  wrongAnswers.innerHTML = wrongAns;
  quesContainer.style.display = "none";
  resultCard.style.display = "block";
  score.innerHTML = correctAns;
  var per = (correctAns / quizQuestions.length) * 100;
  percentage.innerHTML = per;
  if (correctAns > 5 && correctAns <= 10) {
    resultStatus.innerHTML = "Pass";
  } else if (correctAns <= 5) {
    resultStatus.innerHTML = "fail";
  }
};

const checkAnswer = (element) => {
  var allOptions = optionsList.children;
  // var optionClick = element
  console.log("allOptions", allOptions);
  // return;
  //   var optionClick = element.innerText || element.textContent;
  var optionClick = element.value;
  var answerOption = quizQuestions[indexNumber].answer;
  console.log("answerOption", answerOption);
  // return;
  if (optionClick === answerOption) {
    console.log("check answer right", true);
    correctAns++;
  } else {
    console.log("check answer wrong", false);
    wrongAns++;

    // element.style.backgroundColor = "red";

    for (var i = 0; i < allOptions.length; i++) {
      if (allOptions[i].innerHTML.toLowerCase() == answerOption) {
        // allOptions[i].style.backgroundColor = "red";
        console.log("allOptions[i]", allOptions[i]);
        break;
      }
    }
  }
};

const restartQuiz = () => {
  indexNumber = 0;
  correctAns = 0;
  wrongAns = 0;
  handleQuestion();
  resultCard.style.display = "none";
  quesContainer.style.display = "block";
};

handleQuestion();
