function greetUser() {
    console.log("Welcome User !!");
}

function greetUsername(userName) {
    console.log("Welcome" + userName + " !!");
}

greetUser();
greetUsername("Aditya");

function isValidIdentifier(input) {
    // Check if the identifier starts with a number
    if (/^\d/.test(input)) {
      console.log(`${input} is not a valid identifier. It starts with a number.`);
      return;
    }
  
    // Check if the identifier contains only "$" or "_"
    if (!/^[a-zA-Z$_][a-zA-Z0-9$_]*$/.test(input)) {
      console.log(`${input} is not a valid identifier. It contains invalid characters.`);
      return;
    }
  
    // If all conditions pass, it's a valid identifier
    console.log(`${input} is a valid identifier.`);
  }
  
  // Example usage:
  isValidIdentifier("9name");
  isValidIdentifier("$first_name");
//   In this example:
  
//   The first condition checks if the identifier starts with a number using the regular expression /^\d/.
//   The second condition checks if the identifier contains only valid characters (letters, numbers, "$", or "_") using the regular expression /^[a-zA-Z$_][a-zA-Z0-9$_]*$/.
//   Feel free to adjust the regular expressions or conditions based on your specific requirements.