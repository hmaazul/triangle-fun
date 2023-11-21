const quizForm = document.querySelector('.quiz-form');
const scoreOutput = document.querySelector("#score-output");
const submitAnswer = document.querySelector("#submit-answer");

const correctAnswer = ["90°","right angle"];

function calculateScore(event){
    event.preventDefault();
    const formValue = new FormData(quizForm);
    // console.log(formValue.entries);

    var index=0;
    var score=0;

    for(let value of formValue.values()){
        if(value === correctAnswer[index]){
            score += 1;
        }
        index += 1;
    }
     scoreOutput.innerText = " Your Score is "+ score;
}

submitAnswer.addEventListener('click', calculateScore);