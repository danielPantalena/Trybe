// exercise 1 - function sum
const sum = require('./exercise1');
describe('exercise1 - function sum:', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});

// exercise 2 - function myIndexOf
const myIndexOf = require('./exercise2');
describe('exercise 2 - function myIndexOf:', () => {
  test('index of 3 in [1, 2, 3, 4] equals 2', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  });
  test('index of 5 in [1, 2, 3, 4] equals -1', () => {
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
});

// exercise 3 - function mySum
const mySum = require('./exercise3');
describe('exercise 3 - function mySum:', () => {
  test('mySum([1, 2, 3, 4]) return 10', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
  });
  test('mySum([1, -2, -3, 4]) return 0', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0);
  });
});

// exercise 4 - function myRemove
const myRemove = require('./exercise4');
describe('exercise 4 - function myRemove:', () => {
  test('myRemove([1, 2, 3, 4], 3) return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
  test('myRemove([1, 2, 3, 4], 3) NOT return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });
});

// exercise 5 - function myRemoveWithoutCopy
const myRemoveWithoutCopy = require('./exercise5');
describe('exercise 5 - function myRemoveWithoutCopy:', () => {
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) return [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) NOT return [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([
      1,
      2,
      3,
      4,
    ]);
  });
  test('myRemoveWithoutCopy([1, 2, 3], 5) return [1, 2, 3]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
  });
  test('myRemoveWithoutCopy([1, 2, 3, 4], 5) return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});

// exercise 6 - function myFizzBuzz
const myFizzBuzz = require('./exercise6');
describe('exercise 6 - function myFizzBuzz:', () => {
  test("myFizzBuzz(15) return 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test("myFizzBuzz(6) return 'fizz'", () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  test("myFizzBuzz(10) return 'buzz'", () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('myFizzBuzz(4) return 4', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  test("myFizzBuzz('str') return false", () => {
    expect(myFizzBuzz('str')).toBe(false);
  });
});

// exercise 7
const thereIs = '';
describe('exercise 7:', () => {
  test('therrIs is a string', () => {
    expect(typeof thereIs).toBe('string');
  });
});

// exercise 8
function thereIsFun() {}
describe('exercise 8:', () => {
  test('therIsFun is a funciton', () => {
    expect(typeof thereIsFun).toBe('function');
  });
});

// exercise 10
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('exercise 10:', () => {
  test('comparing objects', () => {
    expect(obj1).toStrictEqual(obj2);
    expect(obj1).not.toStrictEqual(obj3);
    expect(obj2).not.toStrictEqual(obj3);
  });
});

// exercise 11
const isAbove = require('./exercise11');
describe('exercise 11 - function isAbove:', () => {
  test('2 is above 1', () => {
    expect(true).toStrictEqual(isAbove(2, 1));
  });
});
