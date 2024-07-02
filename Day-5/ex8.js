/*Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/

function combineArray(arr1 = [], arr2 = []) {
    let combinedArr = arr1.concat(arr2);
    return combinedArr;
}

console.log(combineArray([1, 2, 3, 4, 3], [2, 3, 4]));