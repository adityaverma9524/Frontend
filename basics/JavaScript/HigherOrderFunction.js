const input = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// function square(array) {
//     const sqaures = [];
//     for(let num of array) {
//         sqaures.push(num ** 2);
//     }
//     return sqaures;
// }
// function cube(array) {
//     const cubes = [];
//     for(let num of array) {
//         cubes.push(num ** 3);
//     }
//     return cubes;
// }
// console.log(square(input));
// console.log(cube(input));

/** Higher Order Functions 
 * Takes a function as arguments
 * OR returns function
*/
function operation(array, func) {
    const output = [];
    for(let num of array) {
        output.push(func(num));
    }
    return output;
}

function square(num) {
    return num ** 2;
}

function cube(num) {
    return num ** 3;
}

console.log(operation(input, square));
console.log(operation(input, cube));

