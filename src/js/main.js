  // ******************************* //
 // **QUIZ QUESTIONS AND ANSWERS*** //
// ******************************* //

const quizData = [
    {
      question: "What aspect of development interests you the most?",
      options: [
        { text: "Building websites and web applications", result: "Web Developer" },
        { text: "Creating mobile applications", result: "Application Developer" },
        { text: "Working with large datasets and databases", result: "Data Engineer" },
        { text: "Designing user interfaces and user experiences", result: "UI/UX Designer" }
      ]
    },
    {
      question: "Which programming languages do you enjoy working with?",
      options: [
        { text: "JavaScript", result: "Web Developer" },
        { text: "Swift or Kotlin", result: "Application Developer" },
        { text: "SQL or Python", result: "Data Engineer" },
        { text: "HTML/CSS and Adobe XD/Sketch", result: "UI/UX Designer" }
      ]
    },
    {
      question: "What type of projects do you see yourself working on?",
      options: [
        { text: "Building interactive websites and e-commerce platforms", result: "Web Developer" },
        { text: "Developing mobile apps for iOS and Android", result: "Application Developer" },
        { text: "Creating data pipelines and optimizing database performance", result: "Data Engineer" },
        { text: "Designing intuitive user interfaces and engaging user experiences", result: "UI/UX Designer" }
      ]
    },
    {
      question: "What software tools do you enjoy using?",
      options: [
        { text: "Visual Studio Code and React", result: "Web Developer" },
        { text: "Xcode or Android Studio", result: "Application Developer" },
        { text: "Jupyter Notebook and Apache Spark", result: "Data Engineer" },
        { text: "Adobe XD or Sketch", result: "UI/UX Designer" }
      ]
    },
    {
      question: "What career path appeals to you the most?",
      options: [
        { text: "Building scalable web applications and leading development teams", result: "Web Developer" },
        { text: "Creating innovative mobile apps and exploring emerging technologies", result: "Application Developer" },
        { text: "Working with big data and developing data-driven solutions", result: "Data Engineer" },
        { text: "Crafting beautiful user interfaces and focusing on user-centered design", result: "UI/UX Designer" }
      ]
    }
  ];
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submitBtn');
  const resultElement = document.getElementById('result');
  
  let currentQuestion = 0;
  let answers = [];
  
  // Display the current question and options
  function loadQuestion() {
    const quizQuestion = quizData[currentQuestion];
    questionElement.textContent = quizQuestion.question;
    optionsElement.innerHTML = '';
  
    for (let i = 0; i < quizQuestion.options.length; i++) {
      const option = document.createElement('button');
      option.textContent = quizQuestion.options[i].text;
      option.classList.add('option');
      option.addEventListener('click', selectAnswer.bind(null, i));
      optionsElement.appendChild(option);
    }
  }
  
  // Select an answer for the current question
  function selectAnswer(optionIndex) {
    answers[currentQuestion] = optionIndex;
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Show the final result
  function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    submitButton.style.display = 'none';
  
    // Calculate the result based on the selected answers
    const result = calculateResult();
    resultElement.textContent = result;
  }
  
  // Calculate the final result based on the selected answers
  function calculateResult() {
    // Define the result mapping based on the selected answers
    const resultMapping = {
      "0": "Web Developer",
      "1": "Application Developer",
      "2": "Data Engineer",
      "3": "UI/UX Developer",
      // Add more result mappings here...
    }
    
    ;
  
    // Calculate the most frequent answer index
    const answerCounts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});
  
    const mostFrequentAnswerIndex = Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b);
  
    // Get the corresponding result from the result mapping
    return resultMapping[mostFrequentAnswerIndex];
  }
  
  // Load the first question
  loadQuestion();
  