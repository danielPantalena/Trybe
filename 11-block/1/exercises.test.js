// 1
const upercase = require('./exercise1');
describe('exercise1', () => {
  test('function upercase', () => {
    function callback(str) {
      expect(str).toBe('STR');
    }
    upercase('str', callback);
  });
});

// 2
const getUserName = require('./exercise2n3');
describe('exercise2', () => {
  test('got a name', () => {
    expect.assertions(1);
    return getUserName('4').then(name => {
      expect(name).toBe('Mark');
    });
  });
  test("didn't got a name", () => {
    expect.assertions(1);
    return getUserName('1').catch(err => {
      expect(err.error).toBe('User with 1 not found.');
    });
  });
});

// 3
describe('exercise3', () => {
  test('async/await', async () => {
    expect.assertions(2);
    try {
      const userName = await getUserName('4');
      expect(userName).toBe('Mark');
    } catch (err) {
      expect(err.error).toMatch('User with 4 not found.');
    }
    try {
      await getUserName('1');
    } catch (err) {
      expect(err.error).toMatch('User with 1 not found.');
    }
  });
});

// 4
const getRepos = require('./exercise4')
