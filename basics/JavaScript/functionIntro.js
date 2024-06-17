const sum1 = sum(5, 6);
console.log(sum1);
// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
var sum2 = function (a, b) {
    return a + b;
}
console.log(sum2(1, 8)); // sum2 can be called after the expression only
                         // Otherwise, TypeError: sum2 is not a function

// Arrow Fucntion
// We can't use arrow function before it's declaration
/*var prod = (num1, num2) => {
    return num1*num2;
}*/
var prod = (num1, num2) => num1*num2;
console.log(prod(2, 4));

// IIFE (Immediate Invoked Function Declaration)
(function() {
    console.log('IIFE');
}) ();

(function(a, b) {
    console.log(a ** b);
}) (4, 2);

const user = (function() {
    const userData = {
        userName: 'John',
        userAge: 20
    };

    function getName() {
        console.log(userData.userName);
    }

    function updateAge(age) {
        console.log(userData.userAge + age);
    }

    return { getName, updateAge};
}) ();

console.log(user);
console.log(user.userData);
user.getName();
user.updateAge(3);