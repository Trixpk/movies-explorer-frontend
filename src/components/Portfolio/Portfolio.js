import './Portfolio.css';

export default function Portfolio() {

    return(
        <section className="portfolio container">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__list-link" href="#">Статичный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__list-link" href="#">Адаптивный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__list-link" href="#">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    );
}