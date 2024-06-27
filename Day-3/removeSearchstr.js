//Remove first occurence of string given searched

let str = "Hello World";
let search = "ell"
let remove = ""

console.log(str.replace(search, remove));

function removeStr(str, search, blank) {
    return str.replace(search, blank)
}

console.log(removeStr(str, search, remove));