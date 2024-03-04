let display = document.getElementById('display');
let expression = '';

function clearDisplay() {
    display.textContent = '0';
    expression = '';
}

function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
    expression += value;
}

function calculate() {
    let result = eval(expression);
    display.textContent = result;
    expression = result.toString();
}
