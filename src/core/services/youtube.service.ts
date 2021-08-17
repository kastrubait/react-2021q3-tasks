import {CardItem} from "../types/card-item";
import {VideosList, ISearchResponse} from "../types/search-response";
import {IVideoResponse} from "../types/video-response";
// import {setStateMessage} from "../../components/content/Content";
import {youtube} from "../api";

const API_KEY = "AIzaSyCC0CTtmSqog5piI1lLEW8BHYsKQcywI7I";

const getListResultsByQuery = async (
  query: string,
  order: string,
  maxResults: number,
  pageToken?: string
): Promise<IVideoResponse> => {
  const url = `search?type=video&part=snippet&q=${query}&order=${order}&maxResults=${maxResults}&pageToken=${pageToken}&key=${API_KEY}`;
  return youtube.get(url);
};

export const getListResultsById = async (
  arrayIds: string[]
): Promise<ISearchResponse> => {
  const listIds: string = arrayIds.join(",");
  const url = `videos?part=snippet&part=statistics&id=${listIds}&key=${API_KEY}`;
  return youtube.get(url);
};

export const getListResults = async (
  query: string,
  order: string,
  maxResults: number,
  pageToken?: string
): Promise<VideosList | null> => {
  try {
    let cards: CardItem[] = [];
    let videos: VideosList;
    const response = await getListResultsByQuery(
      query,
      order,
      maxResults,
      pageToken
    );
    const searchList = response.data;
    const {prevPageToken, nextPageToken, pageInfo} = response.data;
    videos = {prevPageToken, nextPageToken, pageInfo, items: cards};
    await Promise.all(
      searchList.items.map(async (item) => {
        try {
          const result = await getListResultsById([item.id?.videoId]);
          if (result.data) {
            cards = [...cards, ...result.data.items];
            videos = {...videos, items: cards};
          }
        } catch (errors) {
          // setStateMessage(errors.message, "error");
        }
      })
    );
    return videos;
  } catch (errors) {
    // setStateMessage(errors.message, "error");
    return null;
  }
};
