import {Snippet} from "./snippet";
import {Statistic} from "./statistics";

export interface IThumbObj {
  url: string;
  width: number;
  height: number;
}

export interface CardItem {
  kind?: string;
  etag?: string;
  id?: string;
  snippet: Snippet;
  statistics: Statistic;
}
