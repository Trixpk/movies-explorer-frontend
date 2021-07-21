import './AboutMe.css';
import Title from "../Title/Title";
import Avatar from '../../images/ava.jpg';
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {

    return (
        <section className="about-me container">
            <Title text="Студент"/>
            <div className="about-me__wrapper">
                <img className="about-me__image" src={Avatar} alt="Павел Поляков"/>
                <div className="about-me__info">
                    <h3 className="about-me__name">Павел</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
                        есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
                        в
                        компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className="about-me__social">
                        <li className="about-me__social-item">
                            <a className="about-me__social-link" target="_blank" href="https://www.facebook.com/trixpk">Facebook</a>
                        </li>
                        <li className="about-me__social-item">
                            <a className="about-me__social-link" target="_blank" href="https://github.com/Trixpk">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Portfolio/>
        </section>
    );
}