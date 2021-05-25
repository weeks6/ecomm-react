import "../blocks/book.css"

import { NavLink, useParams } from "react-router-dom";
import { useBooks } from "../store/store";

import Reviews from "../components/Book/Reviews";
import Recommends from "../components/Recommends"

function Book() {
  const { id } = useParams<{ id: string }>();

  const book = useBooks(state => state.books.filter(book => book.id === parseInt(id)))[0]

  const recommends = useBooks(state => state.books.filter(v => v.category.id === book.category.id && v.id !== book.id ))

  return (
    <section className="book-page container">
      <div className="book__container">
          <div className="book__image-container">
              <img src={book.cover} alt="" className="book__image" />
          </div>
          <div className="book__content">
            <h2 className="book__title">{book.title}</h2>
            <span className="book__author">{book.author}</span>
            <p className="book__description">{book.description}</p>
            <NavLink to={"/category/" + book.category.id} className="book__link book__link_more">
              <span className="book__link-text">
                Больше по вселенной 
              </span>
              <span className="material-icons book__link-icon">
                arrow_forward
              </span>  
            </NavLink> 
            <span className="book__price">
              {new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
              }).format(book.price)}
            </span>
            <div className="book__actions">
              <button className="btn book__cta book__cta_cart">
                <span className="book__cta-text">В корзину</span>
                <span className="material-icons book__cta-icon">shopping_cart</span>
              </button>
              <button className="btn book__cta book__cta_fav">
                <span className="material-icons book__cta-icon">auto_awesome</span>
              </button>    
            </div>  
          </div> 
      </div>    
      <Recommends title="Похожие" recommends={recommends}/>
      <Reviews reviews={book.reviews}/>
    </section>
  );
}

export default Book;
