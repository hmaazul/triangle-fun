const sideA = document.querySelector('#input-side-a');
const sideB = document.querySelector('#input-side-b');
const checkHypotenuse = document.querySelector('#check-hypotenuse');
const checkSide = document.querySelector('#check-side');
// console.log(sideA.value());

function calculateHypotenuse(e){
    e.preventDefault();
    console.log(sideA.value);
}

checkSide.addEventListener('click',calculateHypotenuse);