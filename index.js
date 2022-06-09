function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operand, num1, num2) {
  switch (operand) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1 / num2);
      break;
  }
}

// Function to convert button input
function convertBtnInput(str) {
  switch (str) {
    case "zero":
      return 0;
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
  }
}

// Listen for Button Events
const btn = document.querySelectorAll(".btn");
btn.forEach(function (currentValue, currentIndex, listObj) {
  currentValue.addEventListener("click", (e) => {
    console.log(e.target.id);
    console.log(convertBtnInput(e.target.id));
    convertBtnInput(e.target.id);
  });
});
