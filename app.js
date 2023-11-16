const angle1 = document.querySelector("#angle-1");
const angle2 = document.querySelector("#angle-2");
const angle3 = document.querySelector("#angle-3");
const isTriangle = document.querySelector("#is-triangle");
const isTraingleOutput = document.querySelector("#is-triangle-output");

function calculateSum(){
    const sum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
    return  sum;
    
}

function isTriangleValid(){
    
    if(calculateSum()=== 180){
        console.log(' Thats a perfect traingle');
        isTraingleOutput.innerText = "Thats a perfect traingle";
    }
    else{
        isTraingleOutput.innerText = "Ohh no that's not a perfect combination";
    }
}

isTriangle.addEventListener('click', isTriangleValid);