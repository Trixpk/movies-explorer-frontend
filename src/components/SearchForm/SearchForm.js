import { useState } from 'react';
import './SearchForm.css';

export default function SearchForm(props) {

    const [searchData, setSearchData] = useState('');
    const [useFilter, setUseFilter] = useState(false);
    const data = {
        word: searchData,
        shortFilm: useFilter
    }

    const handleChange = (ev) => {
        const { value } = ev.target;
        setSearchData(value);
    }

    const handleChangeFilter = (ev) => {
        const { checked } = ev.target;
        setUseFilter(checked);
    }

    const handleSubmit = (ev) => {
            ev.preventDefault();

            props.onSearchMovies(data);
    }

    return(
        <form className="search container" onSubmit={ handleSubmit }>
            <div className="search__wrapper">
                <input onChange={ handleChange } value={ searchData.word } name="word" className="search__movie" type="text" placeholder="Фильм" required />
                <button className="search__submit" type="submit">Поиск</button>
            </div>
            <div className="search__filter">
                <input onChange={ handleChangeFilter } name="shortFilm" className="search__filter-switch" type="checkbox" />
                <span className="search__filter-name">Короткометражки</span>
            </div>
        </form>
    );
}