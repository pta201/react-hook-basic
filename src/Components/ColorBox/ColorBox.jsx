import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "green", "yellow", "orange", "blue"];
  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    // get color -> set color
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      ColorBox
    </div>
  );
}

export default ColorBox;
