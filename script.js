
let firstNumber = "";
let operator = "";
let secondNumber = "";
let isSecondNumber = false;
let isCalculated = false;

const display = document.getElementById("display");

function pressNumber(number) {
    if (isCalculated) {
        clearDisplay();
    }

    if (number === "." &&
        display.value.includes(".")) {
        return;
    }

    display.value += number;
}

function pressOperator(op) {
    if (display.value === "") {
        return;
    }

    if (operator && isSecondNumber) {
        calculate();
    }

    firstNumber = display.value;
    operator = op;
    isSecondNumber = true;
    isCalculated = false;
    display.value = "";
}

function calculate() {
    if (
        firstNumber === "" ||
        operator === "" ||
        display.value === ""
    ) {
        return;
    }

    secondNumber = display.value;

    const a = Number(firstNumber);
    const b = Number(secondNumber);
    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            if (b === 0) {
                display.value = "Cannot divide by zero";
                resetCalculation();
                isCalculated = true;
                return;
            }
            result = a / b;
            break;
    }

    display.value = String(result);
    firstNumber = String(result);
    operator = "";
    secondNumber = "";
    isSecondNumber = false;
    isCalculated = true;
}

function clearDisplay() {
    display.value = "";
    resetCalculation();
    isCalculated = false;
}

function resetCalculation() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    isSecondNumber = false;
}

function deleteLast() {
    if (isCalculated) {
        clearDisplay();
        return;
    }

    display.value = display.value.slice(0, -1);
}
