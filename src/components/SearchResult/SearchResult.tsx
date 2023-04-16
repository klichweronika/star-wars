import './SearchResult.scss';

function SearchResult() {
    return (
        <div className="result-card" onClick={() => console.log('elo')}>
            <h2 className="result-card__name">name</h2>
            <div className='result-card__details'>
                <span>Homeworld: data</span>
                <span>Population: data</span>
            </div>
        </div>
    );
};

export default SearchResult;
