import create, { State } from "zustand";
import cover from "../img/book_cover_placeholder.png";

export type Book = {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: number;
  description: string;
  category: Category;
  reviews: number[];
};

export type Category = {
  id: number;
  title: string;
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
  content: {
    book: Book;
    amount: number;
  }[];
};

export type Order = {
  content: Book[];
  date: Date;
  status: Status;
};

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  cart: Cart;
  orders: Order[];
  reviews: Review[];
  favourites: Book[];
};

export type Review = {
  id: number;
  userId: number;
  rating: number;
  content: string;
};

type useAuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

// Fake data
export const newCategory: Category = {
  id: 1,
  title: "Новинки",
};

export const haloCategory: Category = {
  id: 2,
  title: "Halo",
};

export const meCategory: Category = {
  id: 3,
  title: "Mass Effect",
};

const reviews: Review[] = [
  {
    id: 1,
    userId: 1,
    content:
      "Точно не проплаченный отзыв на книгу от какого-нибудь рандома из интернетов",
    rating: 4,
  },
  {
    id: 2,
    userId: 2,
    content:
      "Точно не проплаченный отзыв на книгу от какого-нибудь рандома из интернетов",
    rating: 3,
  },
];

export const books: Book[] = [];
let counter = 1;

for (let index = 0; index < 5; index++) {
  books.push({
    id: counter,
    author: "Автор книги",
    cover,
    price: 3421,
    title: "Название книги",
    description: `Очень много всякой бесполезной информации о книге,
      которую никто никогда не читает, потому что все говорят,
      что судить книгу по обложке нельзя, но при этом покупают
      книги только из-зза обложек или, иногда, авторов.`,
    reviews: [2],
    category: newCategory,
  });
  counter += 1;
}

for (let index = 0; index < 7; index++) {
  books.push({
    id: counter,
    author: "Автор книги",
    cover,
    price: 5423,
    title: "Название книги",
    description: `Очень много всякой бесполезной информации о книге,
      которую никто никогда не читает, потому что все говорят,
      что судить книгу по обложке нельзя, но при этом покупают
      книги только из-зза обложек или, иногда, авторов.`,
    reviews: [1, 2],
    category: haloCategory,
  });
  counter += 1;
}

for (let index = 0; index < 7; index++) {
  books.push({
    id: counter,
    author: "Автор книги",
    cover,
    price: 1233,
    title: "Название книги",
    description: `Очень много всякой бесполезной информации о книге,
      которую никто никогда не читает, потому что все говорят,
      что судить книгу по обложке нельзя, но при этом покупают
      книги только из-зза обложек или, иногда, авторов.`,
    reviews: [],
    category: meCategory,
  });
  counter += 1;
}

const users: User[] = [
  {
    id: 2,
    avatar:
      "https://sun9-75.userapi.com/impg/uzx-eTxFcXuMibL9Ifq4w0C3Wqk69GIBeIuRzQ/8G6Bu_OZeGY.jpg?size=941x1080&quality=96&sign=cf74479a82d41737dd44fd4beaf9f39f&type=album",
    cart: {
      content: [],
    },
    email: "bbruh@auwdwa",
    name: "bruhawdaw",
    orders: [
      {
        content: [books[0]],
        date: new Date(2021, 5, 30),
        status: Status.BEING_DELIVERED,
      },
      {
        content: [books[1], books[2]],
        date: new Date(2021, 4, 30),
        status: Status.DELIVERED,
      },
    ],
    favourites: [],
    reviews: [],
  },
];

type useBooksStore = {
  books: Book[];
};

type useReviewsStore = {
  reviews: Review[];
};

type useUsersStore = {
  users: User[];
};

type useCartStore = {
  cart: Cart;
  addItem: (book: Book, amount: number) => void;
  editItem: (
    id: number,
    book: {
      book: Book;
      amount: number;
    }
  ) => void;
  removeItem: (id: number) => void;
};

export const useBooks = create<useBooksStore>(() => ({
  books,
}));

export const useAuth = create<useAuthStore>((set) => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user: user })),
}));

export const useReviews = create<useReviewsStore>(() => ({
  reviews,
}));

export const useRecommendations = create((set) => ({
  recommendations: {},
}));

export const useUsers = create<useUsersStore>(() => ({
  users,
}));

export const useCart = create<useCartStore>((set) => ({
  cart: {
    content: [],
  },
  addItem: (book: Book, amount: number = 1) =>
    set((state) => {
      const existingBook = state.cart.content.find((v) => v.book === book);
      if (existingBook) {
        state.editItem(book.id, {
          book,
          amount: existingBook.amount + amount,
        });
        return {
          cart: {
            content: state.cart.content,
          },
        };
      } else {
        return {
          cart: {
            content: [
              {
                book,
                amount: amount,
              },
              ...state.cart.content,
            ],
          },
        };
      }
    }),
  editItem: (
    id: number,
    value: {
      book: Book;
      amount: number;
    }
  ) =>
    set((state) => {
      const bookToEdit = state.cart.content.findIndex((v) => v.book.id === id);

      return {
        cart: {
          content: [
            ...state.cart.content.slice(0, bookToEdit),
            {
              book: value.book,
              amount: value.amount,
            },
            ...state.cart.content.slice(
              bookToEdit,
              state.cart.content.length - 1
            ),
          ],
        },
      };
    }),

  removeItem: (id: number) =>
    set((state) => ({
      cart: {
        content: [...state.cart.content.filter((v) => v.book.id !== id)],
      },
    })),
}));
