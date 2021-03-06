import Content from "../components/Content";
import { User, Order, Book, Status, books } from "../store/store";
import { UserAuth } from "../types/auth";

export const STORAGE_KEY = "actk";

export const setAccessToken = (token: string) =>
  localStorage.setItem(STORAGE_KEY, token);
export const getAccessToken = () => localStorage.getItem(STORAGE_KEY);
export const removeAccessToken = () => localStorage.removeItem(STORAGE_KEY);

export const signUp = async (user: UserAuth) => {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const signIn = async (user: UserAuth) => {
  return new Promise<User | null>((resolve, reject) => {
    const fakeUser: User = {
      id: 1,
      avatar:
        "https://sun9-75.userapi.com/impg/uzx-eTxFcXuMibL9Ifq4w0C3Wqk69GIBeIuRzQ/8G6Bu_OZeGY.jpg?size=941x1080&quality=96&sign=cf74479a82d41737dd44fd4beaf9f39f&type=album",
      cart: {
        content: [{ book: books[0], amount: 3 }],
      },
      email: user.email,
      name: user.email,
      orders: [
        {
          content: [books[0]],
          date: new Date("06/02/2021"),
          status: Status.BEING_DELIVERED,
        },
        {
          content: [books[1], books[2]],
          date: new Date("03/25/2021"),
          status: Status.DELIVERED,
        },
      ],
      favourites: [],
      reviews: [],
    };
    setTimeout(() => {
      setAccessToken("bruh moment");
      resolve(fakeUser);
    }, 1000);
  });
};

export const signOut = async () => {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      removeAccessToken();
      resolve(true);
    }, 1000);
  });
};
