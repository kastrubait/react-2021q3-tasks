import {CardItem} from "../../core/types/card-item";
import {InfoMessage} from "../../core/types/infoMessage";
import {SortType} from "../../core/types/sort-type";

export interface AppState {
  videos: CardItem[];
  searchTerm: string;
  page: number[];
  arrayPageTokens: string[];
  message: InfoMessage;
  maxResults: string;
  isLoading: boolean;
  sortBy: SortType;
  totalPages: number;
}

export enum VideoActionTypes {
  FETCH_VIDEOS = "FETCH_VIDEOS",
  FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS",
  FETCH_VIDEOS_ERROR = "FETCH_VIDEOS_ERROR",
  SET_VIDEOS_PAGE = "SET_VIDEOS_PAGE",
  SET_MAX_RESULTS = "SET_MAX_RESULTS",
  SET_SEARCH_TERM = "SET_SEARCH_TERM",
  SET_SORT_BY = "SET_SORT_BY",
  SET_TOTAL_PAGES = "SET_TOTAL_PAGES",
  SET_PAGES_TOKEN = "SET_PAGES_TOKEN",
  SET_IS_LOADING = "SET_IS_LOADING",
}
interface FetchVideosAction {
  type: VideoActionTypes.FETCH_VIDEOS;
}
interface FetchVideosSuccessAction {
  type: VideoActionTypes.FETCH_VIDEOS_SUCCESS;
  payload: CardItem[];
}
interface FetchVideosErrorAction {
  type: VideoActionTypes.FETCH_VIDEOS_ERROR;
  payload: InfoMessage;
}
interface SetVideosPageAction {
  type: VideoActionTypes.SET_VIDEOS_PAGE;
  payload: number[];
}
interface SetMaxResultsAction {
  type: VideoActionTypes.SET_MAX_RESULTS;
  payload: string;
}
interface SetSearchTermAction {
  type: VideoActionTypes.SET_SEARCH_TERM;
  payload: string;
}
interface SetSortByAction {
  type: VideoActionTypes.SET_SORT_BY;
  payload: SortType;
}
interface SetTotalPagesAction {
  type: VideoActionTypes.SET_TOTAL_PAGES;
  payload: number;
}
interface SetPagesTokenAction {
  type: VideoActionTypes.SET_PAGES_TOKEN;
  payload: string[];
}
interface SetIsLoading {
  type: VideoActionTypes.SET_IS_LOADING;
  payload: boolean;
}

export type Action =
  | FetchVideosAction
  | FetchVideosErrorAction
  | FetchVideosSuccessAction
  | SetVideosPageAction
  | SetMaxResultsAction
  | SetSearchTermAction
  | SetSortByAction
  | SetTotalPagesAction
  | SetPagesTokenAction
  | SetIsLoading;
