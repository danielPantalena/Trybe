const assert = require('assert');

// escreva a função removeMiddle para passar nos testes abaixo:
const removeMiddle = (arr) => arr.splice(Math.floor(arr.length / 2), 1);
// ============================================================

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
