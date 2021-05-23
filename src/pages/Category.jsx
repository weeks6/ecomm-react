import React from 'react'
import { useParams } from 'react-router-dom'

import { useBooks } from "../store/store"

import Section from "../components/Section"
import NotFound from "../components/NotFound";

function Category() {

  const { id } = useParams()
  console.log(id);
  const categories = useBooks(state => state.categories)
  const category = categories.filter(v => v.id === parseInt(id))[0]

  return (
    category ? <Section id={id} title={category.title} books={category.books} /> : <NotFound />
  )
}

export default Category
