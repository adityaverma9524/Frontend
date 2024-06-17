// refer 'mdn web docs' for all built-in objects information

// Date() Object
const today = new Date();
console.log(today);

// Format-1 to specify Date
const birthDate = new Date('2003-08-29');
console.log(birthDate);

// Format-2 to specify Date
/**
 * 0 - Jan
 * 1- Feb
 * & so on...
 */
const someDate = new Date(1990, 7); // =>  Aug 01 1990
console.log(someDate);

console.log(birthDate.getFullYear());
console.log(typeof birthDate.getFullYear());

console.log(birthDate.toDateString());
console.log(typeof birthDate.toDateString());

const birthStr = birthDate.toString();
console.log(birthStr.slice(1, 5));