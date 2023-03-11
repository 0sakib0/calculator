const buttonSound = document.getElementById("button-sound");
const buttons = document.querySelectorAll("button");
const screen = document.getElementById("screen");
const decimal = document.getElementById("decimal");
const acButton = document.querySelector(".all-clear");
const equalButton = document.querySelector(".equal")
let currentDisplayValue = "";
let previousDisplayValue = "";
let operatorValue = "";

const playSound = () => {
  buttonSound.currentTime = 0;
  buttonSound.play();
  buttonSound.volume = 0.3;
};

const updateDisplay = (value) => {
  if (value.length > 10) {
    value = value.substring(0, 10);
  }
  screen.value = value;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.value;
    playSound();

    switch (true) {
      case button.classList.contains("number"):
        currentDisplayValue += buttonValue;
        updateDisplay(currentDisplayValue);
        break;

      case button.classList.contains("all-clear"):
        currentDisplayValue = "";
        updateDisplay(currentDisplayValue);
        break;

      case button.classList.contains("clear"):
        currentDisplayValue = currentDisplayValue.slice(0, -1);
        updateDisplay(currentDisplayValue);
        break;

      case button.classList.contains("operator"):
        previousDisplayValue = currentDisplayValue;
        operatorValue = buttonValue;
        currentDisplayValue = `${currentDisplayValue} ${buttonValue} `;
        updateDisplay(currentDisplayValue);
        operate(previousDisplayValue,operatorValue);
        break;
    }
  });
});


const operate = (num1,num2,operator) => {
  previousDisplayValue = num1;
  operatorValue = num2;
  console.log(previousDisplayValue);
  console.log(operatorValue);
}

