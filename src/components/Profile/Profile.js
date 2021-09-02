import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

export default function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser])

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    }

    const handleChangeEmail = (ev) => {
        setEmail(ev.target.value);
    }

    const handleUpdateProfile = (ev) => {
        ev.preventDefault();
        props.onUpdate({
            name,
            email
        });
    }

    return(
        <div className="profile">
            <h1 className="profile__title">Привет { currentUser.name }!</h1>
            <form className="profile__information">
                <div className="profile__line">
                    <label>Имя</label>
                    <input onChange={ handleChangeName } className="profile__input" name="name" type="text" value={ name } />
                </div>
                <div className="profile__line profile_border">
                    <label>E-mail</label>
                    <input onChange={ handleChangeEmail } className="profile__input" required name="email" type="email" value={ email } />
                </div>
                {
                    props.successUpdateProfile ? <div className="profile__notice">Профиль успешно сохранен</div> : null
                }
                <div className="profile__buttons">
                    <button className="profile__edit" onClick={ handleUpdateProfile } >Редактировать</button>
                    <button className="profile__signout" onClick={ props.onSignOut }>Выйти из аккаунта</button>
                </div>
            </form>
        </div>
    );
}