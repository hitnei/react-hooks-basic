import { useEffect, useRef, useState } from "react";

const randomColor = (currentColor) => {
  const COLOR_LIST = ["red", "green", "yellow", "blue", "magenta", "cyan"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  const newColorList = COLOR_LIST.splice(currentIndex, 1);
  const randomIndex = Math.trunc(Math.random() * newColorList.length);
  return COLOR_LIST[randomIndex];
};

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  //  change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
