// Put a Roman Number here! Put the letters in UPPERCASE!

let romanNumber = "MMMCMXCIV";

let romanNumerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
};

function romanToHinduArabic(str) {
    let result = null;
    for (let i = 0; i < str.length; i += 1) {
        // I, IV e IX
        if (str[i] === "I" && str[i + 1] != "V" && str[i + 1] != "X")
            result += romanNumerals.I;
        else if (str[i] + str[i + 1] === "IV")
            result += romanNumerals.IV;
        else if (str[i] + str[i + 1] === "IX")
            result += romanNumerals.IX;

        // V
        if (str[i] === "V" && str[i - 1] !== "I") {
            result += romanNumerals.V;
        }

        // X, XL e XC
        if (str[i] === "X" && str[i - 1] !== "I" && str[i + 1] !== "L" && str[i + 1] !== "C")
            result += romanNumerals.X;
        else if (str[i] + str[i + 1] == "XL")
            result += romanNumerals.XL;
        else if (str[i] + str[i + 1] == "XC")
            result += romanNumerals.XC;

        // L
        if (str[i] === "L" && str[i - 1] !== "X")
            result += romanNumerals.L;

        // C, CD e CM
        if (str[i] === "C" && str[i - 1] !== "X" && str[i + 1] !== "D" && str[i + 1] !== "M")
            result += romanNumerals.C;
        else if (str[i] + str[i + 1] == "CD")
            result += romanNumerals.CD;
        else if (str[i] + str[i + 1] == "CM")
            result += romanNumerals.CM;

        // D
        if (str[i] === "D" && str[i - 1] !== "C")
            result += romanNumerals.D;

        // M
        if (str[i] === "M" && str[i - 1] !== "C")
            result += romanNumerals.M;
    }
    return result;
}

console.log(romanToHinduArabic(romanNumber));
