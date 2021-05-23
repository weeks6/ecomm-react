import create from "zustand";
import cover from "../img/book_cover_placeholder.png";

export const Categories = [
  {
    id: 1,
    title: "Новинки",
    books: [
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
    ],
  },
  {
    id: 2,
    title: "Mass Effect",
    books: [
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
    ],
  },
  {
    id: 3,
    title: "Halo",
    books: [
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },

      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },

      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
      {
        title: "Название книги",
        author: "Автор книги",
        cover,
        price: 3421,
      },
    ],
  },
];

let counter = 1;

Categories.forEach((category) =>
  category.books.forEach((book) => {
    book.id = counter;
    counter += 1;
  })
);

export const useBooks = create((set) => ({
  categories: Categories,
}));
