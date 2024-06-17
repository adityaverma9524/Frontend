// reduce

// reduce(redFn, initial_value);

// function redFn(accumulator, currentValue, currentIndex, array)

const input = [2, 3, 4, 5, 6, 10];
const sum = input.reduce((acc, num, index) => {
    console.log(acc, index);
    return acc + num;
} , 0);

console.log(sum);