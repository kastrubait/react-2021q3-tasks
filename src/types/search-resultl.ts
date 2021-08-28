import {CardItem} from "./card-item";

export interface SearchResult {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<CardItem>;
}
