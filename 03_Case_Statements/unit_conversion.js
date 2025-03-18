console.log("Select conversion type:");
console.log("1: Feet to Inch");
console.log("2: Inch to Feet");
console.log("3: Feet to Meter");
console.log("4: Meter to Feet");

let choice = parseInt(prompt("Enter your choice (1-4): "));
let value = parseFloat(prompt("Enter the value to convert: "));

switch (choice) {
    case 1:
        console.log(value + " Feet = " + (value * 12) + " Inches");
        break;
    case 2:
        console.log(value + " Inches = " + (value / 12).toFixed(2) + " Feet");
        break;
    case 3:
        console.log(value + " Feet = " + (value * 0.3048).toFixed(2) + " Meters");
        break;
    case 4:
        console.log(value + " Meters = " + (value / 0.3048).toFixed(2) + " Feet");
        break;
    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
}
