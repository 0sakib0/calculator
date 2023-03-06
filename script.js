console.log("mango");

const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
let display = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.value;
        display += buttonValue;
        result.value = display;
    });
});


