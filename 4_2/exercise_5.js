let n = 7;
let spaceOut = " ".repeat((n - 1) / 2)
let base = "*".repeat(n)

// Top of triangle
console.log(spaceOut + "*")
// Between top and base
for (let i = 3; i <= n - 2 ; i+=2) {
    spaceOut = " ".repeat((n - i) / 2)
    let spaceIn = " ".repeat(n - spaceOut.length * 2 - 2)
    console.log(spaceOut + "*" + spaceIn + "*" + spaceOut)
}
// Base of traingle
console.log(base)
