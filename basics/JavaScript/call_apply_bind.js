const car = {
    name: 'car',
    color: 'black',

    getDetails(brand, seats) {
        console.log(`
        This is a ${this.color} ${this.name} of ${brand} company.
        It has ${seats} seats.
        `);
    },
};

const bus = {
    name: 'bus',
    color: 'blue',
};

// Calling method(function) from car(object) for car(object)
car.getDetails('Audi', 5);

// Calling method(function) from car(object) for bus(object)
car.getDetails.call(bus, 'Volvo', 50); 
car.getDetails.apply(bus, ['Mercedes Benz', 80]);

// Binding method(function) of car(object) for bus(object)
const veh1 = car.getDetails.bind(bus); // now veh1 is equivalent to getDetails for bus
veh1('Lexus', 50);