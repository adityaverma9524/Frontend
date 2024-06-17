const fruits = [
    'Apple',
    'Mango',
    'Kiwi',
    'Berry',
    'Banana',
    'Lichi',
];

// Binding Pattern
// const [a, m] = fruits;
// console.log(a, m); // o/p => Apple Mango

// const [a, , k] = fruits;
// console.log(a, k); // o/p => Apple Kiwi

// const [a, m, ...f] = fruits;
// console.log(a, m); // o/p => Apple Mango
// console.log(f); // o/p => ['Kiwi', 'Berry', 'Banana', 'Lichi']

const [a, m, ...[ , berr, bana]] = fruits;
console.log(berr); // o/p => Berry
console.log(bana); // o/p => Banana