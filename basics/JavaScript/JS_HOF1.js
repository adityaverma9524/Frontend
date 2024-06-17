/** JS Higher Order Functions */

// .map(CurrentElement OR index OR array)
 const input = [2, 4, 5, 6, 7];
// const squaredArray = input.map(function(CurrentElement) {
//     return CurrentElement ** 2;
// });
// console.log(squaredArray);
const squaredArray = input.map((num) => num ** 2);
console.log(squaredArray);