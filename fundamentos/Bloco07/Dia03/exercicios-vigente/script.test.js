const { it, expect } = require('@jest/globals');
const {sum} = require('./script');

describe('The sum of two values', () => {
  it('value of value1 + value2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
  });

  it('return of value0 + value0 = 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('throw errors', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});