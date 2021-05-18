import { useEffect, useState } from "react";

import "../blocks/catalog-menu.css";
import MenuItem from "./MenuItem";

const createSections = (count) => {
  const elements = [];

  for (let index = 0; index < count; index++) {
    const element = {
      title: "Очень длинная категория прям ебанешься",
      items: [
        { text: "Опция меню", url: "/" },
        { text: "Опция меню1", url: "/" },
        { text: "Опция меню2", url: "/" },
        { text: "Опция меню3", url: "/" },
        { text: "Опция меню4", url: "/" }
      ]
    };

    elements.push(element);
  }

  return elements;
};

const CatalogMenu = ({ open, handleMenu }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(createSections(5));
  }, []);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <>
      <nav
        className={
          isOpen
            ? "catalog-menu catalog-menu_opened"
            : "catalog-menu catalog-menu_closed"
        }
      >
        <div className="catalog-menu__container">
          <button
            className="btn catalog-menu__close"
            onClick={() => handleMenu(false)}
          >
            <span className="material-icons">close</span>
          </button>
          <ul className="catalog-menu__list container">
            {sections.map((section, index) => (
              <MenuItem
                title={section.title}
                items={section.items}
                key={index}
              />
            ))}
          </ul>
        </div>
        <div
          className="catalog-menu__overlay"
          onClick={() => handleMenu(false)}
        ></div>
      </nav>
    </>
  );
};

export default CatalogMenu;
