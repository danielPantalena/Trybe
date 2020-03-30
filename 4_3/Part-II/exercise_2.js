let arr = [2, 3, 6, 7, 10, 1];

function indexOfHighestValue (array) {
    let highestValue = array[0]
    let ind = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (highestValue <= arr[i]) {
            highestValue = arr[i];
            ind = i;
        }
    }
    return ind;   
}

console.log(indexOfHighestValue(arr));
