import { useState } from 'react';
import { getTimeFromMins, isSavedMovie } from '../../utils/utils';
import './MoviesCard.css';

export default function MoviesCard(props) {

    const movieDuration = getTimeFromMins(props.movie.duration);
    const [isLiked, setIsLiked] = useState(props.isLiked);

    const handleLikeClick = (ev) => {
        if(ev.target.className === "movie__like") {
            const data = { 
                country: props.movie.country,
                director: props.movie.director,
                duration: props.movie.duration,
                year: props.movie.year,
                description: props.movie.description,
                image: 'https://api.nomoreparties.co' + props.movie.image.url,
                trailer: props.movie.trailerLink,
                thumbnail: 'https://api.nomoreparties.co' + props.movie.image.formats.thumbnail.url,
                movieId: props.movie.id,
                nameRU: props.movie.nameRU,
                nameEN: props.movie.nameEN
            };
            props.onSaveMovie(data);
            setIsLiked(true);
        }else {
            const savedMovie = isSavedMovie(props.movie);

            if(savedMovie.length > 0) {
                props.onDeleteMovie(savedMovie[0]._id);
            }
            setIsLiked(false);
        }  
    }

    const handleDeleteMovie = () => {
        props.onDeleteMovie(props.movie._id);
    }

    const imageUrl = props.isSavedPage ? props.movie.image : 'https://api.nomoreparties.co' + props.movie.image.url;
    return(
        <div className="movie">
            <div className="movie__info">
                <div className="movie__description">
                    <h2 className="movie__title">{ props.movie.nameRU }</h2>
                    <span className="movie__duration">{ movieDuration }</span>
                </div>
                {
                (props.isSavedPage) ?
                <button className="movie__delete" onClick={ handleDeleteMovie } />
                :
                <button onClick={ handleLikeClick } className={ (isLiked) ? 'movie__liked' : 'movie__like' } />
                }
            </div>
            <a href={ props.movie.trailerLink } target="_blank" rel="noreferrer">
                <img className="movie__image" src={ imageUrl } alt={ props.movie.nameRU } />
            </a>
        </div>
    );
}