const questions = [
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0
  },
  {
    question: "Which attribute specifies an alternate text for an image?",
    options: ["title", "src", "alt", "description"],
    correct: 2
  },
  {
    question: "Which tag is used for the largest heading?",
    options: ["<h6>", "<head>", "<heading>", "<h1>"],
    correct: 3
  },
  {
    question: "Which element is used for the main block of content?",
    options: ["<header>", "<main>", "<section>", "<div>"],
    correct: 1
  },
  {
    question: "Which tag is used to make an unordered bullet list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1
  },
  {
    question: "Which property changes the text color of an element?",
    options: ["background-color", "color", "font-color", "text-style"],
    correct: 1
  },
  {
    question: "Which property is used to create a flex container?",
    options: ["position: flex", "display: flex", "float: left", "align-items: center"],
    correct: 1
  },
  {
    question: "How do you select an element with id='header' in CSS?",
    options: [".header", "#header", "*header", "header"],
    correct: 1
  },
  {
    question: "Which property controls the size of text?",
    options: ["text-size", "font-style", "font-size", "text-style"],
    correct: 2
  },
  {
    question: "Which property is used to add space INSIDE an element's border?",
    options: ["margin", "padding", "spacing", "gap"],
    correct: 1
  },
  {
    question: "Which method selects an HTML element using its ID?",
    options: ["querySelectorAll()", "getElementsByClassName()", "getElementById()", "querySelectorID()"],
    correct: 2
  },
  {
    question: "How do you listen for a click event on a button?",
    options: ["btn.onClick(fn)", "btn.addEventListener('click', fn)", "btn.attachEvent('click')", "btn.listen('click', fn)"],
    correct: 1
  },
  {
    question: "Which keyword creates a block-scoped variable in modern JS?",
    options: ["var", "let", "global", "dim"],
    correct: 1
  },
  {
    question: "Which array method adds a new element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0
  },
  {
    question: "What does event.preventDefault() do inside a form submit handler?",
    options: ["Stops JS execution", "Prevents page reload", "Clears input fields", "Deletes event listener"],
    correct: 1
  }
];

let currentIdx = 0;
let score = 0;

function loadQuestion() {
  let q = questions[currentIdx];

  document.getElementById('statusText').innerText = "Question " + (currentIdx + 1) + " of " + questions.length;
  document.getElementById('questionText').innerText = (currentIdx + 1) + ". " + q.question;

  let progressPercent = (currentIdx / questions.length) * 100;
  document.getElementById('progressFill').style.width = progressPercent + "%";

  let container = document.getElementById('optionsContainer');
  container.innerHTML = "";

  for (let i = 0; i < q.options.length; i++) {
    let btn = document.createElement('button');
    btn.className = "option-btn";
    btn.innerText = q.options[i];
    btn.onclick = function() {
      checkAnswer(i);
    };
    container.appendChild(btn);
  }
}

function checkAnswer(selectedIndex) {
  let correctIndex = questions[currentIdx].correct;
  let buttons = document.querySelectorAll('.option-btn');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  if (selectedIndex === correctIndex) {
    score++;
    buttons[selectedIndex].classList.add('correct');
  } else {
    buttons[selectedIndex].classList.add('wrong');
    buttons[correctIndex].classList.add('correct');
  }

  currentIdx++;

  setTimeout(function() {
    if (currentIdx < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 800);
}

function showResult() {
  document.getElementById('progressFill').style.width = "100%";
  document.getElementById('statusText').innerText = "Quiz Completed!";
  document.getElementById('quizContent').style.display = "none";
  document.getElementById('resultBox').style.display = "flex";

  document.getElementById('scoreDisplay').innerText = "Your Score: " + score + " / " + questions.length;

  let feedback = document.getElementById('feedbackText');
  if (score >= 12) {
    feedback.innerText = "Excellent! You have strong Frontend fundamentals.";
  } else if (score >= 8) {
    feedback.innerText = "Good job! A little practice will make it perfect.";
  } else {
    feedback.innerText = "Keep practicing! Review basic HTML, CSS, and JS topics.";
  }
}

function resetQuiz() {
  currentIdx = 0;
  score = 0;
  document.getElementById('quizContent').style.display = "block";
  document.getElementById('resultBox').style.display = "none";
  loadQuestion();
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  let btn = document.getElementById('themeBtn');
  if (document.body.classList.contains('light-theme')) {
    btn.innerText = "Dark Mode";
  } else {
    btn.innerText = "Light Mode";
  }
}

loadQuestion();