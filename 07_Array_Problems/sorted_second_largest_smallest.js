let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Numbers:", numbers);
numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);
console.log("Second Smallest:", numbers[1]);
console.log("Second Largest:", numbers[numbers.length - 2]);
