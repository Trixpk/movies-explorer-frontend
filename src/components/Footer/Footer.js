import { Route, Switch } from 'react-router-dom';
import './Footer.css';

export default function Footer() {

    return (
        <footer className="footer container">
            <Switch>
                <Route path="/" exact>
                    <p className="footer__description">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                    </p>
                    <div className="footer__bottom">
                        <p className="footer__copyright">© 2021</p>
                        <ul className="footer_menu">
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://github.com/Trixpk/">Github</a></li>
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://www.facebook.com/">Facebook</a></li>
                        </ul>
                    </div>
                </Route>
                <Route path="/movies" exact>
                <p className="footer__description">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                    </p>
                    <div className="footer__bottom">
                        <p className="footer__copyright">© 2021</p>
                        <ul className="footer_menu">
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://github.com/Trixpk/">Github</a></li>
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://www.facebook.com/">Facebook</a></li>
                        </ul>
                    </div>
                </Route>
                <Route path="/saved-movies" exact>
                <p className="footer__description">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                    </p>
                    <div className="footer__bottom">
                        <p className="footer__copyright">© 2021</p>
                        <ul className="footer_menu">
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://github.com/Trixpk/">Github</a></li>
                            <li className="footer__menu-item"><a className="footer__menu-link" target="_blank" rel="noreferrer"
                                                                href="https://www.facebook.com/">Facebook</a></li>
                        </ul>
                    </div>
                </Route>
            </Switch>
        </footer>
    );
}