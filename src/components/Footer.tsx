import "../blocks/footer.css";

import React, { useState } from "react";
import Letter from "./Letter";

function Footer() {
  const isSubscribed = () => !!localStorage.getItem("subbed");
  const [subbed, setSubbed] = useState(isSubscribed());

  const handleSubmit = (v: boolean) => {
    setSubbed(v);
  };

  return (
    <footer className="footer ">
      <div className="footer__container container">
        <div className="footer__info">
          <a href="https://github.com/weeks6" className="copyright">
            © 2021 Igor Ilin{" "}
          </a>
          <div className="footer__message">
            <span>Проект для колледжа.</span>
            <span>
              Я знаю что реальный e com не рендериться на клиенте, потому что
              SEO
            </span>
            <span>Don't @ me</span>
          </div>
        </div>
        {isSubscribed() && subbed ? null : (
          <Letter handleSubmit={handleSubmit} />
        )}
      </div>
    </footer>
  );
}

export default Footer;
