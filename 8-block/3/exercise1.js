const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// 1
assert.deepStrictEqual(sum(4, 5), 9);
// 2
assert.deepStrictEqual(sum(0, 0), 0);
// 3 and 4
assert.deepStrictEqual(sum(4, '5'), 9);
