import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies(props) {

    return(
        <>
            <SearchForm onSearchMovies={ props.onGetMovies } />
            <MoviesCardList isSavedPage={ true } movies={ props.movies } onDeleteMovie={ props.onDeleteMovie } />
        </>
    );
}