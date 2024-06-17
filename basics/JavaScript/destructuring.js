const obj = {
    a: 1,
    b: 2,
    c: ['abc', 6, 7],
    d: {name: 'John'},
};

// Binding Pattern
// const a = obj.a;
/*
const {a, b, c, d} = obj;
console.log(a);
console.log(b);
*/
    // Assigning different names
const {a: a1} = obj; 
/** While performing destructing,
 * variables are assigned the value
 * and not the reference.
 * Therefore, changes made to obj.a afterwards, does NOT makes changes to a1*/ 
console.log(a1);

// Assignment Pattern
let b;
({b: b} = obj);
console.log(b);
