/*
Write a function from the below array of number that will return sum of duplicate values.
let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40
*/
function sumOfDuplicates(arr) {
    let seen = new Map();
    let duplicatesSum = 0;

    // Count the occurrences of each number
    for (let num of arr) {
        if (seen.has(num)) {
            seen.set(num, seen.get(num) + 1);
        } else {
            seen.set(num, 1);
        }
    }

    // Calculate the sum of duplicate values
    for (let [num, count] of seen) {
        if (count > 1) {
            duplicatesSum += num * (count);
        }
    }

    return duplicatesSum;
}

let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumOfDuplicates(arr)); // Output: 40