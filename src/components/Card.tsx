import { NavLink } from "react-router-dom";
import { useBooks, useCart } from "../store/store";

interface Props {
  id: Number;
  title: String;
  author: String;
  price: number;
  cover: string;
}

const Card = ({ id, title, author, price, cover }: Props) => {
  const { cart, addItem } = useCart();
  const book = useBooks((state) => state.books.find((v) => v.id === id));

  const handleCartAdd = () => {
    if (book) {
      addItem(book, 1);
    }
  };

  return (
    <>
      <article className="product-card">
        <div className="product-card__body">
          <NavLink to={"/book/" + id}>
            <img src={cover} alt="" className="product-card__image" />
          </NavLink>
          <div className="product-card__info">
            <h3 className="product-card__title">{title}</h3>
            <span className="product-card__author">{author}</span>
          </div>
          <div className="product-card__footer">
            <button className="btn product-card__cart" onClick={handleCartAdd}>
              <span className="material-icons">shopping_cart</span>
            </button>
            <button className="btn product-card__more">
              <span className="material-icons">more_horiz</span>
            </button>
            <span className="product-card__price">
              {new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
              }).format(price)}
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
