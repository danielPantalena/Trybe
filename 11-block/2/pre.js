function randomNumber() {
  return Math.floor(Math.random() * 101);
}

function isDivisible(number) {
  return (randomNumber() % number) === 0;
}

// module.exports = { randomNumber, isDivisible };

test("'randomNumber' é chamada quando 'isDivisible' for chamada", () => {
  randomNumber = jest.fn();
  isDivisible();
  expect(randomNumber).toHaveBeenCalled(); // It should be randomNumber
});

// test('randomNumber retornado 2', () => {

// })
