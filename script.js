const buttonSound = document.getElementById("button-sound");
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
const currentScreen = document.getElementById("screen-current");
const previousScreen = document.getElementById("screen-previous");
const decimal = document.getElementById("decimal");
const acButton = document.querySelector(".all-clear");
const equalButton = document.querySelector(".equal");
let currentDisplayValue = "";
let previousDisplayValue = "";
let operatorValue = "";


const updateDisplay = () => {
  if (currentDisplayValue.length > 10) {
    currentDisplayValue = currentDisplayValue.substring(0, 10);
  } 
  if (previousDisplayValue.length > 10) {
    previousDisplayValue = previousDisplayValue.substring(0, 10);
  }
  currentScreen.textContent = currentDisplayValue;
  previousScreen.textContent = previousDisplayValue;
};

const calculateResult = () => {
  if (operatorValue !== "" && previousDisplayValue !== "" && currentDisplayValue !== "") {
    const result = operate(parseFloat(previousDisplayValue), parseFloat(currentDisplayValue), operatorValue);
    currentDisplayValue = result.toString();
    previousDisplayValue = "";
    operatorValue = "=";
    updateDisplay();
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    switch (true) {
      case button.classList.contains("number"):
        if (operatorValue === "=") {
          previousDisplayValue = "";
          operatorValue = "";
        }
        currentDisplayValue += buttonValue;
        updateDisplay();
        break;

      case button.classList.contains("all-clear"):
        currentDisplayValue = "";
        previousDisplayValue = "";
        operatorValue = "";
        updateDisplay();
        break;

      case button.classList.contains("clear"):
        currentDisplayValue = currentDisplayValue.slice(0, -1);
        updateDisplay();
        break;

      case button.classList.contains("operator"):
        if (operatorValue !== "") {
          calculateResult();
        } 
        operatorValue = buttonValue;
        previousDisplayValue = currentDisplayValue + " " + operatorValue;
        currentDisplayValue = "";
        updateDisplay();
        break;

      case button.classList.contains("decimal"):
        if (!currentDisplayValue.includes(".")) {
          currentDisplayValue += ".";
          updateDisplay();
        }
        break;

      case button.classList.contains("equal"):
        calculateResult();
        break;
    }
  });
});

const operate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "error";
      } else {
        return num1 / num2;
      }
      break;
  }
  return parseFloat(result.toFixed(1));
};
