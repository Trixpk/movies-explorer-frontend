import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {

    return(
        <div className="movies container">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </div>
    );
}