import { Link } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import './MobileMenu.css';

export default function MobileMenu() {

    return(
        <div className="mobile-menu">
            <span className="mobile-menu__close"></span>
            <nav className="mobile-menu__links">
                <Link to="/" className="mobile-menu__link"><span>Главная</span></Link>
                <Link to="/movies" className="mobile-menu__link"><span className="mobile-menu__link_active">Фильмы</span></Link>
                <Link to="/saved-movies" className="mobile-menu__link"><span>Сохранённые фильмы</span></Link>
            </nav>
            <AccountButton />
        </div>
    );
}