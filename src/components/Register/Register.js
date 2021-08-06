import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

export default function Register() {

    return(
        <form className="signup">
            <Link to="/" target="_self">
                <img className="header__logo" src={ logo } alt="Дипломный проект"/>
            </Link>
            <h1 className="signup__title">Добро пожаловать!</h1>
            <div className="signup__item">
                <input className="signup__input" type="text" required />
                <label className="signup__label">Имя</label>
            </div>
            <div className="signup__item">
                <input className="signup__input" type="text" required />
                <label className="signup__label">E-mail</label>
            </div>
            <div className="signup__item">
                <input className="signup__input" type="password" required />
                <label className="signup__label">Пароль</label>
                <span className="signup__error-notice">Что-то пошло не так...</span>
            </div>
            <button type="submit" className="signup__submit">Зарегистрироваться</button>
            <div className="signup__caption">Уже зарегистрированы?
                <Link to="/signin" className="signup__caption-link"> Войти</Link>
            </div>
        </form>
    );
}