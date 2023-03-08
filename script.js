console.log("mango");
const buttonSound = document.getElementById('button-sound');
const buttons = document.querySelectorAll("button");
const screen = document.getElementById("screen");
const decimal = document.getElementById("decimal");
const acButton = document.querySelector(".all-clear");
let currentDisplay = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.value;
        buttonSound.currentTime = 0;
        buttonSound.play();
        buttonSound.volume = 0.3; 
        
        if (currentDisplay.length > 10) {
            currentDisplay = currentDisplay.substr(0, 10);
          }

        if (button.classList.contains("number")) {
            currentDisplay += buttonValue;
            screen.value = currentDisplay;

        } else if (button.classList.contains("all-clear")) {
            screen.value = "";
            currentDisplay = "";

        } else if (button.classList.contains("clear")) {
            currentDisplay = currentDisplay.slice(0, -1);
            screen.value = currentDisplay;
        } else if (button.classList.contains("operator")) {
            currentDisplay += ` ${buttonValue} `;
            screen.value = currentDisplay;
        } else if (button.value == decimal.value) {
            currentDisplay += buttonValue;
            screen.value = currentDisplay;
        }
    });
});


