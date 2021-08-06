import {CardItem} from "../types/card-item";
import {ISearchResponse} from "../types/search-response";
import {IVideoResponse, VideoResponse} from "../types/video-response";
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

const exactIdsFromListResults = (searchList: VideoResponse): string[] => {
  return searchList.items.map((item) => item.id?.videoId);
};

export const getListResults = async (
  query: string,
  order: string,
  maxResults: number,
  pageToken?: string
): Promise<CardItem[]> => {
  let cards: CardItem[] = [];
  try {
    await getListResultsByQuery(query, order, maxResults, pageToken).then(
      (response) => {
        const searchList = response.data;
        const arrayIds = exactIdsFromListResults(searchList);
        try {
          getListResultsById(arrayIds).then((videos) => {
            cards = {...videos.data.items};
            console.log(cards);
          });
        } catch (errors) {
          console.error(errors.message);
        }
      }
    );
    return cards;
  } catch (errors) {
    console.error(errors.message);
    return [];
  }
};
