const question = [
    {
        question: "which is larget animal in the world?",
        answers : [
            { text: "shark", correct: false},
            { text: "blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is larget desert in the world?",
        answers : [
            { text: "kalahari", correct: false},
            { text: "gobi", correct: false},
            { text: "sahara", correct: false},
            { text: "antarctica", correct: true},
        ]
    },
    {
        question: "which is larget animal in the world?",
        answers : [
            { text: "shark", correct: false},
            { text: "blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answers : [
            { text: "Asia", correct: false},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
            { text: "Australia", correct: true},
        ]
    },
    {
        question: "which is larget animal in the world?",
        answers : [
            { text: "shark", correct: false},
            { text: "blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    }


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextBtn.style.display = "block";


}

function showScore() {
    resetState();
    questionElement.innerHTML =`you scored ${score} out of ${question.length}!`;
    nextButtons.innerHTML ="play Again"
    nextButtons.style.display = "block";
}


 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
 }
nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();


