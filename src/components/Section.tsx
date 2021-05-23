import React from "react";

import { NavLink } from "react-router-dom";
import Card from "./Card";

import { Book } from "../store/store";

interface Props {
  id: Number;
  title: String;
  books: Book[];
}

const Section = ({ id, title, books }: Props) => {
  return (
    <section className="products container">
      <h2 className="products__heading">
        <NavLink to={"/category/" + id} className="products__link">
          {title}
          <span className="material-icons">arrow_forward</span>
        </NavLink>
      </h2>
      <ul className="products__list">
        {books.map((book, index) => (
          <li className="products__list-item" key={book.id}>
            <Card
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              cover={book.cover}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
