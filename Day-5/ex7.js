/* Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :

maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
*/

function maxPush(max, ...more) { //...more initialize however many arguments you gave into a single array.
    let arr = [];
    for (let i = 0; i < max; i++) {
        arr.push(more[i]);
    }
    return arr;
}

console.log(maxPush(5, 3, "6", 7, undefined, true, 1, 0, 1, 2, 3, 5));