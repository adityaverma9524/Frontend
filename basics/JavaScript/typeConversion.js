/** Type Conversion */

/** Convert to String */
console.log("Conversion to String")

// String() => Everything inside brackets will be considered as a String.
console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// toString()
console.log((123).toString());
// console.log((null).toString()); // => ERROR !! 
// console.log((undefined).toString()); // => ERROR !! 

/** Convert ot Number */
console.log("Conversion to Number")

// Number()
console.log(Number('25')); // o/p => 25
console.log(Number('25F')); // o/p => NaN
console.log(Number('value')); // o/p => NaN
console.log(Number(false)); // o/p => 0
console.log(Number(true)); // o/p => 1

// Unary(+) Operator -- Works on Variables
let ex1 = '123';
console.log(+ex1); // o/p => 123 (+ acts same as Number() here)

let ex2 = '123qwerty';
console.log(+ex2); // o/p => NaN

// Handling conversion to number in such cases('123qwerty')

// parseFloat()
console.log(parseFloat('123.45fghjkl')); // o/p => 123.45
console.log(parseFloat('3.14.15')); // o/p => 3.14 
                                    /*(return the float value,
                                      after second . ,it is no longer
                                      a Float32Array, hence ignores the rest)*/

// parseInt()
console.log(parseInt('123.45fghjkl')); // o/p => 123

// Boolean()
console.log(Boolean(1)); // o/p => true
console.log(Boolean(0)); // o/p => false
console.log(Boolean(null)); // o/p => false
console.log(Boolean(undefined)); // o/p => false