let str = "ayam";
//let rev = str.split("").reverse().join(""); //split to array then reverse the array then join together

//console.log(rev == str ? `${str} backwards is ${rev}. This is Palindrome` : `${str} backwards is ${rev}. This is not Palindrome`);

//lecturer's answer
//let reverseStr = "";
let reverse = [];

for (let i = str.length - 1; i >= 0; i--) {
    //reverseStr += str.charAt(i);
    reverse.push(str.charAt(i));
}
result = reverse.join()
    //console.log(reverseStr);
    //console.log(reverseStr == str ? "Palindrome" : "Not Palindrome");
console.log(result);
console.log(reverse == str ? "Palindrome" : "Not Palindrome");