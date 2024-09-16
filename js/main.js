const btn = document.getElementById("btn");
const lab1 = document.getElementById("lab1");
const lab2 = document.getElementById("lab2");
const lab3 = document.getElementById("lab3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

btn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    lab1.textContent = randomNum1;
    lab2.textContent = randomNum2;
    lab3.textContent = randomNum3;
}