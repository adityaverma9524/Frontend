const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Ignored, 2 already exists in mySet
// A Set can only contain unique elements. If you try to add a
// duplicate value, it will be ignored.

console.log(mySet);
const arr = Array.from(mySet);
console.log(arr);

console.log(mySet.size); // o/p = 3
console.log(mySet.has(2)); // o/p = true

mySet.delete(3);
console.log(mySet.size); // o/p = 2

mySet.clear();
console.log(mySet.size);  // o/p = 0
