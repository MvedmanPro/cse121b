/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */

function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (num1, num2){
    return num1 - num2;
}


const subtractNumbers = function () {
    let subtractNum1 = Number(document.querySelector("#subtract1").value);
    let subtractNum2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNum1, subtractNum2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers  */

const multiply = (a, b) => a * b;
const multiplyNumbers = () => {
  const num1 = Number(document.getElementById("factor1").value);
  const num2 = Number(document.getElementById("factor2").value);
  document.getElementById("product").value = multiply(num1, num2);
};
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = function(number1, number2){
    return number1 / number2;
}

const divideNumbers = () => {
    const numDividend = Number(document.querySelector("#dividend").value);
    const numDivisor = Number(document.querySelector("#divisor").value);
    document.getElementById("quotient").value = divide(numDividend, numDivisor);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();

const currentYear = currentDate.getFullYear();

document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector("#array").innerHTML = numArray;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numArray.map(number => number * 2) 

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numArray.map(number => number * 2).reduce((sum, number) => sum + number);