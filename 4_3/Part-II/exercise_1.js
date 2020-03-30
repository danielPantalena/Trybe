function verificaPalindrome (str) {
    result = null;
    let stringLenght = str.length
    for (let i = 0; i <= stringLenght/2 - 1; i += 1) {
        if (str[i] === str[stringLenght - 1 - i]) {
            result = true
        } else { 
            result = false;
            break;
        }
    }
    return result;
}

console.log(verificaPalindrome("sator arepo tenet opera rotas"));
