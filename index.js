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
  if (num2 === 0) {
    return "Can't Divide by 0!";
  }
  return num1 / num2;
}

function operate(operand, num1, num2) {
  switch (operand) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

// Input Variables
let inputNum = "";
let tempOperand = "";
let tempNum1 = "";
let tempNum2 = "";
let displayOutput = 0;

// // Listen for Button Events
const display = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");
btn.forEach(function (currentValue, currentIndex, listObj) {
  currentValue.addEventListener("click", (e) => {
    let numRegex = /^\d$|\./;

    // Keep adding characters to Input num until the btn selection is not a number
    if (numRegex.test(e.target.textContent)) {
      inputNum += e.target.textContent;
      displayOutput = inputNum;
      // Clear input if clear button pressed
    } else if (e.target.textContent === "Clear") {
      tempNum1 = "";
      tempNum2 = "";
      inputNum = "";
      tempOperand = "";
      displayOutput = "0";
      // If backspace is selected, take latest character off of inputNum
    } else if (e.target.textContent === "⌫") {
      if (inputNum.length > 1) {
        inputNum = inputNum.slice(0, -1);
        displayOutput = inputNum;
      } else {
        inputNum = "";
        displayOutput = 0;
      }
    } else {
      // Perform math function if both tempNum1 and tempNum2 both have values
      if (tempNum1 != "") {
        tempNum2 = inputNum;
        inputNum = "";
        displayOutput = operate(
          tempOperand,
          parseFloat(tempNum1),
          parseFloat(tempNum2)
        );
        tempOperand = e.target.textContent;
        // Clear variables is equals button is hit to complete operation
        if (tempOperand === "=") {
          tempNum1 = "";
          tempNum2 = "";
          inputNum = "";
          tempOperand = "";
        } else {
          tempNum1 = displayOutput;
          tempNum2 = "";
        }
        // If the Equals button is selected before second num is enter, display error
      } else if (e.target.textContent === "=" && tempNum2 === "") {
        displayOutput = "Invalid Expression";
        tempNum1 = "";
        tempOperand = "";
        inputNum = "";
      } else {
        // If tempNum1 is empty, put input number into it
        if (tempNum1 === "") {
          tempNum1 = inputNum;
          inputNum = "";
          tempOperand = e.target.textContent;
        } else {
          // If tempNum1 has data already, put number into tempNum2 then evaluate
          tempNum2 = inputNum;
          inputNum = "";
          // Choose math function based on operator
          displayOutput = operate(
            tempOperand,
            parseFloat(tempNum1),
            parseFloat(tempNum2)
          );
          tempOperand = e.target.textContent;
          // Clear variables is equals button is hit to complete operation
          if (tempOperand === "=") {
            tempNum1 = "";
            tempNum2 = "";
            inputNum = "";
            tempOperand = "";
          } else {
            tempNum1 = displayOutput;
            tempNum2 = "";
            tempOperand;
          }
        }
      }
    }
    // Add expression to display
    display.textContent = displayOutput;
  });
});
