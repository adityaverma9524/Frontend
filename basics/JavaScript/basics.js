console.log("JS Fundamentals");

// defining variables 
// let OR var OR const

let age;
console.log(age);

age = "ten";
console.log(age);

// naming variables
var firstChildAge = 10; // => Camel casing
var first_child_age = 10; // => Snake casing

// let => an initially selcarable variable & can be change later on
let value; // Declaration
value = 5; // Definition
value = "five"; // changing 

// const => assinging value to something that we are very sure will NOT change 
const pi = 3.14;
// pi = 5 => this will give an ERROR !!

// var => acts as a normal var, it was the only way before ECMA6(ES6)
var value1;
var value2 = 10;
value2 = "ten";

// Different data types

// number (64 bit)
let num = 10;
console.log(typeof num); // o/p => number
console.log(typeof 10); // o/p => number

// string 
const firstName = 'aditya';
const lastName = "Verma's";
const nickName = `adi`;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof nickName);

// boolean
let bool = false;
console.log(typeof bool);

// undefined
let a;
console.log(typeof a);
console.log(a); // o/p => undefined

// NULL
let b = null;
console.log(b); // o/p => null
console.log(typeof b); // o/p => null

// Symbol(ES6/2015)

// BigInt(ES2020)
let num1 = 10n; // number ending with n => it is bigint(aquires space more than 64 bit)
console.log(typeof num1);

// Interesting Things

console.log(Number.MAX_VALUE); // o/p => 1.79e+308 i.e. the max value we can store
console.log(Number.MIN_VALUE); // o/p => 5e-324 i.e. the min value we can store
console.log(Number.MAX_VALUE * 10); // o/p => Infinity

console.log(12 / 0); // o/p => Infinity
console.log(188/ Infinity) // o/p => 0