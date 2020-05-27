// 1
let randomNumber = () => Math.floor(Math.random() * 101);

describe('Exercise1', () => {
  test('', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});

// 2
describe('Exercise2', () => {
  test('', () => {
    randomNumber.mockImplementationOnce((a, b) => a / b);
    expect(randomNumber(2, 1)).toBe(2);
  });
});

// 3
describe('Exercise3', () => {
  test('multiplicação', () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber(1, 1, 1)).toBe(1);
  });
  test('dobro', () => {
    randomNumber.mockReset();
    randomNumber.mockImplementation(a => a * 2);
    expect(randomNumber(2)).toBe(4);
  });
});

// 4
let { upperCase, firstCharacter, concatStrings } = require('./exercises4n5');

describe('Exercise4', () => {
  test('toUpperCase -> toLowerCase', () => {
    expect(upperCase('aAa')).toBe('AAA');
    upperCase = jest.fn().mockImplementationOnce(str => str.toLowerCase());
    expect(upperCase('AaA')).toBe('aaa');
  });
  test('return last char', () => {
    expect(firstCharacter('Dan')).toBe('D');
    firstCharacter = jest
      .fn()
      .mockImplementationOnce(str => str[str.length - 1]);
    expect(firstCharacter('Diegão')).toBe('o');
  });
  test('to 3 strings', () => {
    concatStrings = jest.fn().mockImplementationOnce((str1, str2, str3) => {
      return str1 + str2 + str3;
    });
    expect(concatStrings('a', 'b', 'c')).toBe('abc');
  });
});
