arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function theLargestIs(array) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > result.length) {
            result = array[i];
        }
    }
    return result;
}

console.log(theLargestIs(arr));