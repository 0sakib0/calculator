console.log("mango");
const buttonSound = document.getElementById('button-sound');
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const acButton = document.querySelector(".all-clear");
let display = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.value;
        buttonSound.currentTime = 0;
        buttonSound.play();
        if (button.classList.contains("number")) {
            display += buttonValue;
            result.value = display;

        } else if (button.classList.contains("all-clear")) {
            result.value = "";
            display = "";
        } else if (button.classList.contains("clear")) {
            display = display.slice(0, -1);
            result.value = display;
        }
    });
});

console.log(acButton);
