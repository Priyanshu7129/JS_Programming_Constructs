let num = parseInt(prompt("Enter a number: "));
let isPrime = true;
if (num <= 1) isPrime = false;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(num, isPrime ? "is a Prime Number." : "is NOT a Prime Number.");
