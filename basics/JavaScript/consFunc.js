/** Work of construction function is as follows: 
 * To create multiple objects with same keys & different values(as their properties)
 */

function movie(title, year) {
    const movieOjb = {
        title: title,
        year: year,

        getDetails() {
            console.log(`
                Title: ${this.title}
                Year: ${this.year}
            `);
        }
    }
    return movieOjb;
}

const movie1 = movie('The Avengers', 2012);
const movie2 = movie('Avatar', 2018);

console.log(movie1);
console.log(movie2);
movie1.getDetails();
movie2.getDetails();

// Constructor Function
function Movie(title, year) {
    this.title = title;
    this.year = year;

    this.getDetails = function() {
        console.log(`
            Title: ${this.title}
            Year: ${this.year}
        `);
    };
}

// new keyword 
const movie3 = new Movie('Oppenhimer', 2023);
const movie4 = new Movie('Houseful', 2010);
console.log(movie3);
console.log(movie4);