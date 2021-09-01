const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
};

const isSavedMovie = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));

    if(savedMovies !== null) {
        const result = savedMovies.filter((item) => {
            return item.movieId === movie.id;
        })
        return result;
    }

    return false;
}

module.exports = {
    getTimeFromMins,
    isSavedMovie
}