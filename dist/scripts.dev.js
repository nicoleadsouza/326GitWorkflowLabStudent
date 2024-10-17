"use strict";

var display = document.getElementById('display'); // Append number or operator to the display

function appendToDisplay(value) {
  display.value += value;
} // Clear the entire display


function clearDisplay() {
  display.value = '';
} // Delete the last character from the display


function deleteLast() {
  display.value = display.value.slice(0, -1);
} // Calculate and show the result


function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function runSquareRoot() {
  var v = calculateSquareRoot(display.value);
  display.value = v;
}

function runSquare() {
  // Hint: Use exponentiation
  var v = calculateSquare(display.value);
  display.value = v;
}

function runReciprocal() {
  // Hint: Reciprocal is 1/x
  var v = calculateReciprocal(display.value);
  display.value = v;
} // TODO: Implement run your functions here


document.addEventListener('keydown', function (event) {
  var key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {}

  if (key === 'Enter') {
    event.preventDefault();
    calculateResult();
  }

  if (key === 'Backspace') {
    deleteLast();
    event.preventDefault();
  }

  if (key === 'Escape') {
    clearDisplay();
  }
});
document.getElementById('display').addEventListener('input', function (event) {
  this.value = this.value.replace(/[^0-9+\-*/.]/g, '');
});
//# sourceMappingURL=scripts.dev.js.map
