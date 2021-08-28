import React from "react";
import {FaEye, FaComment} from "react-icons/fa";
import {Statistic} from "../../core/types/statistics";
import "./style.scss";

export const Statistics: React.FC<Statistic> = ({viewCount, commentCount}) => {
  return (
    <div className="statistics_container">
      <div className="icon_views-count">
        <FaComment />
        <span className="stats_views-count">{commentCount}</span>
      </div>
      <div className="icon_views-count">
        <FaEye />
        <span className="stats_views-count">{viewCount}</span>
      </div>
    </div>
  );
};
