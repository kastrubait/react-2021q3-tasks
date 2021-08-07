import {CardItem} from "./card-item";

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface VideosList {
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfo;
  items: CardItem[];
}

export interface SearchResponse extends VideosList {
  kind: string;
  etag: string;
}

export interface ISearchResponse {
  data: SearchResponse;
}
