class Movie {
    constructor(movieID, title, year, rating) {
        this.movieID = movieID;
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
}

const movies = [
    new Movie(105, "The Other Sister", 1999, 6.4),
    new Movie(102, "Music From Another Room", 1998, 6.3),
    new Movie(110, "The Castle", 1997, 7.7),
    new Movie(101, "Muriel's Wedding", 1994, 7.3),
    new Movie(108, "Angry Video Game Nerd: The Movie", 2014, 5.4),
    new Movie(103, "The Wizard", 1989, 6.1),
    new Movie(107, "The Club", 1980, 6.9),
    new Movie(104, "Paper Planes", 2014, 6.2),
    new Movie(109, "Oddball", 2015, 6.4),
    new Movie(106, "Red Dog", 2011, 7.3)
];


movies.sort((a, b) => a.movieID - b.movieID);

console.log("Movies sorted by ID:");
console.log(movies);

// Binary Search Algorithm
function binarySearch(movies, targetID) {
    let left = 0;
    let right = movies.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midID = movies[mid].movieID;

        if (midID === targetID) {
            return movies[mid]; // ✅ Found the movie
        } else if (midID < targetID) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null; // ❌ Not found
}

// ✅ Example tests
console.log("Search for Movie ID 106:");
console.log(binarySearch(movies, 106)); // Should find Red Dog

console.log("Search for Movie ID 120:");
console.log(binarySearch(movies, 120)); // Should return null (not found)
