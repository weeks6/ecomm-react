import create from "zustand";
import cover from "../img/book_cover_placeholder.png";

export type Book = {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: number;
};

export type Category = {
  id: number;
  title: string;
  books: Book[];
};

export enum Status {
  PLACED,
  IN_PROGRESS,
  BEING_DELIVERED,
  DELIVERED,
  CLOSED,
  CANCELED,
}

export type Cart = {
  content: Book[];
};

export type Order = {
  content: Book[];
  date: Date;
  status: Status;
};

export type User = {
  name: string;
  email: string;
  avatar: string;
  cart: Cart;
  orders: Order[];
};

// Fake data
const Categories: Category[] = [];
const books: Book[] = [];
let counter = 1;
for (let index = 0; index < 5; index++) {
  books.push({
    id: counter,
    author: "Автор книги",
    cover,
    price: 3421,
    title: "Название книги",
  });

  counter += 1;
}

for (let index = 0; index < 3; index++) {
  if (index === 0) {
    Categories.push({
      id: index,
      title: "Новинки",
      books,
    });
  }
  if (index === 1) {
    Categories.push({
      id: index,
      title: "Mass Effect",
      books,
    });
  }
  if (index === 2) {
    Categories.push({
      id: index,
      title: "Halo",
      books,
    });
  }
}

export const useBooks = create(() => ({
  categories: Categories,
}));

type useAuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAuth = create<useAuthStore>((set) => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user: user })),
}));
