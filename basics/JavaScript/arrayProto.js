let input = [2, 3, 4, 5, 6];
console.log(input.__proto__); // o/p => Array constructor 
console.log(input.__proto__.__proto__); // o/p => object.prototype

console.log(input.constructor === Array); // o/p => true
/** Array in JS are instances of the Array Constructor */
