// divide.test.js

const { divide } = require('./mathFunctions');

describe('divide function', () => {
  it('divides two positive numbers correctly', () => {
    expect(divide(6, 3)).toBe(2);
  });

  it('throws an error if dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });

  it('throws an error if arguments are not numbers', () => {
    expect(() => divide(6, 'a')).toThrow('Arguments must be numbers');
  });

  it('throws an error if one argument is missing', () => {
    expect(() => divide(6)).toThrow('Arguments must be numbers');
  });
});
