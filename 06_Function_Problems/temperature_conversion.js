function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log("Choose Conversion:");
console.log("1: Celsius to Fahrenheit");
console.log("2: Fahrenheit to Celsius");

let choice = parseInt(prompt("Enter choice (1/2): "));
let temp = parseFloat(prompt("Enter temperature: "));
switch (choice) {
    case 1:
        console.log(`${temp}°C = ${celsiusToFahrenheit(temp).toFixed(2)}°F`);
        break;
    case 2:
        console.log(`${temp}°F = ${fahrenheitToCelsius(temp).toFixed(2)}°C`);
        break;
    default:
        console.log("Invalid choice!");
}
