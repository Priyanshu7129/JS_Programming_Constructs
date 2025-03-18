function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
let number = parseInt(prompt("Enter a number: "));
if (isPrime(number)) {
    console.log(`${number} is a Prime Number.`);
    let palindrome = getPalindrome(number);
    console.log(`Palindrome of ${number} is ${palindrome}.`);
    
    if (isPrime(palindrome)) {
        console.log(`Palindrome ${palindrome} is also Prime.`);
    } else {
        console.log(`Palindrome ${palindrome} is NOT Prime.`);
    }
} else {
    console.log(`${number} is NOT a Prime Number.`);
}
