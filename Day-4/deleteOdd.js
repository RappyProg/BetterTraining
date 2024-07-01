//remove odd numbers from the array

function racism(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    console.log(arr);

    let result = arr.filter((num) => num % 2 === 0);

    return result;
}

console.log(racism(10));