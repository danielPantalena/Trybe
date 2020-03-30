function sumUntil(n) {
    let result = null;
    for (let i = 1; i <= n; i += 1) {
        result += i;
    }
    return result
}

console.log(sumUntil(5));