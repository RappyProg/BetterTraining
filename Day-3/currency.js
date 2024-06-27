////convert number to currency, ex 1000 to Rp.1000,00

let num = 1000000;
//let currency = `Rp. ${num},00`;

//console.log(currency);

//lecturer's answer

let strNum = num.toString();
let rupiah = "";
let count = 0;

for (let i = strNum.length - 1; i >= 0; i--) {
    rupiah = strNum.charAt(i) + rupiah // basically this adds the number in front of the whole thing everytime
    count++;
    if (count % 3 == 0 && strNum.length != count) { //every 3 numbers from the back as long the count != str length, we gucci
        rupiah = "." + rupiah;
    }
}

console.log(rupiah);