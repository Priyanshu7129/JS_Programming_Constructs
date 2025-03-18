let n = parseInt(prompt("Enter a value for n: "));
let i = 0;

while (i <= n && Math.pow(2, i) <= 256) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
    i++;
}
