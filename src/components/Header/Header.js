import './Header.css';
import logo from '../../images/logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import AccountButton from '../AccountButton/AccountButton';
import MainMenu from '../MainMenu/MainMenu';

export default function Header() {

    return(
        <>
        <MobileMenu />
        <header className="header container">
            <Switch>
                <Route exact path="/">
                    <Link to="/" target="_self">
                        <img className="header__logo" src={ logo } alt="Дипломный проект"/>
                    </Link>
                    <div className="header__buttons">
                        <Link to="/signup" className="header__signup">Регистрация</Link>
                        <Link to="/signin" className="header__signin">Войти</Link>
                    </div>
                    <span className="header__burger"></span>
                </Route>
                <Route exact path="/saved-movies">
                    <Link to="/" target="_self">
                        <img className="header__logo" src={ logo } alt="Дипломный проект"/>
                    </Link>
                    <MainMenu />
                    <AccountButton />
                    <span className="header__burger"></span>
                </Route>
                <Route exact path="/movies">
                    <Link to="/" target="_self">
                        <img className="header__logo" src={ logo } alt="Дипломный проект"/>
                    </Link>
                    <MainMenu />
                    <AccountButton isHidden={true} />
                    <span className="header__burger"></span>
                </Route>
                <Route exact path="/profile">
                    <Link to="/" target="_self">
                        <img className="header__logo" src={ logo } alt="Дипломный проект"/>
                    </Link>
                    <MainMenu />
                    <AccountButton />
                    <span className="header__burger"></span>
                </Route>
            </Switch>
          
        </header>
        </>
    );
}