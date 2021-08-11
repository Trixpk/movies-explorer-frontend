import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {

    return(
        <>
            <div className="movies container">
                <MoviesCard isSavedPage={true} />
                <MoviesCard />
                <MoviesCard isLiked={true} />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button className="movies__more">Еще</button>
        </>
    );
}