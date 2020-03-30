let arr = [2, 4, 6, 7, 10, 0, -3];

function indexOfLowesttValue(array) {
    let lowestValue = array[0];
    let ind = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (lowestValue >= arr[i]) {
            lowestValue = arr[i];
            ind = i;
        }
    }
    return ind;
}

console.log(indexOfLowesttValue(arr));
