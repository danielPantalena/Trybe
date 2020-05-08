const assert = require('assert');

// ================================================
const getLargestNumber = (arr) => arr.reduce((max, n) => Math.max(max, n));
// =================================================

const getLargestNumber = (array) => {
  let largest = 0;
  for (let i in array) {
    largest = Math.max(largest, array[i]);
  }
  return largest;
};

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
/*
Use a variável parameter como parâmetro da função acima, escreva testes
para verificar se a mesma está retornando a como se vê na variável result
e, caso não esteja, altere o código para que ele passe nos testes.
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
a função aos poucos:
*/
assert.deepStrictEqual(getLargestNumber(parameter), result);
