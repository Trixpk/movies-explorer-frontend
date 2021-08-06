import './MainMenu.css';
import { Link } from 'react-router-dom';

export default function MainMenu() {

    return(
        <nav className="main-menu">
            <Link className="main-menu__link" to="/movies">Фильмы</Link>
            <Link className="main-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
        </nav>
    );
}