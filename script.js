class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = ''; 
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1); 
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return; 
        this.currentOperand = this.currentOperand.toString() + number.toString(); 
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return; 
        if (this.previousOperand !== '') {
            this.compute(); 
        }
        this.operation = operation; 
        this.previousOperand = this.currentOperand; 
        this.currentOperand = ''; 
    }

    compute() {
        let computation; 
        const previous = parseFloat(this.previousOperand); 
        const current = parseFloat(this.currentOperand); 
        if (isNaN(previous) || isNaN(current)) return;
        switch (this.operation) {
            case '+': 
                computation = previous + current; 
                break; 
            case '-': 
                computation = previous - current; 
                break; 
            case '*': 
                computation = previous * current; 
                break; 
            case '÷': 
                computation = previous / current; 
                break;
            default: 
                return;  
        }
        this.currentOperand = computation; 
        this.operation = undefined; 
        this.previousOperand = ''; 

        
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString(); 
        const integerDigits = parseFloat(stringNumber.split('.')[0]); 
        const decimalDigits = stringNumber.split('.')[1]; 
        let integerDisplay  
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`; 
        } else {
            return integerDisplay; 
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`; 
    }
        else {
            this.previousOperandTextElement.innerText = ''; 
        }
}
}

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operand');
const equalsButton = document.querySelector('#equalsButton');
const clearButton = document.querySelector('#clearButton');
const deleteButton = document.querySelector('#deleteButton');
const previousOperandTextElement = document.querySelector('#previousInput');
const currentOperandTextElement = document.querySelector('#currentInput');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.value);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.value);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
        calculator.compute();
        calculator.updateDisplay();
    });

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
 });

 deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
 });

 window.addEventListener('keydown', handleKeyboardInput); 

 function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
    }
    if (e.key === '.') {
        calculator.appendNumber('.');
        calculator.updateDisplay();
    }
    if (e.key === '=' || e.key === 'Enter') {
        calculator.compute();
        calculator.updateDisplay();
    }
    if (e.key === 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    }
    if (e.key === 'Escape') {
        calculator.clear();
        calculator.updateDisplay();
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        const operation = convertOperator(e.key);
        calculator.chooseOperation(operation);
        calculator.updateDisplay();
    }
}; 


function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷';
    if (keyboardOperator === '*') return '*';
    if (keyboardOperator === '-') return '-';
    if (keyboardOperator === '+') return '+';
}; 