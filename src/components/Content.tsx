import React from "react";
import picture from "../assets/picture.jpeg";
import "./content.scss";

export const Content: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <img src={picture} alt="rocket" className="center-img" />
    </div>
  );
};
