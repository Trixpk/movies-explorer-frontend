import './Portfolio.css';

export default function Portfolio() {

    return(
        <section className="portfolio container">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__list-link" target="_blank" rel="noreferrer" href="https://trixpk.github.io/how-to-learn/">Статичный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__list-link" target="_blank" rel="noreferrer" href="https://trixpk.github.io/russian-travel/">Адаптивный сайт</a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__list-link" target="_blank" rel="noreferrer" href="https://convers.nomoredomains.monster/">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    );
}