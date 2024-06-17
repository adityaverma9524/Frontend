// filter()

const input = [2, 3, -5, -9, 8, 10, -8, -19, 9];

const positives = input.filter(noNegative);

function noNegative(num) {
    return num > 0;
}

const negatives = input.filter((num) => num < 0);

console.log(`Original Array: ${input}`);
console.log(`Only Positives Array: ${positives}`);
console.log(`Only Negatives Array: ${negatives}`);