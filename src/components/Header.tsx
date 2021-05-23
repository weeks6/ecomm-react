import { useState } from "react";
import "../blocks/header.css";
import LogoImage from "../img/logo_white.svg";
import CatalogMenu from "./CatalogMenu";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [isCatalogMenuOpened, setIsCatalogMenuOpened] = useState(false);

  const onOpenChange = (value: boolean) => {
    setIsCatalogMenuOpened(value);
  };

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header-part">
          <NavLink to="/">
            <img src={LogoImage} alt="Логотип Volu." className="header__logo" />
          </NavLink>
          <button
            className="btn header__menu"
            tabIndex={1}
            onClick={() => onOpenChange(true)}
          >
            <span className="material-icons-two-tone header__menu-icon">
              menu
            </span>
            Каталог
          </button>
        </div>
        <nav className="header-part">
          <NavLink to="/order" className="btn header__nav-btn">
            <span className="material-icons">local_shipping</span>
          </NavLink>
          <NavLink to="/cart" className="btn header__nav-btn">
            <span className="material-icons">shopping_cart</span>
          </NavLink>
          <NavLink to="/profile" className="btn header__nav-btn">
            <span className="material-icons">account_circle</span>
          </NavLink>
        </nav>
      </div>
      <CatalogMenu open={isCatalogMenuOpened} handleMenu={onOpenChange} />
    </header>
  );
};

export default Header;
