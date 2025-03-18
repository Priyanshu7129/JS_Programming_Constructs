let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * (999 - 100 + 1)) + 100);
}
console.log("Numbers:", numbers);
console.log("Minimum:", Math.min(...numbers));
console.log("Maximum:", Math.max(...numbers));
