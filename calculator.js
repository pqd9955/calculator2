function handleClick(value) {
  if (!isNaN(value)) {
    currentNumber += value;
    updateDisplay(currentNumber);
  } else {
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        if (!result) {
          result = Number(currentNumber);
        } else {
          previousNumber = currentNumber;
          calculate();
        }
        operation = value;
        currentNumber = '';
        break;
      case '=':
        if (operation && currentNumber) {
          previousNumber = currentNumber;
          calculate();
        }
        break;
      case 'C':
        clearDisplay();
        break;
    }
  }
}

function calculate() {
  let num1 = result;
  let num2 = Number(currentNumber);
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  updateDisplay(result);
  operation = null;
  currentNumber = '';
}

