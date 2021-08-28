import {VideoItem} from "./video-item";

export interface VideoResponse {
  kind: string;
  etag: string;
  prevPageToken: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoItem[];
}

export interface IVideoResponse {
  data: VideoResponse;
}
