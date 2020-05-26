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
const getRepos = require('./exercise4');
describe('exercise4', () => {
  test('apiGitHub includes', async () => {
    const data = await getRepos('https://api.github.com/users/tryber/repos');
    expect(data.includes('sd-01-week4-5-project-todo-list')).toBe(false);
    expect(data.includes('sd-01-week4-5-project-meme-generator')).toBe(false);
  });
});

// 5
describe('exercise5', () => {
  beforeEach(() => console.log('1 - beforeEach')); // before everything
  afterEach(() => console.log('1 - afterEach')); // after '1 - test' and after everything
  test('', () => console.log('1 - test')); // after '1 - beforeEach' and before '1 - afterEach'

  describe('Scoped / Nested block', () => {
    beforeEach(() => console.log('2 - beforeEach')); // after '1 - afterEach' and before '2 - test'
    afterEach(() => console.log('2 - afterEach')); // after everything inside describe 'Scoped / Nested block'

    test('', () => console.log('2 - test')); // after '2 - beforeEach' and before '2 - afterEach'
  });
});

// 6
const { getAnimal, getAnimalByAge } = require('./exercise6');
// 6.1
describe('exercise 6.1', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(e => {
        expect(e.error).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});
// 6.2
describe('exercise 6.2', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(3).catch(err => {
        expect(err.error).toBe('Nenhum animal com essa idade!');
      });
    });
  });
});
