/*Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/

function findDupes(arr = []) {
    let dupes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] && !dupes.includes(arr[i])) {
            dupes.push(arr[i]);
        }
    }
    return dupes;
}
console.log(findDupes([1, 2, 2, 3, 3, 4, 5, 5, 9, 9, 42, 42, "snoop", "snoop"]));