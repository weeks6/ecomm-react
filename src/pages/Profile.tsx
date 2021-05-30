import "../blocks/profile.css";

import React from "react";
import SignIn from "../components/Auth/SignIn";
import OrderCard from "../components/Order/OrderCard";
import { Status, useAuth } from "../store/store";
import getMonth from "../utils/Month";
import getStatus from "../utils/StatusString";

function Profile() {
  const { user } = useAuth();

  console.log(user?.orders);

  return user ? (
    <section className="container profile__page">
      <div className="profile__header">
        <h1 className="profile__title heading">Профиль</h1>
        <button className="btn profile__edit">
          <span className="material-icons">edit</span>
        </button>
      </div>
      <ul className="order__list">
        {Array.from(user.orders).map((order, idx) => (
          <li className="order__item" key={idx}>
            <OrderCard
              img={order.content[0].cover}
              amount={order.content.length}
              price={order.content.reduce((a, v) => (a += v.price), 0)}
              subTitle={getStatus(order.status).text}
              title={
                order.status === Status.DELIVERED
                  ? `${order.date.getDay()} ${getMonth(order.date.getMonth())}`
                  : "Активный заказ"
              }
              titleAdditional={
                order.status === Status.DELIVERED
                  ? ""
                  : `${order.date.getDay()} ${getMonth(order.date.getMonth())}`
              }
            />
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <section className="container">
      <SignIn handleSubmit={() => {}} />
    </section>
  );
}

export default Profile;
