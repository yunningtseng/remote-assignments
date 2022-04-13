var watchList = [
    {
        Title: 'Inception',
        imdbRating: '8.8',
        Type: 'movie',
    },
    {
        Title: 'Interstellar',
        imdbRating: '8.6',
        Type: 'movie',
    },
    {
        Title: 'The Dark Knight',
        imdbRating: '9.0',
        Type: 'movie',
    },
    {
        Title: 'Batman Begins',
        imdbRating: '7.9',
        Type: 'movie',
    },
]

const rating = watchList.map((movie) => ({
    title: movie.Title,
    rating: movie.imdbRating,
}))

console.log(rating);