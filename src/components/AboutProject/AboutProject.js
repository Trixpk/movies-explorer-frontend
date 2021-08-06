import './AboutProject.css';
import Title from "../Title/Title";

export default function AboutProject() {

    return (
        <section id={"about"} className="about container">
            <Title text="О проекте" />
            <div className="about__info">
                <div className="about__stages">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.</p>
                </div>
                <div className="about__period">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.</p>
                </div>
            </div>
            <div className="about__scale">
                <div className="about__scale-week">
                    <span className="about__scale_green">1 Неделя</span>
                    <span className="about__scale-direction">Backend</span>
                </div>
                <div className="about__scale-fourweek">
                    <span className="about__scale-grey">4 Недели</span>
                    <span className="about__scale-direction">Frontend</span>
                </div>
            </div>
        </section>
    );
}