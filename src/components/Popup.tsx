import { useState, useEffect, ReactNode } from "react";

import "../blocks/popup.css";

interface Props {
  open: boolean;
  handlePopup: (open: boolean) => void;
  children: ReactNode;
}

function Popup({ open, handlePopup, children }: Props) {
  const [isOpened, setIsOpened] = useState(open);

  const _handlePopup = (value: boolean) => {
    handlePopup(value);
    setIsOpened(value);
  };

  useEffect(() => {
    _handlePopup(open);
  }, [open]);

  return (
    <div className={isOpened ? "popup popup_opened" : "popup"}>
      <div className="popup__container">
        <div className="popup__body">
          <button
            className="btn popup__close"
            onClick={() => _handlePopup(false)}
          >
            <span className="material-icons">close</span>
          </button>
          {children}
        </div>
      </div>
      <div className="popup__overlay" onClick={() => _handlePopup(false)}></div>
    </div>
  );
}

export default Popup;
