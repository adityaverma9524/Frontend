/** In JavaScript, every object has a prototype. 
 * The prototype is a reference to another object 
 * from which the current object inherits properties and methods. 
 * It forms the basis of JavaScript's prototype-based inheritance model. */

function movie(title) {
    this.title = title;
}

movie.prototype.getDetails = function() {
    console.log(`Title: ${this.title}`);
}

/** movie.prototype:
 * This accesses the prototype property of the movie constructor function.
 * In JavaScript, constructor functions have a prototype property, 
 * which is an object that serves as the prototype for all instances 
 * created by that constructor function.
 */

// .getDetails is the name of the method being added to the prototype object

movie.prototype.year = 2012;
/** Adding a year property to the prototype object of the movie constructor function, 
 * and setting its value to 2012.
 * This means that all instances created by the movie constructor function 
 * will inherit this year property with a value of 2012. */

const movie1 = new movie('The Avengers');
console.log(movie1);

movie1.rating = 4.5;
console.log(movie1);
movie1.getDetails();
console.log(movie1.year);
console.log(movie1.__proto__); // o/p => constructor
// Prototype of movie1 is a constructor function

const movie2 = new movie('Avatar');
console.log(movie2);
movie2.getDetails();
console.log(movie2.year);
console.log(movie2.__proto__); // o/p => constructor
console.log(movie2.__proto__.__proto__); // o/p => Object
console.log(movie2.__proto__.__proto__.__proto__); // null

console.log(movie1.__proto__ === movie.prototype); // o/p => True
console.log(movie1.__proto__.__proto__ === Object.prototype); // o/p => True

/** Prototype Chain~
 * Prototype of movie1 & movie2 is a constructor function
 *  Prototype of constructor function is an object(top of the prototype chain)
 * Prototype of object is null
*/

let obj = {
    a: 5,
    b: 6,
}

console.log(obj.__proto__); // o/p => object
