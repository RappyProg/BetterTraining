/* Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

function concatStr(arr = []) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i != (arr.length - 1)) {
            str += arr[i] + ', ';
        } else {
            str += 'and ' + arr[i];
        }
    }
    return `"${str}"`;
}

console.log(concatStr(["apple", "banana", "cherry", "date"]));

//========================
//lecturer answer
function concat(arr = []) {
    const removeItem = arr.pop()
    return arr.join(", ") + ", and " + removeItem;
}