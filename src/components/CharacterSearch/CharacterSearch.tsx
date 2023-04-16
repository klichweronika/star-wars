import './CharacterSearch.scss';

function CharacterSearch() {
    return (
        <div className="search">
            <input className="search__input" type="search__input" placeholder="Search characters" required></input>
            <button className='search__button'>SEARCH</button>
        </div>
    );
}

export default CharacterSearch;
