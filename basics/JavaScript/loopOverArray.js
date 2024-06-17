const students = ['Ram', 'Sham', 'Ghanshyam', 'Alexa', 'Gemini'];

// for(let i = 0; i < students.length; i++) {
//     console.log(`Roll No ${i + 1}: ${students[i]}`);
// }

/* Equivalent to this */

// for .. in loop
for(let i in students) { // i here is a string
    console.log(`Roll No ${Number(i) + 1}: ${students[i]}`);
}

// for .. of loop
for(let stu of students) { // here stud is iterator(Not index, but index-value(list-item))
    console.log(stu);
}