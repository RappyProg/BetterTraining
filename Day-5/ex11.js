/*
Based on the array below write a function that will return primitive data types only.
let arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]
*/

function primitive(arr = []) {
    return arr.filter((value) => {
        return (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean' || typeof value === 'undefined' || typeof value === 'bigint' || typeof value === 'symbol')
    })
}

console.log(primitive([1, [], undefined, {}, "string", {},
    []
]));