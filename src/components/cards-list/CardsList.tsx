import React from "react";
import {Card} from "../card/Card";
import {CardItem} from "../../core/types/card-item";
import "./style.scss";

interface DataList {
  data: CardItem[];
}

export const CardsList: React.FC<DataList> = (props) => {
  const {data} = props;
  return (
    <div className="list__content">
      {data.map((item: CardItem) => (
        <Card
          key={item.id}
          snippet={item.snippet}
          statistics={item.statistics}
          video={item.id}
        />
      ))}
    </div>
  );
};
