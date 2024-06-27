//sorting numbers

let num1 = 42;
let num2 = 27;
let num3 = 18;

let arr = [];
arr.push(num1, num2, num3);

console.log(arr.sort()); //quicksort
console.log(arr.sort(function(a, b) { return (a - b) })); //ascending
console.log(arr.sort(function(a, b) { return (b - a) })); //descending

//the logic here is comparing all comparison as a and b pair and see the value. negatives means a comes before b. equal means no position changes. positives means b comes before a.

//the vice versa is true for descending