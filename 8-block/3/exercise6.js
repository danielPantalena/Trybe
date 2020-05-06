const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// 1
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');
// 2
assert.deepStrictEqual(myFizzBuzz(6), 'fizz');
// 3
assert.deepStrictEqual(myFizzBuzz(10), 'buzz');
// 4
assert.deepStrictEqual(myFizzBuzz(4), 4);
// 5
assert.deepStrictEqual(myFizzBuzz('str'), false);