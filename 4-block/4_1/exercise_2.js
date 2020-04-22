// Exercício 2 4.1

// let a = 10;
// let b = 20;
// let result = null;

// if (a > b) {
//     console.log("O maior número é: " + a)
// }
// else {
//     console.log("O maior número é: " + b)
// }

// Refazendo o exercício com Função
function theHighestIs (a, b) {
    let result = null;
    if (a > b) {
        result = a;
    }
    else {
        result = b;
    }
    return result;
}
console.log(theHighestIs(100, 20))