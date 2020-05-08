const assert = require('assert');

// ===================================================================================
let greaterThanTen = a => a.reduce((r, n) => {n > 10 ? r.push(n) : ''; return r;}, []);
// ===================================================================================

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
assert.deepStrictEqual(greaterThanTen(parameter), result);
