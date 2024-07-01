function getMessage(name) {
    function hello() {
        return "Hello " + name + ".";
    }

    function welcome() {
        return "Welcome to Purwadhika!";
    }
    return hello() + " " + welcome();
}
let name = "Angga";
console.log(getMessage(name));
console.log(1 + "2");

console.log("BSD Sektor II-3. Blok AL/28. RT/RW 001/015. Rawabuntu Serpong.".toUpperCase())