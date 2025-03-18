let n = parseInt(prompt("Enter a value for n: "));
let harmonic = 0;
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}
console.log(`Harmonic Number H(${n}) = ${harmonic.toFixed(5)}`);
