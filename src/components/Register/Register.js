import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

export default function Register(props) {
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        props.onRegister(registerData);
    }

    return(
        <>
            {
                props.loggedIn
                    ?
                <Redirect to="/" />
                    :
                    <form className="signup" onSubmit={ handleSubmit }>
                    <Link to="/" target="_self">
                        <img className="header__logo" src={ logo } alt="Дипломный проект"/>
                    </Link>
                    <h1 className="signup__title">Добро пожаловать!</h1>
                    <div className="signup__item">
                        <input name="name" onChange={ handleChange } className="signup__input" type="text" required />
                        <label className="signup__label">Имя</label>
                    </div>
                    <div className="signup__item">
                        <input name="email" onChange={ handleChange } className="signup__input" type="text" required />
                        <label className="signup__label">E-mail</label>
                    </div>
                    <div className="signup__item">
                        <input name="password" onChange={ handleChange } className="signup__input" type="password" required />
                        <label className="signup__label">Пароль</label>
                        {
                            props.authError ? <span className="signup__error-notice">Что-то пошло не так...</span> : null
                        }
                    </div>
                    <button type="submit" className="signup__submit">Зарегистрироваться</button>
                    <div className="signup__caption">Уже зарегистрированы?
                        <Link to="/signin" className="signup__caption-link"> Войти</Link>
                    </div>
                </form>
            }
        </>
    );
}