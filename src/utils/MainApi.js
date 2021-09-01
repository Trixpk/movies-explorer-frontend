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
            headers: this._headers,
            credentials: 'include'
        })
        .then(res => {
            return this._checkRequest(res);
        })
    }

    authorize = (data) => {
        return fetch(this._baseUrl + '/signin', {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data),
            credentials: "include"
        })
        .then(res => {
            return this._checkRequest(res);
        })
    }

    register = (data) => {
        return fetch(this._baseUrl + '/signup', {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => {
            return this._checkRequest(res);
        })
    }

    updateProfile = (data) => {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data),
            credentials: "include"
        })
        .then(res => {
            return this._checkRequest(res);
        })
    }

    signOut = () => {
        return fetch(this._baseUrl + '/signout', {
            headers: this._headers,
            method: 'POST',
            credentials: 'include'
        })
        .then(res => {
            this._checkRequest(res);
        })
    }

    checkToken = (token) => {
        return fetch(this._baseUrl + '/users/me', {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET',
            credentials: "include"
        }).then((res) => {
            return this._checkRequest(res);
        })
    }

    saveMovie = (data) => {
        return fetch(this._baseUrl + '/movies', {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include'
        })
        .then(res => {
            return this._checkRequest(res);
        })
    }

    deleteMovie = (movieId) => {
        return fetch(this._baseUrl + '/movies/' + movieId, {
            headers: this._headers,
            method: 'DELETE',
            credentials: 'include'
        })
        .then(res => {
            this._checkRequest(res);
        })
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.trixpk.nomoredomains.club',
    headers: {
        "Content-Type": "application/json"
    }
})