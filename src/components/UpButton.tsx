import { useEffect, useState } from "react";
import useScrollPosition from "../utils/hooks/useScrollPosition";
import Fab from "./Fab";

function UpButton() {
  const REQUIRED_SCROLL = 700;
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    // console.log(scrollPosition);

    setIsVisible(scrollPosition.scrollY > REQUIRED_SCROLL);
  }, [scrollPosition]);

  const [isVisible, setIsVisible] = useState(false);

  const handleUpButton = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <Fab
      icon="expand_less"
      className={`${isVisible ? "" : "fab_hidden"}`}
      onClick={handleUpButton}
    />
  );
}

export default UpButton;
