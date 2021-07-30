import './Header.css';
import logo from '../../images/logo.svg';
import { Link, Route } from 'react-router-dom';

export default function Header() {

    return(
        <header className="header container">
            <Link to="/" target="_self">
                <img className="header__logo" src={ logo } alt="Дипломный проект"/>
            </Link>
            <div className="header__buttons">
                <button className="header__signup">Регистрация</button>
                <button className="header__signin">Войти</button>
            </div>
        </header>
    );
}