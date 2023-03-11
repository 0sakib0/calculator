const buttonSound = document.getElementById("button-sound");
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen")
const currentScreen = document.getElementById("screen-current");
const previousScreen = document.getElementById("screen-previous")
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

const updateDisplay = (currentValue, previousValue) => {
  if (currentValue.length > 10) {
    currentValue = currentValue.substring(0, 10);
  } 
  currentScreen.textContent = currentValue;
  previousScreen.textContent = previousValue;
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
       currentDisplayValue = `${currentDisplayValue} ${buttonValue} `
       previousDisplayValue = currentDisplayValue;
       currentDisplayValue = "";
       updateDisplay(currentDisplayValue,previousDisplayValue);
        break;

      case button.classList.contains("decimal"):
        if (!currentDisplayValue.includes(".")) {
          currentDisplayValue += ".";
          updateDisplay(currentDisplayValue);
        }
        break;
    }
  });
});


const operate = (num1, num2, operator) => {
 
}

