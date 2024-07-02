/*Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
8*/

function findDiff(arr1 = [], arr2 = []) {
    let diff = [];
    for (let i = 0; i < arr1.length; i++) { //scan through arr1
        for (let j = 0; j < arr2.length; j++) { //scan through arr2
            if (!arr1.includes(arr2[j]) && !diff.includes(arr2[j])) { //checks values from arr2 that is not on arr1 and check if array diff has that value.
                diff.push(arr2[j]);
            }
            if (!arr2.includes(arr1[i]) && !diff.includes(arr1[i])) { //checks values from arr1 that is not in arr2 and check if array diff has that value
                diff.push(arr1[i]);
            }
        }
    }
    return diff.sort((a, b) => a - b); //sorted ascending to make it look nicer
}

console.log(findDiff([1, 2, 3, 4, 7, 4, 5, 3, 4, 5], [3, 4, 5, 6, 10, 9, 8, 7, 8, 9]));