import './SearchForm.css';

export default function SearchForm() {

    return(
        <form className="search container">
            <div className="search__wrapper">
                <input className="search__movie" type="text" placeholder="Фильм" />
                <button className="search__submit" type="submit">Поиск</button>
            </div>
            <div className="search__filter">
                <input className="search__filter-switch" type="checkbox" />
                <span className="search__filter-name">Короткометражки</span>
            </div>
        </form>
    );
}