const sideInput = document.querySelectorAll('.input');
const checkAreaBtn = document.querySelector('#check-area-btn');
const outputArea = document.querySelector('#output-area');

function calculateArea(){
    // console.log(sideInput[0].value);
    var area =0;
    area = sideInput[0].value * sideInput[1].value;
    area = (1/2)*area;
    // console.log(area);
    outputArea.innerText = "Area of Triangle is "+ area;
}
checkAreaBtn.addEventListener('click', calculateArea);