// Exercício 3

// let a = 10;
// let b = 20;
// let c = 30;

// if (a > b && a > c) {
//     console.log("O maior número é: " + a)
// }
// else if (b > c) {
//     console.log("O maior número é: " + b)
// }
// else {
//     console.log("O maior número é: " + c)
// }

// Refazendo com Função
function isTheHighest (a, b, c) {
    let result = null;
    if (a > b && a > c) {
        result = a;
    } else if (b > c) {
        result = b;
    } else {
        result = c;
    }
    return result;
}
console.log(isTheHighest(10, 20, 30));