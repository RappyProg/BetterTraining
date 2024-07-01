// pattern triangle
/* 01
   02 03
   04 05 06
   07 08 09 10
*/

// with this pattern, we can use the same logic as before, but we need to add a little bit of logic to make it work.
// we need to add a counter to make it work

let height = 10;
let arr = [];
let counter = 1;

for (let i = 1; i <= height; i++) {
    arr.push(i);
    let result = arr.map(() => {
        let x = 0;
        if (counter < 10) {
            x = '0' + counter++;
        } else { x = counter++; }
        return x;
    }).join(' ')

    console.log(result);
}