import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import { Switch, Route } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useState } from 'react';

function App() {
    import { MainApi } from '../../utils/MainApi';
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={ Main } />
                <ProtectedRoute
                    exact
                    path="/movies"
                    loggedIn={loggedIn}
                    component={Movies}
                />
                <ProtectedRoute
                    exact
                    path="/saved-movies"
                    loggedIn={loggedIn}
                    component={SavedMovies}
                />
                <Route path="/signup" component={ Register } />
                <Route path="/signin" component={ Login } />
                <ProtectedRoute
                    exact
                    path="/profile"
                    loggedIn={loggedIn}
                    component={Profile}
                />
                <Route path="*" component={ NotFound } />
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
