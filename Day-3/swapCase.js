//swapping the cases from up to down and vice versa

let str = "SPONgeboB sQuarEpANts MR.KRaBS 1 DOlLAR"
let letters = str.split('');
let arr = [];

for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
        arr.push(letters[i].toLowerCase());
    } else if (letters[i] === letters[i].toLowerCase()) {
        arr.push(letters[i].toUpperCase());
    } else {
        arr.push(letters[i]);
    }
}

let result = arr.join('');

console.log(result);