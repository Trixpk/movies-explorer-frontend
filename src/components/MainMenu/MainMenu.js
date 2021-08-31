import './MainMenu.css';
import { Link } from 'react-router-dom';

export default function MainMenu(props) {
    const mainMenuClass = (props.loggedIn) ? 'main-menu' : 'main-menu main-menu_hidden';

    return(
        <nav className={ mainMenuClass }>
            <Link className="main-menu__link" to="/movies">Фильмы</Link>
            <Link className="main-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
        </nav>
    );
}