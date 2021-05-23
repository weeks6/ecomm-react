import React from "react";
import { NavLink } from "react-router-dom";

export type Item = {
  text: string;
  url: string;
};

interface Props {
  title: String;
  items: Item[];
}

const MenuItem = ({ title, items }: Props) => {
  return (
    <>
      <ul className="menu-item">
        <h3 className="menu-item__heading">{title}</h3>
        {items.map((link, index) => {
          return (
            <li className="menu-item__link" key={index}>
              <NavLink to={link.url}>{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuItem;
