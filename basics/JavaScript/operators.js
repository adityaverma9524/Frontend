let n = 2**3; // => (2^3)

// Logical Operators
        /*except these {0, '', null, undefined, false, NaN},
            everything is True in JS.
        */

        /* && returns LAST truthy, FIRST falsy value
           || returns FIRST truthy, LAST falsy value 
        */
console.log(5 && 1); // o/p => 1 (i.e. LAST truthy)
console.log(5 && 0); // o/p => 0 (i.e. FIRST falsy)
console.log(1 && 0); // o/p => 0 (i.e. FIRST falsy)
console.log(0 || true); // o/p => true (i.e. FIRST truthy)
console.log(0 || false);// o/p => false (i.e. FIRST truthy)
console.log(0 || false || ''); // o/p => '' (i.e. LAST falsy)
console.log(0 || false || '' || null);// o/p => 7 (i.e. FIRST truthy)
console.log(0 || 7 || '' || null); // o/p => 7 (i.e. FIRST truthy)

/*costarting with the first character of each string, => comparing strings in JS, characters in the string are compared one at a time,
    starting with the first character of each string, => (2 < 5) => true */
let str1 = "20";
let str2 = "5";
let result = str1 < str2;
console.log(result);

console.log(5 == '5'); // o/p => true (even though data-type id diff, value is same)
console.log(5 === '5'); // o/p => false (Strict Comparison, data-type is diff)

console.log(5 != '5'); // o/p => false (even though data-type id diff, value is same)
console.log(5 !== '5'); // o/p => trye (Strict Comparison, data-type is diff)

console.log(!1); // o/p => false (NOT true)
console.log(!0); // o/p => true (NOT false)

console.log("hello" != "Hello"); // o/p => true
console.log("hello" !== "Hello"); // o/p => true