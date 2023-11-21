const sideA = document.querySelector('#input-side-a');
const sideB = document.querySelector('#input-side-b');
const checkHypotenuse = document.querySelector('#check-hypotenuse');
const checkSide = document.querySelector('#check-side');
// console.log(sideA.value());

function calculateHypotenuse(e){
    e.preventDefault();
    var answer = 0;
    var sq1 = Math.pow(sideA.value,2);
    var sq2 = Math.pow(sideB.value,2);
    var sum = sq1+ sq2;
    answer = Math.sqrt(sum);
    //  console.log(answer);
    checkHypotenuse.innerText = "Hypotenuse is "+ answer;
}

checkSide.addEventListener('click',calculateHypotenuse);