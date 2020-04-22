let arr = [2, 3, 5, 8, 2, 3];

function mostRepeat(array) {
    let largestArray = [];
    for (let i = 0; i < array.length; i += 1) {
        let repeatedArray = [];
        for (let j = 0; j < array.length; j += 1) {
            if (array[i] === array[j]) {
                repeatedArray.push(array[i])
            }
        }
        if (repeatedArray.length > largestArray.length) {
            largestArray = repeatedArray;
        }
    }
    return largestArray[0];
}

console.log(mostRepeat(arr));