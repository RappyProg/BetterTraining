/*Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

//===============================
//with sort
function secondSmallest(arr = []) {
    arr.sort((a, b) => a - b) // ascending sort

    return arr[1]; //2nd smallest in a no repeat array is usually 2nd value. however, this is wrong if there are repetition, for example, 2 1s
}

console.log(secondSmallest([5, 3, 1, 1, 7, 2, 6]));

//===============================
//without sort
function secondSmallest2(arr = []) {
    //init 2 variables to save both min and 2nd min
    let min = arr[0];
    let second = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) { //if value < min. Make the second = min and min = lower value. This makes sure that second is always bigger than min.
            second = min;
            min = arr[i];
        } else if (arr[i] < second && arr[i] !== min) { //this then checks when value < second but value is not equal min. Meaning that this is value is definitely bigger than min but lower than second, hence update the second = new value.
            second = arr[i];
        }
    }
    return second;
}

console.log(secondSmallest2([5, 3, 1, 1, 7, 2, 6]));

//==============================
//lecturer's answer

function secondSmallest3(arr = []) {
    arr.sort((a, b) => a - b)
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > arr[0]) {
            break
        }
        i++
    }
    return arr[i];
}