let functions = require('./exercises4n5');

describe('Exercise5', () => {
  test('upperCase -> lowerCase', () => {
    const mockUpperCase = jest
      .spyOn(functions, 'upperCase')
      .mockImplementation(str => str.toLowerCase());
    expect(functions.upperCase('AaA')).toBe('aaa');

    functions.upperCase.mockRestore();

    expect(functions.upperCase('aAa')).toBe('AAA');
  });
});
