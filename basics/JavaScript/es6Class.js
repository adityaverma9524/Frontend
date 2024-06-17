// Constructor Function
function vehicleObj(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
}

// If we don't want to declare getDetails() method inside constructor function
vehicleObj.prototype.getDetails = function () {
    console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels.
    `);
};

// Inheritance in constructor function
function carObj(color, brand, seats) {
    vehicleObj.call(this, 'car', color, 4);
    this.brand = brand;
    this.seats = seats;
}

carObj.prototype = Object.create(vehicleObj.prototype);
carObj.prototype.getDetails = function() {
    console.log(`
        The ${this.brand} ${this.name} is ${this.color} in color.
        It is for ${this.purpose}.
        `);
}

const c1 = new carObj('Black', 'Audi', 5);
c1.getDetails();
// Class Expressions
/*
const vehicle = class {
    
}
*/

// Classes in JS.. Class declaration
class vehicle {
    // Properties
    name;
    VideoColorSpace;
    wheels;
    #regNumber; // This is a private property.

     // Static Property
    // Can only be accesed through class itself, Not through any instance like car1, car2 etc.
    static vName = 'Static Name';

    // Constructor
    constructor(name, color, wheels, number) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }
    // Here above, it is mendatory to use # for accessing private properties
    // however, if we don't use #, it will not give error, it will the assume regNumber 
    // as a new public property and assign a value to it(undefined)

    // Private Methods
    #getNumber(number) {
        return number;
    }

    // Methods
    getDetails() {
        console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels.
        Registeration Number: ${this.#getNumber(this.#regNumber)}
        `);
    }

    // Static Methods
    // Can only be accesed through class itself, Not through any instance like car1, car2 etc.
    static showMsg() {
        console.log(`This is the static method of the class.`)
    }
}

const veh1 = new vehicle('Scooter', 'Grey', 2, 8899);
console.log(veh1);
veh1.getDetails();
console.log(veh1.hasOwnProperty('name'));
console.log(veh1.hasOwnProperty('getDetails')); 
vehicle.showMsg();
console.log(vehicle.vName);

// Inheritance of Class
// Parent Class -> Child Classes

class Car extends vehicle {
    constructor(color, brand, purpose, number) {
        super('car', color, 4, number);
        this.brand = brand;
        this.purpose = purpose;
    }

    getDetails() {
        console.log(`
        The ${this.brand} ${this.name} is ${this.color} in color.
        It is for ${this.purpose}.
        `);
    }
}

const car1 = new Car('red', 'audi', 'Luzury Traveling', 1001);
car1.getDetails();
