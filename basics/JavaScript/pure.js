/** Pure Functions */ 
// The output of function is NOT dependent on any external value(outside the scope of function)
function calculate(num1, num2) {
    return num1 * num2;
}
console.log(calculate(4, 6));

/** Impure Functions */
// The output of function is dependent on any external value(outside the scope of function)
const disc = 25;
function calcDisc(price) {
    return (price - discount);
}
// If value of discount varies, it make the output of function vary accordingly.

/** if we use console.log() inside function 
 * even then it is an IMPURE function
 * because console.log() is a function provided by web API's
 * it is not a JS function
 */