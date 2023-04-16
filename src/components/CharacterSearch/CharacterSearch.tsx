import './CharacterSearch.scss';

function CharacterSearch() {
    return (
        <div className="search">
            <input className="search__input" type="search__input" placeholder="Search characters" required></input>
            <button>search</button>
        </div>
    );
}

export default CharacterSearch;
