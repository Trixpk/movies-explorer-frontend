import './Header.css';
import logo from '../../images/logo.svg';

export default function Header() {

    return(
        <header className="header">
            <img className="header__logo" src={ logo } alt="Дипломный проект"/>
            <div className="header__buttons">
                <button className="header__signup">Регистрация</button>
                <button className="header__signin">Войти</button>
            </div>
        </header>
    );
}