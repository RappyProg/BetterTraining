let str = "ayam";
let rev = str.split("").reverse().join("");

console.log(rev == str ? `${str} backwards is ${rev}. This is palindrome` : `${str} backwards is ${rev}. This is not Palindrome`);