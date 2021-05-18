import BannerLarge from "../img/banner_large.png";
import Banner from "../img/banner.png";
import Arrow from "../img/arrow_icon.png";

import Card from "./Card";

import "../blocks/content.css";
import { useEffect, useState } from "react";

const createProducts = (count) => {
  const elements = [];
  // console.log(count);

  for (let index = 0; index <= count; index++) {
    const element = {
      title: "Название книги",
      author: "Автор книги",
      price: 3546,
      currency: "₽"
    };

    // console.log(index);

    elements.push(element);
  }

  return elements;
};

const Content = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(createProducts(10));
  }, []);

  return (
    <>
      <section className="promo container">
        <ul className="promo-banners">
          <li className="promo-banner promo-banner_large">
            <h1 className="promo__heading">20 лет серии Halo</h1>
            <a href="/" className="promo__link">
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </a>
            <img src={BannerLarge} alt="" className="promo-banner__img" />
          </li>
          <li className="promo-banner">
            <h1 className="promo__heading">Mass Effect возвращается</h1>
            <a href="/" className="promo__link">
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </a>
            <img src={Banner} alt="" className="promo-banner__img" />
          </li>
          <li className="promo-banner">
            <h1 className="promo__heading">Mass Effect возвращается</h1>
            <a href="/" className="promo__link">
              Каталог
              <img src={Arrow} className="promo__link-icon" alt="" />
            </a>
            <img src={Banner} alt="" className="promo-banner__img" />
          </li>
        </ul>
      </section>
      <section className="products container">
        <h2 className="products__heading">
          <a href="/" className="products__link">
            Новинки
            <span className="material-icons">arrow_forward</span>
          </a>
        </h2>
        <ul className="products__list">
          {products?.map((product, index) => (
            <li className="products__list-item" key={index}>
              <Card
                title={product.title}
                author={product.author}
                price={product.price}
                currency={product.currency}
              />
            </li>
          ))}
        </ul>
        <h2 className="products__heading">
          <a href="/" className="products__link">
            Серия Halo
            <span className="material-icons">arrow_forward</span>
          </a>
        </h2>
        <ul className="products__list">
          {products?.map((product, index) => (
            <li className="products__list-item" key={index}>
              <Card
                title={product.title}
                author={product.author}
                price={product.price}
                currency={product.currency}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Content;
