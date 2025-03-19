let repeatedNumbers = [];
for (let i = 0; i <= 100; i++) {
    if (i % 11 === 0 && i !== 0) repeatedNumbers.push(i);
}
console.log("Repeated Digits (like 11, 22, ... 99):", repeatedNumbers);
