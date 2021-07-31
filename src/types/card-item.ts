export interface IThumbObj {
  url: string;
  width: number;
  height: number;
}

interface ItemLoc {
  title: string;
  description: string;
}

export interface Snippet {
  publishedAt: string;
  publishTime?: string;
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbObj;
    medium: IThumbObj;
    high: IThumbObj;
    standard: IThumbObj;
    maxres: IThumbObj;
  };

  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: ItemLoc;
  defaultAudioLanguage?: string;
}

export interface Statistic {
  viewCount?: string;
  likeCount?: string;
  dislikeCount?: string;
  favoriteCount?: string;
  commentCount?: string;
}

export interface CardItem {
  kind?: string;
  etag?: string;
  id?: {
    kind?: string;
    videoId: string;
  };
  snippet: Snippet;
  statistics: Statistic;
}
