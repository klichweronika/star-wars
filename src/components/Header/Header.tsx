import './Header.scss';
import chewbacca from "../../assets/chewbacca.png";


// import chewbacca from './assets/chewbacca.png';

function Header() {
    return (
        <div className="header">
            <div className="header__icon">
                <img alt="Chewbacca" src={chewbacca}></img>
            </div>
            <h1 className="header_title">
                Search for you favorite character!
            </h1>
            <span>
                Search for you favorite character!
            </span>
        </div>
    );
}

export default Header;
