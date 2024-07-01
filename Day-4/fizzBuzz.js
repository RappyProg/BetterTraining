//fizz for every 3, buzz for every 5, fizzbuzz for every 15

function fizzBuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            arr.push('FizzBuzz');
        } else if (i % 3 == 0) {
            arr.push('Fizz');
        } else if (i % 5 == 0) {
            arr.push('Buzz');
        } else { arr.push(i) }
    }
    return arr.join(', ');
}

console.log(fizzBuzz(105));