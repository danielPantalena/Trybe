const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const result = [];
  let vowelNumber = 0;
  for (let i in characters) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      vowelNumber += 1;
      result.push(vowelNumber);
    } else {
      result.push(characters[i]);
    }
  }
  return result.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
assert.deepStrictEqual(removeVowels(parameter), result);
