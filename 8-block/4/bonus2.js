const assert = require('assert');

// escreva a função removeMiddle para passar nos testes abaixo:
const removeMiddle = (arr) => {
  let outAndIn = [];
  for (let i = 0; i <= Math.ceil(arr.length / 2); i++) {
    outAndIn.unshift(arr.pop());
  }
  for (let i = 1; i < outAndIn.length; i++) {
    arr.push(outAndIn[i]);
  }
  return [outAndIn[0]];
};
// ============================================================

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
