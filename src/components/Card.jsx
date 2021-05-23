import { NavLink } from "react-router-dom";
import Placeholder from "../img/book_cover_placeholder.png";

const Card = ({ id, title, author, price, currency }) => {
  return (
    <>
      <article className="product-card">
        <div className="product-card__body">
          <NavLink to={"/book/" + id}>
            <img src={Placeholder} alt="" className="product-card__image" />
          </NavLink>
          <div className="product-card__info">
            <h3 className="product-card__title">{title}</h3>
            <span className="product-card__author">{author}</span>
          </div>
          <div className="product-card__footer">
            <button className="btn product-card__cart">
              <span className="material-icons">shopping_cart</span>
            </button>
            <button className="btn product-card__more">
              <span className="material-icons">more_horiz</span>
            </button>
            <span className="product-card__price">
              {price}₽
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
