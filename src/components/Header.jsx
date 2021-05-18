import { useState } from "react";
import "../blocks/header.css";
import LogoImage from "../img/logo_white.svg";
import CatalogMenu from "./CatalogMenu";

const Header = () => {
  const [isCatalogMenuOpened, setIsCatalogMenuOpened] = useState(false);

  const onOpenChange = (value) => {
    setIsCatalogMenuOpened(value);
  };

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header-part">
          <img src={LogoImage} alt="Логотип Volu." className="header__logo" />
          <button
            className="btn header__menu"
            tabIndex="1"
            onClick={() => onOpenChange(true)}
          >
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
      <CatalogMenu open={isCatalogMenuOpened} handleMenu={onOpenChange} />
    </header>
  );
};

export default Header;
