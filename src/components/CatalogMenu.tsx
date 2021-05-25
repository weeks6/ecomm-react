import "../blocks/catalog-menu.css";
import { useEffect, useState } from "react";
import { useBooks } from "../store/store";
import MenuItem, { Item } from "./MenuItem";

interface Props {
  open: boolean;
  handleMenu: (open: boolean) => void;
}

const CatalogMenu = ({ open, handleMenu }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const categories = useBooks((state) => new Set(state.books.map(book => book.category)));

  const menuSection = {
    title: "Популярные",
    items: Array.from(categories).map((category) => {
      const item: Item = {
        text: category.title,
        url: `/category/${category.id}`,
      };
      return item;
    }),
  };

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
            <MenuItem title={menuSection.title} items={menuSection.items} />
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
