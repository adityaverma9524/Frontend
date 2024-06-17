function sum(num1 = 0, num2 = 0) {
    console.log('Sum of the numbers is: ' + num1 + num2);
    console.log('Sum of the numbers is: ' +(num1 + num2));
    console.log(`Sum of the numbers is: ${num1 + num2}`);
}

sum(4, 5);
// Sum of the numbers is: 45
// Sum of the numbers is: 9
// Sum of the numbers is: 9

sum(4); // Sum of the numbers is: 4
sum(); // Sum of the numbers is: 0