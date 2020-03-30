function verificaFimPalavra(str, strEnd) {
    let result = false;
    for (let i = 0; i < strEnd.length; i += 1) {
        if (strEnd[strEnd.length - 1] === str[str.length - 1]) {
            result = true;
        }
    }
    return result;
}

console.log(verificaFimPalavra("trybe", "be"))