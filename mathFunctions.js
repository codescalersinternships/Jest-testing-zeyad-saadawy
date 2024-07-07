// mathFunctions.js

function add(a, b) {
  if (arguments.length !== 2) {
    throw new Error('The add function requires exactly two parameters');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a + b;
}

function subtract(a, b) {
  if (arguments.length !== 2) {
    throw new Error('The subtract function requires exactly two parameters');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a - b;
}

function multiply(a, b) {
  if (arguments.length !== 2) {
    throw new Error('The multiply function requires exactly two parameters');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  if (a === 0 || b === 0) {
    return 0;
  }
  return a * b;
}

function divide(a, b) {
  if (arguments.length !== 2) {
    throw new Error('The divide function requires exactly two parameters');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
