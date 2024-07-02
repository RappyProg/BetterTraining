/*Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

//====================================
//with sort
function lhaSorted() {
    let arr = [12, 5, 23, 18, 4, 45, 32];
    let sum = 0;
    arr.sort((a, b) => a - b);

    let low = arr[0];
    let high = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let mean = sum / arr.length;
    return { low, high, mean };

}
console.log(lhaSorted());

//====================================
//without sort
function lha() {
    let arr = [12, 5, 23, 18, 4, 45, 32];
    let sum = 0;
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) { //if value > max, value becomes the new max
            max = arr[i];
        } else if (arr[i] < min) { //if value < min, value becomes the new min
            min = arr[i];
        }
        sum += arr[i];
    }
    let mean = sum / arr.length;
    return { min, max, mean };
}

console.log(lha());