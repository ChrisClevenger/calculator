const integers = document.querySelectorAll('.number'); 
const operationButtons = document.querySelectorAll('.operand'); 
const equalsButton = document.querySelector('#equalsButton'); 
const clearButton = document.querySelector('#clearButton'); 
const deleteButton = document.querySelector('#deleteButton'); 
const previousOperand = document.querySelector('#previousOperand'); 
const currentOperand = document.querySelector('#currentOperand'); 

class Calculator {
    constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand; 
    this.currentOperand = currentOperand; 
    this.clear(); 
}


clear() {
    this.currentOperand = ''; 
    this.previousOperand = ''; 
    this.operation = undefined; 
}

//function delete() {

//}; 

appendNumber(number) {
    this.currentOperand = number; 
}

chooseOperation(operation) {

}

//compute() {

//}

updateDisplay() {
    this.currentOperand.innerText = this.currentOperand; 

}
}; 
//Array holder for button logs

const i = [];  

// Function to take button presses and convert to string (of integers)

/* document.addEventListener('DOMContentLoaded', function() {
    integers.forEach(function(integer) {
      integer.addEventListener('click', function(e) {
        i.push(this.value);

        // Convert array to string
   
    let integerString = i.toString(); 

    // Remove commas

    integerString = integerString.replaceAll(',', ''); 

    //Log for new integerString

    console.log(integerString); 
      });
    });
  }); 
  */

const calculator = new Calculator(previousOperand, currentOperand); 

integers.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.value); 
        calculator.updateDisplay(); 
    })
}); 