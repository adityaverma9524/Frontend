const students = {
    name: 'Alexa',
    age: 10,
    100: 'Hundred',
    show: function(name) {
        console.log('This is the Student details section');
    }
};

students.hobby = 'dancing';

console.log(students);
console.log(students.name);
console.log(students['name']);
console.log(students[100]);
students.show();