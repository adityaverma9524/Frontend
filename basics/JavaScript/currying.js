// Currying in JS
// transforming func(a, b, c) into func(a)(b)(c)

function add1(a, b, c) {
    return a + b + c;
}
console.log(add1(2, 3, 4));

function add2(a) {
    return function (b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(add2(2)(3)(4));

function power(b) {
    return function(a) {
        return a ** b;
    }
}

const square = power(2);
console.log(square(5));

const cube = power(3);
console.log(cube(5));