import './Profile.css';

export default function Profile() {

    return(
        <div className="profile">
            <h1 className="profile__title">Привет Павел!</h1>
            <div className="profile__information">
                <div className="profile__line">
                    <div>Имя</div>
                    <div>Павел</div>
                </div>
                <div className="profile__line profile_border">
                    <div>E-mail</div>
                    <div>pochta@yandex.ru</div>
                </div>
            </div>
            <div className="profile__buttons">
                <button className="profile__edit">Редактировать</button>
                <button className="profile__signout">Выйти из аккаунта</button>
            </div>
        </div>
    );
}