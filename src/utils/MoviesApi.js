class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkRequest(result) {
        return (result.ok) ? result.json() : Promise.reject(`Ошибка ${result.status}`);
    }

    getMovies = () => {
        return fetch(this._baseUrl + '/beatfilm-movies', {
            headers: this._headers
        })
        .then(res => {
            return this._checkRequest(res);
        })
    }

}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json'
    }
})