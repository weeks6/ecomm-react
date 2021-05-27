import { useState, useEffect } from "react";
import { debounce } from "../Debounce";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debounced = debounce(handleResize, 1000);

    window.addEventListener("resize", debounced);

    handleResize();

    return () => {
      debounced.cancel();
      window.removeEventListener("resize", debounced);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
