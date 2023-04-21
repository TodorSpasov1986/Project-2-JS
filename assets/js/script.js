const questions = [{
        question: "How much is 2+2",
        answers: [{
                Text: "6",
                correct: false
            },
            {
                Text: "8",
                correct: false
            },
            {
                Text: "16",
                correct: false
            },
            {
                Text: "4",
                correct: true
            },
        ]
    },
    {
        question: "How much is 2x2",
        answers: [{
                Text: "6",
                correct: false
            },
            {
                Text: "4",
                correct: true
            },
            {
                Text: "16",
                correct: false
            },
            {
                Text: "8",
                correct: false
            },
        ]
    },
    {
        question: "How much is 2/2",
        answers: [{
                Text: "6",
                correct: false
            },
            {
                Text: "8",
                correct: false
            },
            {
                Text: "1",
                correct: true
            },
            {
                Text: "4",
                correct: false
            },
        ]
    },
    {
        question: "How much is 20x20",
        answers: [{
                Text: "600",
                correct: false
            },
            {
                Text: "80",
                correct: false
            },
            {
                Text: "160",
                correct: false
            },
            {
                Text: "400",
                correct: true
            },
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innderHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.claaList.add("correct");
        score++;
            }else{
                selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;

            })
            nextButton.style.display = "block";
}
function showScore(){ 
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
            }else{
                showScore();
            }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})
startQuiz();