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

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={ Main } />
                <Route path="/movies" component={ Movies } />
                <Route path="/saved-movies" component={ SavedMovies } />
                <Route path="/signup" component={ Register } />
                <Route path="/signin" component={ Login } />
                <Route path="/profile" component={ Profile } />
                <Route path="*" component={ NotFound } />
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
