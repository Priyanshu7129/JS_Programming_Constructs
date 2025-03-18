const prompt = require("prompt-sync")();
let day = parseInt(prompt("Enter day: "));
let month = parseInt(prompt("Enter month: "));
let isBetween = (month == 3 && day >= 20) || (month == 6 && day <= 20) || (month > 3 && month < 6);
console.log("Is between March 20 and June 20:", isBetween);
