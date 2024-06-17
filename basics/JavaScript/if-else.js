let number = 30;

if (number < 10) {
    console.log("Number is greater than 10");
} else {
    console.log("Number is lesser than 10");
}

// Email Verification 
    // Input an email
    // Length of email > 11
    // after . only 2 or 3 characters are allowed
    // minimum 3 characters between @ and .

const email = prompt("Enter the email address");

const emailLen = email.length;
const dotIndex = email.lastIndexOf('.'); // returns index of .
const atIndex = email.lastIndexOf('@'); // return index of @
const lastIndex = emailLen - 1;

if (emailLen < 11 || 
    lastIndex - dotIndex < 2 || 
    lastIndex - dotIndex > 3 ||
    dotIndex - atIndex < 3 ) {
    console.log("Invalid Email");
} else {
    console.log('Valid Email');
}

/*if (emailLen >= 11 &&
    lastIndex - dotIndex >= 2 &&
    lastIndex - dotIndex <= 3 &&
    dotIndex - atIndex >= 3 &&
    atIndex >=2) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email")
}*/