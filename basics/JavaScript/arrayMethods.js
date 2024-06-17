const arr = ['a', 'b', 'c', 'd', 'x'];
arr[4] = 'e';
console.log(arr);

// from()
const ARR = Array.from("CodingNinjas");
console.log(ARR); // o/p below
/*[
    "C",
    "o",
    "d",
    "i",
    "n",
    "g",
    "N",
    "i",
    "n",
    "j",
    "a",
    "s"
]*/
/* Methods on Arrays */
/*
str.split(''): This converts the input string into an array of characters.
.reverse(): This reverses the order of elements in the array.
.join(''): This joins the array of characters back into a string.
*/

/* Adding an element */
// push()
arr.push('f'); // inserts 'f' at the end of array
console.log(arr);
const pushArray = arr.push('g'); // pushArray = size of arr after 'g' i being pushed
console.log(pushArray); // prints 7

// unshift()
arr.unshift('A'); // inserts 'A' at the starting of array
console.log(arr);

/* Removing an element */
// pop()
arr.pop(); // removes element from end
arr.pop();
console.log(arr);

// shift()
arr.shift();
arr.shift();
console.log(arr); // removes element from start

/* Check the element is present or not */
// indexOf()
const eIndex = arr.indexOf('e');
console.log(eIndex);

// includes()
const ePresent = arr.includes('e');
console.log(ePresent);

// slice() & splice()
console.log(arr.slice(2)); // slices 2 num of elements from start & prints the rest
console.log(arr.slice(-2)); // prints 2 elements from last & slices the rest
console.log(arr.slice(-3)); // prints 3 elements from last & slices the rest

const array = arr.slice();
console.log(array);

arr.splice(2, 0, 'x', 'y');
// 2 => index at which insertion is to be done
// 0 => num of elements to be removed next to(after) the inserted elements 
        // if deleteCount is not specified, the parameter at that place 
        // will be considered as deleteCount, if that parameter is not a number
        // it will ignore tha parameter 
// 'x', 'y' => elements to be inserted at index 2
console.log(arr);

// concat()
const arr2 = ['abc', 'def'];
const mergedArray = arr.concat(arr2);
console.log(mergedArray);
