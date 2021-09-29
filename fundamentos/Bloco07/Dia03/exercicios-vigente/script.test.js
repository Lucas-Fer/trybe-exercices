
const { expect } = require('@jest/globals');
const {sum, myRemove} = require('./script');

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

describe('Verify array and item', () => {
  it('return array', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
  });
});