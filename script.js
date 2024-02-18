let currentInput = '';
let currentOperation = null;
let resultDisplayed = false;

function appendInput(value) {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }
  if(currentInput === 'Error: division by 0!' || currentInput === 'Error: empty!'){
    currentInput='';
  }
  currentInput += value;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput !== '') {
    currentOperation = operation;
    currentInput += ' ' + operation + ' ';
    updateDisplay();
  }
}

function calculateResult() {
    if (currentOperation && currentInput !== '') {
      const expression = currentInput.replace(/[^-()\d/*+.]/g, '');
      try {
        const result = eval(expression);
  
        if (isNaN(result) || !isFinite(result)) {
          throw new Error("Invalid operation");
        }
  
        currentInput = result.toString();
        updateDisplay();
        resultDisplayed = true;
      } catch (error) {
        currentInput = 'Error: division by 0!';
        updateDisplay();
      }
    } else {
      currentInput = 'Error: empty!';
      updateDisplay();
    }
  }
  

function clearDisplay() {
  currentInput = '';
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
