let myNum = document.getElementById("count");
let increaseBtn = document.getElementById("btn1");
let decreaseBtn = document.getElementById("btn2");
let resetBtn = document.getElementById("btn3");


function inc() {
    myNum.textContent++;
}

function dec() {
    myNum.textContent--;
}

function reset() {
    myNum.textContent = 0;
}
