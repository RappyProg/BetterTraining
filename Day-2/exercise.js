////celsius to fahrenheit
//let temp = 60;
//console.log(temp + " Celsius")
//if (temp == 60) {
//    console.log(((temp * (9 / 5)) + 32) + " Fahrenheit")
//}

//=======================================================

//// odd even check
//let number = 25;
////let number = 2;
////if (number % 2 != 0) {
////    console.log("Odd Number")
////} else {
////    console.log("Even Number")
////}
// Lecturer's ternary answer
//console.log(number % 2 == 0 ? `${number} is Even Number` : `${number} is Odd Number`)

//=======================================================

//// prime check
//let num = 11;

//function isPrime(num) {
//    if (num == 1) return false;

//    for (i = 2; i < num; i++) {
//        if (num % 2 == 0) return false;
//        else return true;
//    }
//}
//console.log(`Is ${num} prime? ` + isPrime(num));

////lecturer's answer
//let num = 18;
//let divider = 0;
//for (let i = 1; i <= num; i++) {
//    if (num % i == 0) divider++ //prime only has 2 divider that returns 0 on modulo (1 and itselves), if divider is more than 2, they're not prime.
//}
//console.log(divider == 2 ? `${num} is a Prime Number` : `${num} is Not a Prime Number`);

//for (let i = 1; i <= 10; i++) {
//    let divider = 0

//    for (let j = 1; j <= i; j++) {
//        if (i % j == 0) divider++ //prime only has 2 divider that returns 0 on modulo (1 and itselves), if divider is more than 2, they're not prime.
//    }
//    console.log(divider == 2 ? `${i} is a Prime Number` : `${i} is Not a Prime Number`);
//}

//=======================================================

//// sum numbers 1 to n
//let n = 5;
//let sum = 0;

//while (n != 0) {
//    sum += n;
//    n--;
//}

//console.log(sum);

//=======================================================

////// sum number 1 to n with function
//function numberSum(n) {
//    var total = 0;
//    for (i = 1; i <= n; i++) {
//        total += i;
//    }
//    return total;
//}
////console.log(numberSum(5));

//=======================================================

//function factorial(n) {
//    if (n < 0) {
//        return -1;
//    } else if (n == 0) {
//        return 1;
//    } else { return (n * factorial(n - 1)); }
//}
//console.log(factorial(5));

////lecture's answer
//let n = 6;
//let res = 1;
//for (let i = n; i > 0; i--) {
//    res *= i;
//}
//console.log(res);

//=======================================================

////fibonacci
//function fibonacci(n) {
//    if (n <= 1) {
//        return n;
//    } else { return fibonacci(n - 1) + fibonacci(n - 2); }
//}

//console.log(fibonacci(15));

//leturer's answer
let num = 15;
let a = 0;
let b = 1;

for (let i = 1; i < num; i++) {
    let nextNum = a + b;
    a = b;
    b = nextNum;
}

console.log(b);