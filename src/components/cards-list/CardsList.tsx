import React from "react";
import {Card} from "../card/Card";
import {CardItem} from "../../types/card-item";
import {SearchResult} from "../../types/search-resultl";
import "./style.scss";

interface DataList {
  data: SearchResult;
}

export const CardsList: React.FC<DataList> = (props) => {
  const {data} = props;
  return (
    <div className="list__content">
      {data.items.map((item: CardItem) => (
        <Card
          key={item.id?.videoId}
          snippet={item.snippet}
          statistics={item.statistics}
          video={item.id?.videoId}
        />
      ))}
    </div>
  );
};
