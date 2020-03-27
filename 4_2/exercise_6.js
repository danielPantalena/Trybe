let n = 83;
let result = null;

for (let i = 2; i <= n / 2 + 1; i++) {
    if (n % i == 0) {
        result = "Não é primo";
        break;
    }
    else {
        result = "É primo";
    }
}
console.log(n + " " + result);
