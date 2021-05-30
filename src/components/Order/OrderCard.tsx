import React from "react";

type Props = {
  img: string;
  title: string;
  titleAdditional: string;
  subTitle: string;
  price: number;
  amount: number;
};

function OrderCard({
  img,
  title,
  subTitle,
  price,
  amount,
  titleAdditional,
}: Props) {
  return (
    <div className="order-card">
      <img src={img} alt="" className="order-card__image" />
      <div className="order-card__content">
        <div className="order-card__content-part">
          <h2 className="order-card__title">{title}</h2>
          <span className="order-card__title-add">{titleAdditional}</span>
        </div>
        <div className="order-card__content-part">
          <span className="order-card__subtitle">{subTitle}</span>
        </div>
      </div>
      <div className="order-card__content order-card__right">
        <span className="order-card__price">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(price)}
        </span>
        <span className="order-card__title-add">{amount} шт.</span>
      </div>
    </div>
  );
}

export default OrderCard;
