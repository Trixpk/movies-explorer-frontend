import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {

    return(
        <>
            <h1 className="not-found__title">404</h1>
            <p className="not-found__caption">Страница не найдена</p>
            <Link to="#" className="not-found__link">Назад</Link>
        </>
    );
}