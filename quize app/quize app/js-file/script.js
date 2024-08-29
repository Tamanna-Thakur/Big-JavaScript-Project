const quizedata = [
  {
    question: "HTML Stand for",
    options: [
      "Hyper text markup language",
      "Hyper text and link markup language",
      "Hyper text machine language",
      "none of these",
    ],
    Correct: 0,
  },
  {
    question:
      "which of the following tag is used to insert a line break in html",
    options: ["<h1>", "<p>", "<b>", "<br>"],
    Correct: 3,
  },
  {
    question:
      "which of the following element is responsible for the making the text bold in html",
    options: ["<pr>", "<b>", "hr>", "<br>"],
    Correct: 1,
  },
  {
    question:
      "which of the following tag is used for inserting the largest heading in html",
    options: ["<h1>", "<h2>", "<h4>", "<h5>"],
    Correct: 0,
  },
  {
    question: "which css property is used to set the size of the Html Text",
    options: ["size", "font-size", "size-font", "none of these"],
    Correct: 1,
  },
  {
    question: "What is the full form of CSS",
    options: [
      "casecading style sheet ",
      "cascading style sheet",
      "color style sheet",
      "none of these",
    ],
    Correct: 0,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["font", "class", "styles", "style"],
    Correct: 3,
  },
  {
    question: "Which is the correct CSS syntax?",
    options: [
      "body:color=black;",
      "body {color: black;}",
      "{body:color=black;}",
      "{body;color:black;}",
    ],
    Correct: 1,
  },
  {
    question: "How do you insert a comment in a CSS file?",
    options: [
      "// this is a comment",
      "' this is a comment",
      "/* this is a comment */",
      "// this is a comment //",
    ],
    Correct: 2,
  },
  {
    question: "Which property is used to change the background color?",
    options: ["bgcolor", "color", "background-color", "backgroundColor"],
    Correct: 2,
  },

  {
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {text-decoration:none;}",
      "a {underline:none;}",
      "a {decoration:no-underline;}",
      "a {text-decoration:no-underline;}",
    ],
    Correct: 0,
  },
  {
    question:
      "Which JavaScript event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onmouseclick", "onmouseover", "onclick"],
    Correct: 3,
  },
  {
    question: "How do you write a JavaScript array?",
    options: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    ],
    Correct: 0,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)", "round(7.25)"],
    Correct: 1,
  },
  {
    question: "How does a WHILE loop start?",
    options: [
      "while (i <= 10)",
      "while i = 1 to 10",

      "while (i <= 10; i++)",
      "while (i => 10)",
    ],
    Correct: 0,
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: [
      "'This is a comment",
      "//This is a comment",
      "<!--This is a comment-->",
      "*This is a comment*",
    ],
    Correct: 1,
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors = 'red', 'green', 'blue'",
    ],
    Correct: 0,
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5; i++)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5)",
    ],
    Correct: 1,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function:myFunction()",
      "function = myFunction()",
      "function myFunction()",
      "create function myFunction()",
    ],
    Correct: 2,
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call function myFunction()",
      "call myFunction()",
      "myFunction()",
      "Call.myFunction()",
    ],
    Correct: 2,
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
    Correct: 0,
  },
  {
    question:
      "How do you write a JavaScript conditional statement to check if 'i' is NOT equal to 5?",
    options: ["if i <> 5", "if (i != 5)", "if (i <> 5)", "if i =! 5 then"],
    Correct: 1,
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<body bg='yellow'>",
      "<body style='background-color:yellow;'>",
      "<background>yellow</background>",
      "<body background='yellow'>",
    ],
    Correct: 1,
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<section>", "<footer>", "<foot>"],
    Correct: 2,
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["title", "alt", "src", "longdesc"],
    Correct: 1,
  },
];

let currentquize = 0;
let score = 1;
let userScore = 0;

//update the local storage
//save userscore
function saveuserscore() {
  localStorage.setItem("LastScore", userScore);
}
// Load user score from local storage
function loadUserScore() {
  const savedScore = localStorage.getItem("LastScore");
  if (savedScore) {
    userScore = parseInt(savedScore);
  }
}
//save question number

function saveQueScore(){
  localStorage.setItem('QueScore',score);
}

function loadsaveQueScore(){
  const quesScore=localStorage.getItem('QueScore');
  if(quesScore){
    score=parseInt(quesScore)
    scoreupdate.innerText = `${score}/${quizedata.length}`;

  }
}
//save quize state

function savequizedata() {
  //// Save quiz state to localStorage (only saving currentquize)
  const quizestate = {
    currentquize: currentquize,
  };
  localStorage.setItem("quizestate", JSON.stringify(quizestate));
}
//// Load quiz state from localStorage
function loadquizestate() {
  const quizestate = JSON.parse(localStorage.getItem("quizestate"));
  if (quizestate) {
    currentquize = quizestate.currentquize;
  }
}

// Load the current question
window.addEventListener("load", () => {
  loadquizestate();
  loadUserScore();
  loadsaveQueScore();
  loadquestion();
});

const question_heading = document.querySelector(".question-head");
const ques_option = document.querySelectorAll(".option-button");
const nextbtn = document.querySelector(".next");
const scoreupdate = document.querySelector(".scor");
const timer = document.querySelector("button");
const quize_container = document.querySelector(".quize-container");
let timeleft = 30;
let timerstop;

function updatetimer() {
  timeleft--;
  timer.innerText = "0:" + (timeleft < 10 ? "0" : "") + timeleft;

  if (timeleft === 15) {
    document.body.style.backgroundColor = "#D4D69F8C";
    timer.style.backgroundColor = "#C5B1006E";
    nextbtn.style.color = "#C58800";
  } else if (timeleft === 5) {
    document.body.style.backgroundColor = "#DBADAD";
    timer.style.backgroundColor = "#C50C006E";
    nextbtn.style.color = "#C50000";
  }

  if (timeleft >= 0) {
    timerstop = setTimeout(updatetimer, 1000); // Continue the countdown
  } else {
    clearTimeout(timerstop); // Stop the timer when time runs out
    alert("time is up");
    funloadquestion();// Call your function when time runs out
   
  }
}

// Initial call to start the timer
updatetimer();

function resettimer() {
  clearTimeout(timerstop); // Clear the existing timer
  timeleft = 30; // Reset time
  timer.innerText = "0:" + (timeleft < 10 ? "0" : "") + timeleft;
  document.body.style.backgroundColor = ""; // Reset background colors
  timer.style.backgroundColor = "";
  nextbtn.style.color = "";
  timerstop = setTimeout(updatetimer, 1000); // Restart the timer
}

//desabled the option after the click option one
const disabledOp = () => {
  ques_option.forEach((btn) => {
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
  });
};

//enable option
const enabledOp = () => {
  ques_option.forEach((btn) => {
    btn.disabled = false;
    btn.style.cursor = "";
  });
};

//choose correct one
const chooseCorr = () => {
  ques_option.forEach((curOp, index) => {
    let ansindex = index;
    curOp.addEventListener("click", (e) => {
      console.log(ansindex);
      if (ansindex === quizedata[currentquize].Correct) {
        curOp.style.borderColor = "#35BD3A";
        savequizedata(currentquize);
        userScore = userScore + 1;
        saveuserscore(userScore);
        console.log(userScore);
      } else {
        curOp.style.borderColor = "#FF7A7A";
        savequizedata(currentquize);
      }
      disabledOp();
      saveuserscore(userScore);
    });
  });
};
chooseCorr();

//visible the question and their option
const loadquestion = () => {
  const { question, options } = quizedata[currentquize];
  question_heading.innerText = question;
  options.forEach((currop, index) => {
    window[`option_${index + 1}`].innerText = currop;
  });
};
loadquestion();

///reset the borderstyle condition
const reset = () => {
  ques_option.forEach((curOp, index) => {
    let ansindex = index;
    curOp.style.borderColor = "";
  });
};

//call next question

function funloadquestion() {
  currentquize++;
  if (currentquize <quizedata.length) {
    score++;
    scoreupdate.innerText = `${score}/${quizedata.length}`;
    reset();
    loadquestion();
    enabledOp();
    resettimer();
    saveQueScore(); //save question number
    savequizedata(); // Save state after moving to the next question
    

  } else {
    localStorage.removeItem("quizestate");
    localStorage.removeItem("LastScore");
    localStorage.removeItem('QueScore');
 

  }

  if (currentquize > quizedata.length) {
    document.body.innerHTML = `
     <div class="progress-baar">
      <div class="prog-image">
          <img src="/Group 4.png">
          <p>Result</p>
      </div>
  
     <div class="result">
      <img class="vector-green" src="/Vector 4 (2).png">
      <div class="baar">
           <img class="vector-5" src="/Vector 5 (1).png">
      </div>
     </div>
     <div class="marks">
          <p class="current-score">25%</p>
          <p class="total-score">25/25</p>
          <p class="left-score">30%</p>
      </div>
  
  
    <div class="suggest-btn">
      <p class="suggest">"Keep learning you have a good score"</p>
      <button class="retry"><<< Retry</button>
    </div>
  
  
      </div>`;

    const greenbar = document.querySelector(".baar");
    const scor = document.querySelector(".current-score");
    const tot_score = document.querySelector(".total-score");
    const lef_score = document.querySelector(".left-score");
    const feedback = document.querySelector(".suggest");

    let progrees = Math.floor((userScore / 25) * 100);

    greenbar.style.width = progrees + "%";
    scor.innerText = progrees + "%";
    tot_score.innerText = `${userScore}/${quizedata.length}`;
    lef_score.innerText = 100 - progrees + "%";

    audio.pause();
    timeleft = 0;
    window.alert = null;

    if (userScore <= 10 && userScore <= 20) {
      feedback.innerText = "  Oops you have bad marks 😕";
    }
    if (userScore <= 25) {
      feedback.innerText = "Keep learning you have a good score";
    }

    document.body.style.backgroundColor = "white";
    const agintry = document.querySelector(".retry");

    agintry.addEventListener("click", () => {
      location.reload();
    });
  }
}
nextbtn.addEventListener("click", funloadquestion);

//sound in background

const audio = document.querySelector("audio");
const soundIcon = document.querySelector("#audio-image");

soundIcon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    soundIcon.src = "/sound.jpeg"; // Change this to the path of your soundon icon
  } else {
    audio.pause();
    soundIcon.src = "/soundof.jpeg"; // Change this to the path of your mute icon
  }
});
