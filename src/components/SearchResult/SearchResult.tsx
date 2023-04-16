
import { useContext } from 'react';
import Context from '../../context/Context';
import './SearchResult.scss';


function SearchResult() {
    const { setCartDetailsOpen } = useContext(Context);

    const handleCartClick = () => {
        setCartDetailsOpen(true);
    };

    return (
        <div className="result-card" onClick={handleCartClick}>
            <h2 className="result-card__name">name</h2>
            <div className='result-card__details'>
                <span>Homeworld: data</span>
                <span>Population: data</span>
            </div>
        </div>

    );
};

export default SearchResult;
