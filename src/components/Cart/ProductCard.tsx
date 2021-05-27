import { Book } from "../../store/store";

type Props = {
  book: Book;
  amount: number;
  onAmountChange: (
    id: number,
    value: {
      book: Book;
      amount: number;
    }
  ) => void;
};

function ProductCard({ book, amount, onAmountChange }: Props) {
  return (
    <div className="cart-card">
      <img src={book.cover} alt="" className="cart-card__image" />
      <div className="cart-card__content">
        <div className="cart-card__content-inner">
          <h2 className="cart-card__title">{book.title}</h2>
          <span className="cart-card__author">{book.author}</span>
        </div>
        <span className="cart-card__price">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(book.price * amount)}
        </span>
        <div className="cart-card__amount">
          <button
            className="btn cart-card__btn"
            onClick={() =>
              onAmountChange(book.id, { book, amount: amount - 1 })
            }
          >
            <span className="material-icons cart-card__btn_icon">remove</span>
          </button>
          <span className="cart-card__amount-value">{amount}</span>
          <button
            className="btn cart-card__btn"
            onClick={() =>
              onAmountChange(book.id, { book, amount: amount + 1 })
            }
          >
            <span className="material-icons cart-card__btn_icon">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
