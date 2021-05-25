import React from "react";
import { useParams } from "react-router-dom";

import { Category, useBooks } from "../store/store";

import Section from "../components/Section";
import NotFound from "../components/NotFound";

function CategoryComponent() {
  let { id } = useParams<{ id: string }>();

  const books = useBooks((state) => state.books.filter(v => v.category.id === parseInt(id)));

  const bookSample = books[0]

  return books ? (
    <Section id={parseInt(id)} title={bookSample.category.title} books={books} />
  ) : (
    <NotFound />
  );
}

export default CategoryComponent;
