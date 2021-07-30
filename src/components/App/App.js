import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={ Main } />
                <Route path="/movies" component={ Movies } />
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
