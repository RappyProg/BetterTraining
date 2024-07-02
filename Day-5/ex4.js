/*Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
are of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

function arrayAdd(arr1 = [], arr2 = []) {
    let indexSum = 0;
    let sumArray = [];
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            indexSum = arr1[i] + arr2[i];
            sumArray.push(indexSum);
        }
    } else { console.log("both arrays have different length"); }
    return sumArray;
}

console.log(arrayAdd([1, 2, 3], [3, 2, 1]));

//===========================
//lecturer's answer

function calculate(arr1, arr2) {
    return arr1.map((val, idx) => val + arr2[idx])
}

console.log(calculate([1, 2, 3], [3, 2, 1]));