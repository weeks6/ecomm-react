import React from 'react'
import { NavLink } from "react-router-dom";
import BannerLarge from "../img/banner_large.png";
import Banner from "../img/banner.png";
import Arrow from "../img/arrow_icon.png";

import Section from "../components/Section"

import { useBooks } from "../store/store"

function Main() {

  const categories = useBooks(state => state.categories)

  return (
    <>
      <section className="promo container">
        <ul className="promo-banners">
          <li className="promo-banner promo-banner_large">
            <h1 className="promo__heading">20 лет серии Halo</h1>
            <NavLink to={"/category/" + categories[2].id} className="promo__link">
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </NavLink>
            <img src={BannerLarge} alt="" className="promo-banner__img" />
          </li>
          <li className="promo-banner">
            <h1 className="promo__heading">Mass Effect возвращается</h1>
            <NavLink to={"/category/" + categories[1].id} className="promo__link">
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </NavLink>
            <img src={Banner} alt="" className="promo-banner__img" />
          </li>
          <li className="promo-banner">
            <h1 className="promo__heading">Mass Effect возвращается</h1>
            <NavLink to={"/category/" + categories[1].id} className="promo__link">
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </NavLink>
            <img src={Banner} alt="" className="promo-banner__img" />
          </li>
        </ul>
      </section>

      {categories.map(categorie => <Section key={categorie.id} id={categorie.id} title={categorie.title} books={categorie.books} />)}
    </>
  )
}

export default Main
