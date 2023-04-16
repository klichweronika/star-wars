import { useContext } from 'react';
import './CharacterDetails.scss';
import Context from '../../context/Context';

function CharacterDetails() {

    const { cartDetailsOpen, setCartDetailsOpen } = useContext(Context);

    return (
        <div className="cart-details">
            <div className="cart-details__header">
                <h3>Title: </h3>
                <button onClick={() => setCartDetailsOpen(!cartDetailsOpen)}>X</button>
            </div>
            <div className='cart-details__text'>
                <strong>
                    Release date: <span>1977-05-25</span>
                </strong>
                <strong>
                    Opening crawl: <span>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Gala..</span>
                </strong>
            </div>
        </div >
    );
}

export default CharacterDetails;
