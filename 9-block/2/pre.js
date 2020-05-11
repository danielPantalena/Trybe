const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const arraysToObject = (arr1, arr2) => {
  result = {};
  arr1.map((product, index) => result[product] = arr2[index]);
  return result;
}

console.log(arraysToObject(products, prices));