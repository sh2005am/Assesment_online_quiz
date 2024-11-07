const questions = [
    {
      question: "What is the capital of India?",
      options: ["Berlin", "Madrid", "Delhi", "Lisbon"],
      answer: 2
    },
    {
      question: "What is the largest planet in the solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Neptune"],
      answer: 2
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1
    },
    {
      question: "In which continent is Sri Lanka located?",
      options: ["Africa", "Asia", "Europe", "Australia"],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
  let userAnswers = new Array(questions.length).fill(null);
  
  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestion];
    questionContainer.innerHTML = `
      <p>${question.question}</p>
      <div class="options">
        ${question.options.map((option, index) => `
          <label>
            <input type="radio" name="option" value="${index}" ${userAnswers[currentQuestion] === index ? "checked" : ""}>
            ${option}
          </label><br>
        `).join('')}
      </div>
    `;
  
    document.getElementById("prev-btn").disabled = currentQuestion === 0;
    document.getElementById("next-btn").style.display = currentQuestion === questions.length - 1 ? "none" : "inline";
    document.getElementById("submit-btn").style.display = currentQuestion === questions.length - 1 ? "inline" : "none";
  }
  
  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  }
  
  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      saveAnswer();
      currentQuestion++;
      loadQuestion();
    }
  }
  
  function saveAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      userAnswers[currentQuestion] = parseInt(selectedOption.value);
    }
  }
  
  function submitQuiz() {
    saveAnswer();
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });
  
    document.getElementById("score-container").style.display = "block";
    const a=score/questions.length*100;
    document.getElementById("score-container").innerHTML = `Your score: ${a} %}`;
    document.querySelector(".buttons").style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", loadQuestion);
  