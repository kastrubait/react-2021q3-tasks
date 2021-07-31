import React from "react";
import {DATA} from "../../mock-data/mock-seach-resuts";
import picture from "../../assets/img/picture.jpeg";
import {SearchBar} from "../search-bar/SearchBar";
import {CardsList} from "../cards-list/CardsList";
import "./style.scss";

export const Content: React.FC<unknown> = () => {
  return (
    <div>
      <img src={picture} alt="rocket" className="center-img" />
      <SearchBar placeholder="Search..." />
      <CardsList data={DATA} />
    </div>
  );
};
