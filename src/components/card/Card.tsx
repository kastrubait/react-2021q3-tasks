import React from "react";
import {CardItem} from "../../types/card-item";
import {DEFAULT_TAGS} from "../../shared/constansts/default-tags";
import {Statistics} from "./Statistics";
import "./style.scss";

interface DataItem extends CardItem {
  video?: string;
}

function convertArrayTags(tags: string[]): string[] {
  const convertArray: string[] = ["react"];
  tags.forEach((tag: string) => {
    if (DEFAULT_TAGS.includes(tag)) {
      convertArray.push(tag);
    }
  });
  return Array.from(new Set(convertArray));
}

export const Card: React.FC<DataItem> = ({snippet, statistics, video}) => {
  const videoUrl = `https://www.youtube.com/watch?v=${video}`;
  const publishedDate = new Date(`${snippet.publishedAt}`).toLocaleDateString(
    "zh-Hans-CN"
  );
  return (
    <div className="card_container">
      <section className="card_header">
        <img
          className="card_img"
          src={snippet.thumbnails.medium.url}
          alt="Pic"
        />
        <div className="card_author">
          <h4>{snippet.channelTitle}</h4>
        </div>
      </section>

      <section className="card_body">
        <div className="card_title">
          <a href={videoUrl} target="_blank" rel="noreferrer">
            {snippet.title}
          </a>
        </div>
        <div className="card_summary">
          <p>{snippet.description}</p>
        </div>
        <div className="card_tags">
          <ul>
            {convertArrayTags(snippet.tags ?? []).map((tag: string) => (
              <li key={tag}>
                <span>{tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr />
      <section className="card_footer">
        <span className="published-date">{publishedDate}</span>
        <Statistics
          viewCount={statistics.viewCount}
          commentCount={statistics.commentCount}
        />
      </section>
    </div>
  );
};
