import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Login() {

    return(
        <form className="signin">
            <Link to="/" target="_self">
                <img className="header__logo" src={ logo } alt="Дипломный проект"/>
            </Link>
            <h1 className="signin__title">Рады видеть!</h1>
            <div className="signin__item">
                <input className="signin__input" type="text" autoComplete="email" required />
                <label className="signin__label">E-mail</label>
            </div>
            <div className="signin__item">
                <input className="signin__input" type="password" required />
                <label className="signin__label">Пароль</label>
                <span className="signin__error-notice">Что-то пошло не так...</span>
            </div>
            <button type="submit" className="signin__submit">Войти</button>
            <div className="signin__caption">Уже зарегистрированы?
                <Link to="/signup" className="signin__caption-link"> Зарегистрироваться</Link>
            </div>
        </form>
    );
}