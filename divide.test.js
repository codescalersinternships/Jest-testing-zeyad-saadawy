// divide.test.js

const { divide } = require('./mathFunctions');

describe('divide function', () => {
  it('divides two positive numbers correctly', () => {
    expect(divide(6, 3)).toBe(2);
  });

  it('throws an error if dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });

  it('throws an error if less than 2 arguments are provided', () => {
    expect(() => divide(6)).toThrow('The divide function requires exactly two parameters');
  });

  it('throws an error if more than 2 arguments are provided', () => {
    expect(() => divide(6, 3, 2)).toThrow('The divide function requires exactly two parameters');
  });

  it('throws an error if arguments are not numbers', () => {
    expect(() => divide(6, 'a')).toThrow('Arguments must be numbers');
  });

  it('throws an error if arguments are not numbers', () => {
    expect(() => divide('a',6)).toThrow('Arguments must be numbers');
  });
});
