//‘An apple a day keeps the doctor away’ change all instances of a

let input = "An apple a day keeps the doctor away";

let letters = input.split('');

let arr = [];

for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "a" || letters[i] == "A") {
        arr.push("*");
    } else {
        arr.push(letters[i]);
    }
}

let output = arr.join('');

console.log(

    output);