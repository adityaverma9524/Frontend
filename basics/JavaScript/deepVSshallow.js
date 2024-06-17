const user1 = {
    "name": "Sara",
    "age": 20,
    "marks": {
        "maths": 25,
        "Physics": 30
    }
}

// Deep Copy: Deep copying creates a completely new object or array and 
// **also duplicates all the nested objects or arrays recursively**.
// It's like making a photocopy of a document and also copying all the attachments.

// const user2 = JSON.parse(JSON.stringify(user1));
// user2.name = "Harry";
// user2.marks.maths = 10;
// console.log(user1);
// console.log(user2);

// Shallow Copy:  
/*Shallow copying creates a new object or array and copies only the top-level structure. 
  **If the original object or array contains nested objects or arrays, 
  they are still referenced, not duplicated**.
  It's like making a photocopy of a document but not copying any attachments.
  Shallow Copy(Method-1)
  /*
/*const user2 = {...user1};
console.log(user1);
console.log(user2);

user2.name = "Harry";
console.log(user1);
console.log(user2);
*/

// Shallow Copy(Method-2)
const user2 = Object.assign({}, user1);
console.log(user1);
console.log(user2);

user2.name = "Harry";
user2.marks.maths = 10;
console.log(user1);
console.log(user2);
