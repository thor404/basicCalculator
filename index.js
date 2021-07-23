


let a = document.getElementById("num1-el").value;
let b = document.getElementById("num2-el").value;

let num1 = parseInt(a);
let num2 = parseInt(b); 

// let num1 = parseInt( document.getElementById("num1-el").value)
// let num2 = parseInt( document.getElementById("num2-el").value)

let sumEl = document.getElementById("sum-el")


function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum : " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum : " + result
}

function divide() {
    let result = num1 / num2 
    sumEl.textContent = "Sum : " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum : " + result
}