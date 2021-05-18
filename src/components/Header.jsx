import "../blocks/header.css";
import LogoImage from "../img/logo_white.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header-part">
          <img src={LogoImage} alt="Логотип Volu." className="header__logo" />
          <button className="btn header__menu" tabIndex="1">
            <span className="material-icons-two-tone header__menu-icon">
              menu
            </span>
            Каталог
          </button>
        </div>
        <nav className="header-part">
          <button className="btn header__nav-btn">
            <span className="material-icons">local_shipping</span>
          </button>
          <button className="btn header__nav-btn">
            <span className="material-icons">shopping_cart</span>
          </button>
          <button className="btn header__nav-btn">
            <span className="material-icons">account_circle</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
