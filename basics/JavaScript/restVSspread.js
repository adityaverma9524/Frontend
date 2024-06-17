const aprilBatch = ['a', 'b'];
const mayBatch = ['c', 'd', 'e'];
const juneBatch = ['f', 'g', 'h', 'i'];

/*function addStudent(batch, student) {
    batch.push(student);
    console.log(batch);
}

addStudent(aprilBatch, 'x');
*/

// rest(...) operator
function addStudents(batch, ...students) {
    for(let i of students) {
        batch.push(i);
    }
    console.log(batch);
}
addStudents(mayBatch, 'p', 'q', 'r', 's', 't');

// spread(...) operator
// Expand / Copy

// const newBatch = mayBatch; => Deep Copy
const newBatch = [...mayBatch]; // => Shallow Copy
console.log(newBatch);

mayBatch.push('NewStudent');
console.log(mayBatch);
console.log(newBatch);

// Concatenate
const mergedBatch = [...mayBatch, ...juneBatch];
console.log(mergedBatch);