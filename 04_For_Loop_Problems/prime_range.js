let start = parseInt(prompt("Enter the start of range: "));
let end = parseInt(prompt("Enter the end of range: "));

for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num <= 1) continue;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}
