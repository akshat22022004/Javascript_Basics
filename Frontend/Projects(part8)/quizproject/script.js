document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicelist = document.getElementById("choice-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score-display");

    const questions = [

    ]
    let currentQuestionIndex = 0;
    let score = 0;
    startBtn.addEventListener('click',startQuiz );
    function startQuiz(){
        startBtn.classList.add("hide");
        resultContainer.classList.add("hide"); // should be hidden
        questionContainer.classList.remove("hide"); // should be visible
        showQuestion();

    }

    function showQuestion(){
        nextBtn.classList.remove("hide");   
        restartBtn.classList.remove("hide");
        questionText.innerText = questions[currentQuestionIndex].question;
        choicelist.innerHTML = ""; // clear prevoius choices
        questions[currentQuestionIndex].choices.forEach((choice) => {
            const li = document.createElement("li");
            li.innerText = choice;
            li.addEventListener("click", () => checkAnswer(choice)); // using a callback function
            choicelist.appendChild(li);
        });
    }

    function checkAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (choice === correctAnswer) {
            score++;
        }
        nextBtn.classList.add("hide");  
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            questionContainer.classList.add("hide");
            resultContainer.classList.remove("hide");
            scoreDisplay.innerText = `Your score is ${score} out of ${questions.length}`;
        }
    }

    function showResult() {
        questionContainer.classList.add("hide");
        resultContainer.classList.remove("hide");
        scoreDisplay.innerText = `Your score is ${score} out of ${questions.length}`;
    }   

    restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        startQuiz();
    });
})