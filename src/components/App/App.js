import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import {Switch, Route, useHistory} from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {useEffect, useState} from 'react';
import {mainApi} from '../../utils/MainApi';
import {moviesApi} from '../../utils/MoviesApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [isMoviesLoading, setIsMoviesLoading] = useState(false);

    useEffect(() => {
        mainApi.getMovies()
            .then(res => {
                setSavedMovies(res.data);
            })

    }, [])

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = () => {
        if (localStorage.getItem('jwt')) {
            const jwt = localStorage.getItem('jwt');
            mainApi.checkToken(jwt)
                .then((res) => {
                    setCurrentUser(res.data);
                    setLoggedIn(true);
                })
                .catch(err => {
                    console.log(`Ошибка при проверке токена ${err}`);
                })
        }
    }

    const handleRegister = (data) => {
        mainApi.register(data)
            .then(res => {
                history.push('/signin');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleLogin = (data) => {
        mainApi.authorize(data)
            .then(res => {
                setLoggedIn(true);
                localStorage.setItem('jwt', res.jwt);
                checkToken();
                history.push('/movies');
            })
            .catch(err => {
                console.log(`Ошибка: ${err}`);
            })
    }

    const handleSearhMovies = (data) => {
        setIsMoviesLoading(true);
        moviesApi.getMovies()
            .then(res => {

                const filterData = res.filter((item) => {
                    if (data.shortFilm) {
                        return item.nameRU.includes(data.word) && item.duration < 40
                    } else {
                        return item.nameRU.includes(data.word);
                    }
                })

                localStorage.setItem('movies', JSON.stringify(filterData));
                setMovies(filterData);
            })
            .catch(err => {
                console.log(`Ошибка при получении фильмов ${err}`)
            })
            .finally(() => {
                setIsMoviesLoading(false);
            })
    }

    const handleSearchSavedMovies = (data) => {
        setIsMoviesLoading(true);
        mainApi.getMovies()
            .then(res => {
                const filterData = res.data.filter((item) => {
                    if (data.shortFilm) {
                        return item.nameRU.includes(data.word) && item.duration < 40
                    } else {
                        return item.nameRU.includes(data.word);
                    }
                })

                setSavedMovies(filterData);
                localStorage.setItem('saved-movies', JSON.stringify(res.data));
            })
            .catch(err => {
                console.log(`Ошибка при получении сохраненных фильмов ${err}`);
            })
            .finally(() => {
                setIsMoviesLoading(false);
            })
    }

    const handleSaveMovie = (data) => {
        mainApi.saveMovie(data)
            .then(res => {
                setSavedMovies([res.data, ...savedMovies]);
                localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
            })
            .catch(err => {
                console.log(`Ошибка при сохранении фильма ${err}`);
            })
    }

    const handleDeleteMovie = (movieId) => {
        mainApi.deleteMovie(movieId)
            .then(res => {
                const newMovies = savedMovies.filter((item) => item._id !== movieId);
                setSavedMovies(newMovies);
                localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
            })
            .catch(err => {
                console.log(`Ошибка при удалении карточки ${err}`);
            })
    }

    const handleSignOut = (ev) => {
        ev.preventDefault();

        mainApi.signOut()
            .then(res => {
                setLoggedIn(false);
                localStorage.removeItem('jwt');
                history.push('/signin');
            })
            .catch(err => {
                console.log(`Ошибка ${err}`);
            });
    }

    const handleUpdateProfile = (data) => {
        mainApi.updateProfile(data)
            .then(res => {
                setCurrentUser(res.data);
            })
            .catch(err => {
                console.log(`Ошибка при обновлении данных пользователя ${err}`);
            })
    }

    return (
        <div className="App">
            <CurrentUserContext.Provider value={currentUser}>
                <Switch>

                    <Route exact path="/">
                        <Header loggedIn={loggedIn}/>
                        <Main/>
                    </Route>

                    <ProtectedRoute
                        exact
                        path="/movies"
                        loggedIn={loggedIn}
                    >
                        <Header loggedIn={loggedIn}/>
                        <Movies
                            onGetMovies={handleSearhMovies}
                            movies={movies}
                            onSaveMovie={handleSaveMovie}
                            onDeleteMovie={handleDeleteMovie}
                            isMoviesLoading={isMoviesLoading}
                        />
                    </ProtectedRoute>

                    <ProtectedRoute
                        exact
                        path="/saved-movies"
                        loggedIn={loggedIn}
                    >
                        <Header loggedIn={loggedIn}/>
                        <SavedMovies
                            movies={savedMovies}
                            onGetMovies={handleSearchSavedMovies}
                            onDeleteMovie={handleDeleteMovie}
                        />
                    </ProtectedRoute>

                    <Route path="/signup">
                        <Register onRegister={handleRegister} loggedIn={loggedIn}/>
                    </Route>

                    <Route path="/signin">
                        <Login onLogin={handleLogin} loggedIn={loggedIn}/>
                    </Route>

                    <ProtectedRoute
                        exact
                        path="/profile"
                        loggedIn={loggedIn}
                    >
                        <Header loggedIn={loggedIn}/>
                        <Profile onSignOut={handleSignOut} onUpdate={handleUpdateProfile}/>
                    </ProtectedRoute>

                    <Route path="*" component={NotFound}/>

                </Switch>
                <Footer/>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
