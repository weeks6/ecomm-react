const MenuItem = ({ title, items }) => {
  return (
    <>
      <ul className="menu-item">
        <h3 className="menu-item__heading">{title}</h3>
        {items.map((link, index) => {
          return (
            <li className="menu-item__link" key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuItem;
