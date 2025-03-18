let low = 1, high = 100;
let found = false;
console.log("Think of a number between 1 and 100.");
while (!found) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number ${mid}? (yes/higher/lower): `).toLowerCase();

    if (response === "yes") {
        console.log(`Your magic number is ${mid}!`);
        found = true;
    } else if (response === "higher") {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
