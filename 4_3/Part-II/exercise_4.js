function theLargestIs (array) {
    let result = array[0];
    for (let element in array) {
        if (element.length > result.length) {
            result = element;
        }
    }
    return result;
}

arr = ['Daniel', 'Fenandoooooo', 'Mari']

console.log(theLargestIs(arr))