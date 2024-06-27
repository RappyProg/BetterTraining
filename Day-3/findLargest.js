//find largest between 2 integers

let num1 = 27;
let num2 = 42;

let arr = [];

arr.push(num1, num2);

console.log(Math.max(...arr));

console.log(num1 > num2 ? num1 : num2);