// components/ColorCard.jsx
import React, { useState } from "react";

const colors = [
  "#5DADE2", // blue
  "#E67E22", // orange
  "#2ECC71", // green
];

const titles = [
  "Background Color",
  "Text Color",
  "Stroke Color"
];

const ColorCard = ({ index }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(index % colors.length);

  const handleClick = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div 
      className="card" 
      style={{ backgroundColor: colors[currentColorIndex] }}
      onClick={handleClick}
    >
      <h3>{titles[index]}</h3>
      <p>{colors[currentColorIndex]}</p>
    </div>
  );
};

export default ColorCard;