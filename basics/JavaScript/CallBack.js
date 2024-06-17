/** CallBack Fucntions */
function greetUser(wish) {
    console.log(`${wish()}, welcome to JavaScript Course.`)
}

function sayHi() {
    return 'Hi';
}

function sayHello() {
    return 'Hello';
}

function goodMorning() {
    return 'Good Morning';
}

greetUser(sayHi);
greetUser(sayHello);
greetUser(goodMorning);