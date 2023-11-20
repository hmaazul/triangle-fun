const Q1 = document.getElementsByName("q1");
const scoreOutput = document.querySelector("#score-output");
const submitAnswer = document.querySelector("#submit-answer");
var score = 0;

function calculateScore() {
    for (var i = 0; i < Q1.length; i++) {
        if (Q1[i].checked) {
            score += 1;
        }
    }
    console.log("success");
    scoreOutput.innerText = "Your Score is" + score;
}

submitAnswer.addEventListener('click', calculateScore);