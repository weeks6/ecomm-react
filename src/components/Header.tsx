import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../blocks/header.css";

import LogoImage from "../img/logo_white.svg";
import CatalogMenu from "./CatalogMenu";
import Popup from "./Popup";
import SignIn from "./Auth/SignIn";

import { useAuth, useCart } from "../store/store";

const Header = () => {
  const [isCatalogMenuOpened, setIsCatalogMenuOpened] = useState(false);
  const [isSigninPopupOpened, setIsSigninPopupOpened] = useState(false);

  const user = useAuth((state) => state.user);
  const { cart } = useCart();

  const onOpenChange = (value: boolean) => {
    setIsCatalogMenuOpened(value);
  };

  const onSigninPopupChange = (value: boolean) => {
    setIsSigninPopupOpened(value);
  };

  const location = useLocation();

  useEffect(() => {
    setIsCatalogMenuOpened(false);
  }, [location]);

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
          <NavLink
            to="/order"
            className="btn header__nav-btn"
            activeClassName="header__nav-btn_active"
          >
            <span className="material-icons">local_shipping</span>
          </NavLink>
          <NavLink
            to="/cart"
            className="btn header__nav-btn"
            activeClassName="header__nav-btn_active"
          >
            <span className="material-icons">shopping_cart</span>
            {cart.content.length ? (
              <span className="header__cart-counter">
                {cart.content.length}
              </span>
            ) : null}
          </NavLink>

          {user ? (
            <NavLink
              to="/profile"
              className="btn header__nav-btn"
              activeClassName="header__nav-btn_active"
            >
              <span className="material-icons">account_circle</span>
            </NavLink>
          ) : (
            <button
              className="btn header__nav-btn"
              onClick={() => onSigninPopupChange(true)}
            >
              <span className="material-icons">account_circle</span>
            </button>
          )}
        </nav>
      </div>
      <CatalogMenu open={isCatalogMenuOpened} handleMenu={onOpenChange} />
      <Popup open={isSigninPopupOpened} handlePopup={onSigninPopupChange}>
        <SignIn
          handleSubmit={() => {
            onSigninPopupChange(false);
          }}
        />
      </Popup>
    </header>
  );
};

export default Header;
