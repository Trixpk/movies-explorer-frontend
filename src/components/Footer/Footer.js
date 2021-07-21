import './Footer.css';

export default function Footer() {

    return (
        <footer className="footer container">
            <p className="footer__description">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__bottom">
                <p className="footer__copyright">© 2021</p>
                <ul className="footer_menu">
                    <li className="footer__menu-item"><a className="footer__menu-link" target="_blank"
                                                         href="#">Яндекс.Практикум</a></li>
                    <li className="footer__menu-item"><a className="footer__menu-link" target="_blank"
                                                         href="#">Github</a></li>
                    <li className="footer__menu-item"><a className="footer__menu-link" target="_blank"
                                                         href="#">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}