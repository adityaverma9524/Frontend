// JSON.parse() is used to convert a JSON string into a JavaScript object.
const jsonString1 = '{"name": "John", "age": 30}';
const person1 = JSON.parse(jsonString1);

console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30

// JSON.stringify() is used to convert a JavaScript object into a JSON string.
const person2 = { name: "John", age: 30 };
const jsonString2 = JSON.stringify(person2);

console.log(jsonString2); // Output: {"name":"John","age":30}