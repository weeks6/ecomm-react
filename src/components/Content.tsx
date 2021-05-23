import "../blocks/content.css";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Category from "../pages/Category";
import Book from "../pages/Book";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Order from "../pages/Order";

const Content = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/category/:id">
          <Category />
        </Route>
        <Route path="/book/:id">
          <Book />
        </Route>
      </Switch>
    </>
  );
};

export default Content;
