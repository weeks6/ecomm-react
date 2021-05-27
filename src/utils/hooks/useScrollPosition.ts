import { useState, useEffect } from "react";
import { debounce } from "../Debounce";

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    const debounced = debounce(handleScroll, 200);

    window.addEventListener("scroll", debounced);

    handleScroll();

    return () => {
      debounced.cancel();
      window.removeEventListener("resize", debounced);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
