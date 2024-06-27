const str = "Hello Purwadhika!";
const strUpper = str.toUpperCase();
const strReplace = str.replace("e", "a");

console.log(str);
console.log(strUpper);
console.log(strReplace);

console.log("ayam goreng".replace("a", "o"));
//replace all instances of a character
console.log("ayam goreng".replaceAll("a", "o"));

console.log(str.charAt(0));

console.log(str.concat(" How are you?"));
console.log(str.concat(" How are you?", " I'm fine.").toUpperCase());

let name = "Angga";
let introduction = 'Hello, my name is, ' + name + '.';
console.log(introduction);