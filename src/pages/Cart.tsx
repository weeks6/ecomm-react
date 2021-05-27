import { Book, useCart } from "../store/store";
import "../blocks/cart.css";

import ProductCard from "../components/Cart/ProductCard";

function Cart() {
  const { cart, editItem, removeItem } = useCart();

  const handleAmountChange = (
    id: number,
    value: {
      book: Book;
      amount: number;
    }
  ) => {
    if (value.amount < 1) {
      removeItem(id);
    } else {
      editItem(id, value);
    }
  };

  return (
    <section className="cart-page container">
      <h1 className="cart-page__title">Корзина</h1>
      <ul className="cart-page__content">
        {cart.content.map((product) => (
          <ProductCard
            onAmountChange={handleAmountChange}
            amount={product.amount}
            book={product.book}
            key={product.book.id}
          />
        ))}
      </ul>
    </section>
  );
}

export default Cart;
