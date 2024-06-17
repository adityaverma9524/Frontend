const car = {
    name: '',
    segment: '',
    getDetails(name) {
        console.log(`Your car is ${name}`);
    }
};

// Object.create()
const car1 = Object.create(car); // car1 has car.prototype
car1.name = 'Audi';
car1.segment = 'Sedan';
console.log(car1);
console.log(car1.__proto__);
car1.getDetails("Audi");

const car2 = Object.assign(car1); // car1 has car.prototype & properties same as car1
console.log(car2);

// Object.assign()
// Object.assign(target, source1, source2, ...);
const source = { name: 'John', age: 30 };

// Cloning an Object
const clone = Object.assign({}, source);
console.log(clone); // Output: { name: 'John', age: 30 }

// Merging Objects
const source1 = { name: 'Harry' };
const source2 = { age: 35 };
const merged = Object.assign(source1, source2);
console.log(merged); // Output: { name: 'John', age: 30 }

// Overwriting Properties
const updated = Object.assign(source, source1);
console.log(updated);
