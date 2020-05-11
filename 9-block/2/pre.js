const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const arraysToObject = (arr1, arr2) => arr1.map((p, i) => ({[p] : arr2[i]}));

console.log(arraysToObject(products, prices));