import "./Header.scss";
import chewbacca from "../../assets/chewbacca.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__icon" alt="Chewbacca" src={chewbacca} />
      <h1 className="header_title">Search for you favorite character!</h1>
    </div>
  );
};

export default Header;
