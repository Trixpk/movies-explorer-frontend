import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                

                <Route exact path="/" component={ Main } />
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
