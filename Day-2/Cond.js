let age = 21;

if (age >= 17) {
    console.log("You can drink");
};

let grade = "A";

switch (grade) {
    case "A":
        console.log("Excellent Results");
        break;
    case "B":
        console.log("Great Results");
        break;
    case "C":
        console.log("Average Results");
        break;
    default:
        console.log("Invalid Grade");
}

const str = "Javascript";

if (str == "Javascript") {
    console.log("Javascript");
} else {
    console.log("Not Javascript");
}

console.log(str == "Javascript" ? "Javascript" : "Not Javascript");