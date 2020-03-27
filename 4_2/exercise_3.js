let n = 5;

for (let i = 1; i <= n; i++) {
    let line = "*".repeat(i);
    let space = " ".repeat(n - i);
    console.log(space + line);
}
