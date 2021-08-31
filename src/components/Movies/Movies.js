import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies(props) {

    return (
        <>
            <SearchForm onSearchMovies={ props.onGetMovies } />
            <MoviesCardList 
                onSaveMovie={ props.onSaveMovie }
                onDeleteMovie={ props.onDeleteMovie }
                movies={ props.movies }
                isMoviesLoading={ props.isMoviesLoading } 
            />
        </>
    );
}