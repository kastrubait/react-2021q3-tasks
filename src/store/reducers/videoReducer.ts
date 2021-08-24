import {SortType} from "../../core/types/sort-type";
import {VideoActionTypes, AppState, Action} from "../types";

const initialState: AppState = {
  videos: [],
  searchTerm: "",
  sortBy: SortType.rating,
  maxResults: "15",
  page: [1, 1],
  arrayPageTokens: ["", ""],
  totalPages: 0,
  isLoading: false,
  message: {
    show: false,
    text: "",
    type: "message",
  },
};
export const videoReducer = (
  state = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case VideoActionTypes.FETCH_VIDEOS:
      return {...state, isLoading: true};
    case VideoActionTypes.FETCH_VIDEOS_SUCCESS:
      return {...state, isLoading: false, videos: action.payload};
    case VideoActionTypes.FETCH_VIDEOS_ERROR:
      return {...state, isLoading: false, message: action.payload};
    case VideoActionTypes.SET_VIDEOS_PAGE:
      return {...state, page: action.payload};
    case VideoActionTypes.SET_MAX_RESULTS:
      return {...state, maxResults: action.payload};
    case VideoActionTypes.SET_SEARCH_TERM: {
      return {...state, searchTerm: action.payload};
    }
    case VideoActionTypes.SET_SORT_BY: {
      return {...state, sortBy: action.payload};
    }
    case VideoActionTypes.SET_TOTAL_PAGES: {
      return {...state, totalPages: action.payload};
    }
    default:
      return state;
  }
};
