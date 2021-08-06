import './MoviesCard.css';
import MoviePic from '../../images/movie.jpg';

export default function MoviesCard() {

    return(
        <div className="movie">
            <div className="movie__info">
                <div className="movie__description">
                    <h2 className="movie__title">33 слова о дизайне</h2>
                    <span className="movie__duration">1ч 42м</span>
                </div>
                <button className="movie__like" />
            </div>
            <img className="movie__image" src={ MoviePic } alt="фильм" />
        </div>
    );
}