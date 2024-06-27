/*input str --> output 1
  input num --> output 2
  input any --> output 3
*/

//let input = "Hello World";
//let input = 1;
let input = [];

console.log(typeof input === 'string' ? 1 : typeof input === 'number' ? 2 : 3);