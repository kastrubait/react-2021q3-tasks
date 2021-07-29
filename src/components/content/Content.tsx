import React from "react";
import picture from "../../assets/img/picture.jpeg";
import {SearchBar} from "../search-bar/SearchBar";
import "./style.scss";

export const Content: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <img src={picture} alt="rocket" className="center-img" />
      <SearchBar placeholder="Search..." />
    </div>
  );
};
