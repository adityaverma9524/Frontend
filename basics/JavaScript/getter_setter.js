class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Calculate diameter as a property of class Circle
    get diameter() {
        return this.radius*2;
    }

    set diameter(newDia) {
        if(newDia >= 0) {
            this.radius = newDia/2;
        }
        else {
            console.log(`INvalid Input !!`);
        }
    }
}

const circle = new Circle(4);
console.log(circle.radius);
console.log(circle.diameter);

circle.diameter = 5;
console.log(circle.radius);
console.log(circle.diameter);