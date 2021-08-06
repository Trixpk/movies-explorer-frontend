import './NavTab.css';

export default function NavTab() {

    return (
        <nav className="menu">
            <a className="menu__link" href="#about">О проекте</a>
            <a className="menu__link" href="#tech">Технологии</a>
            <a className="menu__link" href="#student">Студент</a>
        </nav>
    );
}