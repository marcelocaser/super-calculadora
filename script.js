let inputNumberA = null;
let inputNumberB = null;
let inputSoma = null;
let inputSubtractionOne = null;
let inputSubtractionTwo = null;
let inputMultiplication = null;
let inputDivisionOne = null;
let inputDivisionTwo = null;
let inputSquaredOne = null;
let inputSquaredTwo = null;
let inputRemainderOne = null;
let inputRemainderTwo = null;
let inputFactorialOne = null;
let inputFactorialTwo = null;

window.addEventListener("load", () => {
  inputNumberA = document.querySelector("#numberA");
  inputNumberB = document.querySelector("#numberB");
  inputSoma = document.querySelector("#sum");
  inputSubtractionOne = document.querySelector("#subtractionOne");
  inputSubtractionTwo = document.querySelector("#subtractionTwo");
  inputMultiplication = document.querySelector("#multiplication");
  inputDivisionOne = document.querySelector("#divisionOne");
  inputDivisionTwo = document.querySelector("#divisionTwo");
  inputSquaredOne = document.querySelector("#squaredOne");
  inputSquaredTwo = document.querySelector("#squaredTwo");
  inputRemainderOne = document.querySelector("#remainderOne");
  inputRemainderTwo = document.querySelector("#remainderTwo");
  inputFactorialOne = document.querySelector("#factorialOne");
  inputFactorialTwo = document.querySelector("#factorialTwo");
  inputNumberA.addEventListener("keyup", calculate);
  inputNumberB.addEventListener("keyup", calculate);
});

function calculate(event) {
  let valueFromA = parseInt(inputNumberA.value);
  let valueFromB = parseInt(inputNumberB.value);
  valueFromA = isNaN(valueFromA) ? 0 : valueFromA;
  valueFromB = isNaN(valueFromB) ? 0 : valueFromB;

  inputSoma.value = sum(valueFromA, valueFromB);
  inputSubtractionOne.value = subtraction(valueFromA, valueFromB);
  inputSubtractionTwo.value = subtraction(valueFromB, valueFromA);
  inputMultiplication.value = multiplication(valueFromA, valueFromB);
  inputDivisionOne.value = division(valueFromA, valueFromB);
  inputDivisionTwo.value = division(valueFromB, valueFromA);
  inputSquaredOne.value = squared(valueFromA, 2);
  inputSquaredTwo.value = squared(valueFromB, 2);
  inputRemainderOne.value = remainder(valueFromA) + " (" + remainder(valueFromA).length + ")";
  inputRemainderTwo.value = remainder(valueFromB) + " (" + remainder(valueFromB).length + ")";
  inputFactorialOne.value = valueFromA <= 21 ? formatNumber(factorial(valueFromA)) : factorial(valueFromA);
  inputFactorialTwo.value = valueFromB <= 21 ? formatNumber(factorial(valueFromB)) : factorial(valueFromB);
}

function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtraction(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function division(numberOne, numberTwo) {
  if (numberTwo === 0) {
    return "Divisão por 0";
  }
  return formatNumber(numberOne / numberTwo);
}

function multiplication(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function squared(number, power) {
  return number ** power;
}

function factorial(number) {
  if (number > 21) {
    return "Número muito grande";
  }
  return number < 0 ? -1 : number === 0 ? 1 : number * factorial(number - 1);
}

function remainder(number) {
  let remainders = [];
  for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
      remainders.push(index);
    }
  }
  return remainders;
}
