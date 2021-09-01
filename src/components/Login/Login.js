import './Login.css';
import logo from '../../images/logo.svg';
import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';

export default function Login(props) {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        props.onLogin(loginData);
    }

    return(
        <>
        { 
            props.loggedIn 
                ?
            <Redirect to="/" />
                :
            <form className="signin" onSubmit={ handleSubmit }>
            <Link to="/" target="_self">
                <img className="header__logo" src={ logo } alt="Дипломный проект"/>
            </Link>
            <h1 className="signin__title">Рады видеть!</h1>
            <div className="signin__item">
                <input name="email" onChange={ handleChange } className="signin__input" type="email" autoComplete="email" required />
                <label className="signin__label">E-mail</label>
            </div>
            <div className="signin__item">
                <input name="password" onChange={ handleChange } className="signin__input" type="password" required />
                <label className="signin__label">Пароль</label>
                <span className="signin__error-notice">Что-то пошло не так...</span>
            </div>
            <button type="submit" className="signin__submit">Войти</button>
            <div className="signin__caption">Уже зарегистрированы?
                <Link to="/signup" className="signin__caption-link"> Зарегистрироваться</Link>
            </div>
        </form>
            
        }
        </>
    );
}