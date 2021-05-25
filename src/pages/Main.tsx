import React from "react";
import { NavLink } from "react-router-dom";
import BannerLarge from "../img/banner_large.png";
import Banner from "../img/banner.png";
import Arrow from "../img/arrow_icon.png";

import Section from "../components/Section";

import { useBooks, meCategory, haloCategory } from "../store/store";

function Main() {
  const categories = useBooks((state) => new Set(state.books.map(book => book.category)));

  return (
    <>
      <section className="promo container">
        <ul className="promo-banners">
          <li className="promo-banner promo-banner_large">
            <h1 className="promo__heading">20 лет серии Halo</h1>
            <NavLink
              to={"/category/" + haloCategory.id}
              className="promo__link"
            >
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </NavLink>
            <img src={BannerLarge} alt="" className="promo-banner__img" />
          </li>
          <li className="promo-banner">
            <h1 className="promo__heading">Mass Effect возвращается</h1>
            <NavLink
              to={"/category/" + meCategory.id}
              className="promo__link"
            >
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </NavLink>
            <img src={Banner} alt="" className="promo-banner__img" />
          </li>
          <li className="promo-banner">
            <h1 className="promo__heading">Mass Effect возвращается</h1>
            <NavLink
              to={"/category/" + meCategory.id}
              className="promo__link"
            >
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </NavLink>
            <img src={Banner} alt="" className="promo-banner__img" />
          </li>
        </ul>
      </section>

      {Array.from(categories).map((category) => {
        const categoryBooks = useBooks((state) => state.books.filter(book => book.category.id === category.id))

        return (<Section
          key={category.id}
          id={category.id}
          title={category.title}
          books={categoryBooks}
        />)
        })}
    </>
  );
}

export default Main;
