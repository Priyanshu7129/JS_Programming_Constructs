function findSecondLargestAndSmallest(arr) {
    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;
    for (let num of arr) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }
        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }
    }
    return { secondLargest: secondMax, secondSmallest: secondMin };
}
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Numbers:", numbers);
let result = findSecondLargestAndSmallest(numbers);
console.log("Second Largest:", result.secondLargest);
console.log("Second Smallest:", result.secondSmallest);
