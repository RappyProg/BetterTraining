//make a triangle based on input height

let height = 10;
let arr = [];

for (let i = 1; i <= height; i++) {
    arr.push(i); // put all value into the array
    let result = arr.join(' '); //make it into a string separated by comma
    console.log(result); //voila~
}