import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import AccountButton from '../AccountButton/AccountButton';
import MainMenu from '../MainMenu/MainMenu';

export default function Header(props) {
    const headerButtonsClass = (props.loggedIn) ? 'header__buttons header__buttons_hidden' : 'header__buttons';
    return(
        <>
        <MobileMenu />
        <header className="header container">
            <Link to="/" target="_self">
                <img className="header__logo" src={ logo } alt="Дипломный проект"/>
            </Link>
            <div className={ headerButtonsClass }>
                <Link to="/signup" className="header__signup">Регистрация</Link>
                <Link to="/signin" className="header__signin">Войти</Link>
            </div>
            <MainMenu loggedIn={ props.loggedIn } />
            <AccountButton loggedIn={ props.loggedIn } />
            <span className="header__burger"></span>
        </header>
        </>
    );
}