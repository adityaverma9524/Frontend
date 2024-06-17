// find --v/s-- findIndex

const input = [2, 3, 4, 5, 6, 7, 8];

const find1 = input.find((num) => num == 5); // o/p -> 5
const find2 = input.find((num) => num > 5); // o/p -> 6, i.e. the first num(>5) occured in array
const find3 = input.findIndex((num) => num == 5); // o/p -> 3, i.e. index num of 5

console.log(find1);
console.log(find2);
console.log(find3);

/** Some more functions~
 * every()
 * fill()
 * findLast()
 * findLastIndex()
 * forEach()
 */