/** funciton returning functions */
function greet(wishes) {
    return function (message) {
        console.log(`${wishes}, ${message}`);
    }
}

// const returned_function = greet('Hello');
// returned_function('I hope you are doing well.');

greet('Hello')('I hope you are doing well.');
