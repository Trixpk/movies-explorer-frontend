class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkRequest(result) {
        return (result.ok) ? result.json() : Promise.reject(`Ошибка ${result.status}`);
    }

    getMovies() {
        return fetch(this._baseUrl + '/movies', {
            headers: this._headers
        })
        .then(res => {
            return this._checkRequest(res);
        })
    }

    authorize = (data) => {
        return fetch(this._baseUrl + '/signup', {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => {
            return this._checkRequest(res);
        })
    }
}

export const MainApi = new MainApi({
    baseUrl: 'https://api.trixpk.nomoredomains.club',
    headers: {
        "Content-Type": "application/json"
    }
})