import {CardItem} from "./card-item";

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: CardItem[];
}

export interface ISearchResponse {
  data: SearchResponse;
}
