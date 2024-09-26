// Calculator
let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function addNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function addOperator(op) {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
    }
    display.value = result;
}

function calculateSin() {
    const result = Math.sin(parseFloat(currentNumber));
    display.value = result;
}

function calculateCos() {
    const result = Math.cos(parseFloat(currentNumber));
    display.value = result;
}

function calculateTan() {
    const result = Math.tan(parseFloat(currentNumber));
    display.value = result;
}

function calculateLog() {
    const result = Math.log(parseFloat(currentNumber));
    display.value = result;
}

function calculateSqrt() {
    const result = Math.sqrt(parseFloat(currentNumber));
    display.value = result;
}

function calculatePow() {
    const result = Math.pow(parseFloat(previousNumber), parseFloat(currentNumber));
    display.value = result;
}

// Generate calculator buttons
const buttons = document.querySelector('.calculator .buttons');
const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
const operators = ['+', '-', '*', '/'];
const functions = ['sin', 'cos', 'tan', 'log', 'sqrt', 'pow'];

numbers.forEach(number => {
    const button = document.createElement('button');
    button.textContent = number;
    button.onclick = () => addNumber(number);
    buttons.appendChild(button);
});

operators.forEach(operator => {
    const button = document.createElement('button');
    button.textContent = operator;
    button.onclick = () => addOperator(operator);
    buttons.appendChild(button);
});

functions.forEach(func => {
    const button = document.createElement('button');
    button.textContent = func;
    button.onclick = () => {
        switch (func) {
            case 'sin':
                calculateSin();
                break;
            case 'cos':
                calculateCos();
                break;
            case 'tan':
                calculateTan();
                break;
            case 'log':
                calculateLog();
                break;
            case 'sqrt':
                calculateSqrt();
                break;
            case 'pow':
                calculatePow();
                break;
        }
    };
    buttons.appendChild(button);
});

const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
equalsButton.onclick = calculate;
buttons.appendChild(equalsButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.onclick = clearDisplay;
buttons.appendChild(clearButton);

const backspaceButton = document.createElement('button');
backspaceButton.textContent = 'DEL';
backspaceButton.onclick = backspace;
buttons.appendChild(backspaceButton);