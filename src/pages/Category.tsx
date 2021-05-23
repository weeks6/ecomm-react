import React from "react";
import { useParams } from "react-router-dom";

import { Category, useBooks } from "../store/store";

import Section from "../components/Section";
import NotFound from "../components/NotFound";

function CategoryComponent() {
  let { id } = useParams<{ id: string }>();

  const categories = useBooks((state) => state.categories);
  let category: Category | null = null;

  if (id !== undefined) {
    category = categories.filter((v) => v.id === parseInt(id))[0];
  }

  return category ? (
    <Section id={parseInt(id)} title={category.title} books={category.books} />
  ) : (
    <NotFound />
  );
}

export default CategoryComponent;
