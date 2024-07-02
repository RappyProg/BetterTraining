/* Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/


function addElement(arr = [], n) {
    if (!arr.includes(n)) { //include() method checks whether value n exist in the array
        arr.push(n);
    }
    return arr;
}



console.log(addElement([1, 2, 3, 4], 1));