
import { useContext } from 'react';
import Context from '../../context/Context';
import './SearchResult.scss';


function SearchResult(...props: any) {
    const { name, data } = props;
    const { setCartDetailsOpen } = useContext(Context);

    const handleCartClick = () => {
        setCartDetailsOpen(true);
    };

    return (
        <div className="result-card" onClick={handleCartClick}>
            <h2 className="result-card__name">name</h2>
            <div className='result-card__details'>
                <span>Homeworld: {name}</span>
                <span>Population: data</span>
            </div>
        </div>

    );
};

export default SearchResult;
