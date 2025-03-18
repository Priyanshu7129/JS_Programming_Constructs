function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split('').reverse().join('');
    return original === reversed;
}
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

console.log(`${num1} is ${isPalindrome(num1) ? "" : "NOT "}a Palindrome.`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "NOT "}a Palindrome.`);
