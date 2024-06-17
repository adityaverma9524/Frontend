// Object Literal
let movie = {
    // Object Properties
    title: 'The Avengers',
    year: 2012,
    genre: 'Action, Sci-fi, Thriller',
    cast: {
        mainLead: 'Robert Downey Jr.',
        others: 'Chris Evans',
    },

    // Object Method
    getDetails: function() {
        console.log(
            `Title: ${movie.title}\nYear: ${movie.year}\nGenre: ${movie.genre}\nCast: ${movie.cast}`
        );
    },

    getMovieDetails: function(detail) {
        console.log(movie[detail]);
    }
};

const anotherMovie = movie; // => Shallow Copy
// Changes made in anotherMovie makes changes in movie

// Adding property to an object
movie.actor = 'Tom Cruise';
movie['actress'] = 'Scarlett Jhonson';
movie = {...movie, rating: '4.5'};

console.log(movie.title);
movie.getDetails();
movie.getMovieDetails('year');
movie.getMovieDetails('genre');
console.log(movie.cast.mainLead);