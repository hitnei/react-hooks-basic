import React, { useState } from "react";
import "./ColorBox.scss";

function ColorBox() {
  const [color, setColor] = useState(() => {
    //   avoid set state every time component rerender
    return localStorage.getItem("box_color") || "deeppink";
  });

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };

  const getRandomColor = () => {
    const COLOR_LIST = [
      "deeppink",
      "green",
      "yellow",
      "orange",
      "black",
      "blue",
    ];
    const randomIndex = Math.trunc(Math.random() * 6);
    return COLOR_LIST[randomIndex];
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={() => {
        handleBoxClick();
      }}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
