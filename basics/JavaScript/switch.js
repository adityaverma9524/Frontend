fruits = prompt("Enter the fruit name");

switch(fruits) {
    case 'Apple':
        console.log("It's an Apple");
        break;
    case 'Kiwi':
        console.log("It's an Kiwi");
        break;
    default:
        console.log("Neither an Apple nor Kiwi")
        break;
}

console.log("Outside Switch");

/* Structure Of switch()
switch(expression) {
    case a:
        break;
    case b:
        break;
    default:
        break;
}*/