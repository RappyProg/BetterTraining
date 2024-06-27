//make first letter in each word upper case

let str = "hello world";

console.log(str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
).join(' '))

let words = str.split(' '); //split by spaces, becoming array of words
let arr = []; //empty array for all the words that are tweaked

for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0).toUpperCase(); // uppercase 1st char
    let restOfWords = words[i].slice(1); //rest of the words are here
    arr.push(firstChar + restOfWords) // combine both
}
let result = arr.join(' '); //join all words into 1 sentence

console.log(result);