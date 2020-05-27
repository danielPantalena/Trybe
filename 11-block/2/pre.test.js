const preFunctions = require('./pre');

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

function isDivisible(number) {
  return randomNumber() % number === 0;
}

test("'randomNumber' é chamada quando 'isDivisible' for chamada", () => {
  randomNumber = jest.fn();
  isDivisible();
  expect(randomNumber).toHaveBeenCalled();
});
