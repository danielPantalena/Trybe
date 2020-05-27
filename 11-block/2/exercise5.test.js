let functions = require('./exercises4n5');

describe('Exercise5', () => {
  test('upperCase -> lowerCase', () => {
    jest
      .spyOn(functions, 'upperCase')
      .mockImplementation(str => str.toLowerCase());
    expect(functions.upperCase('AaA')).toBe('aaa');
  });
  test('upperCase restored', () => {
    functions.upperCase.mockRestore();
    expect(functions.upperCase('aAa')).toBe('AAA');
  });
});
