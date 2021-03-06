import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { isSavedMovie } from '../../utils/utils';
import {useState} from "react";
import SearchEmpty from '../SearchEmpty/SearchEmpty';

export default function MoviesCardList(props) {

    const [ countMoreMovies, setCountMoreMovies ] = useState(3);

    const handleMoreClick = () => {
        setCountMoreMovies(countMoreMovies + 3);
    }

    return(
        <>
            <div className="movies container">
                {
                    props.searchMoviesEmpty || props.searchSavedMoviesEmpty ? <SearchEmpty/> : null   
                }
                {
                    (props.isMoviesLoading) ? <Preloader/> : null
                }
                
                {
                    props.movies.slice(0, countMoreMovies).map(movie => {
                        const like = isSavedMovie(movie);

                        return <MoviesCard
                            isSavedPage={ props.isSavedPage }
                            onSaveMovie={ props.onSaveMovie }
                            key={ movie._id || movie.id }
                            movie={ movie }
                            onDeleteMovie={ props.onDeleteMovie }
                            isLiked={ (like.length > 0) ? true : false }
                        />
                    })
                }
            </div>
            {
                (props.movies.length > 3 && !props.isSavedPage && props.movies.length > countMoreMovies) ? <button onClick={ handleMoreClick } className="movies__more">Еще</button> : null
            }

        </>
    );
}