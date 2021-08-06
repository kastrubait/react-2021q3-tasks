import {CardItem} from "../types/card-item";
import {ISearchResponse} from "../types/search-response";
import {IVideoResponse} from "../types/video-response";
// import {setStateMessage} from "../../components/content/Content";
import {youtube} from "../api";

const API_KEY = "AIzaSyCVCxa3H8DCDz6LmdJDCvGbu4FcY8ErFm4";

const getListResultsByQuery = async (
  query: string,
  order: string,
  maxResults: number,
  pageToken?: string
): Promise<IVideoResponse> => {
  const url = `search?type=video&part=snippet&q=${query}&order=${order}&maxResults=${maxResults}&pageToken=${pageToken}&key=${API_KEY}`;
  return youtube.get(url);
};

const getListResultsById = async (
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
): Promise<CardItem[]> => {
  try {
    let cards: CardItem[] = [];
    const response = await getListResultsByQuery(
      query,
      order,
      maxResults,
      pageToken
    );
    const searchList = response.data;
    await Promise.all(
      searchList.items.map(async (item) => {
        try {
          const result = await getListResultsById([item.id?.videoId]);
          if (result.data) {
            cards = [...cards, ...result.data.items];
          }
        } catch (errors) {
          // setStateMessage(errors.message, "error");
        }
      })
    );
    return cards;
  } catch (errors) {
    // setStateMessage(errors.message, "error");
    return [];
  }
};
