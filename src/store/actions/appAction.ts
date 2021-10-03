import {CardItem} from "../../core/types/card-item";
import {VideosList} from "../../core/types/search-response";
import {SortType} from "../../core/types/sort-type";
import {Action, VideoActionTypes} from "../types";

// const getNextPageData = () = async (
// ): Promise<void> => {
//   if (searchTerm) {
//     dispatch({
//       type: VideoActionTypes.SET_IS_LOADING,
//       payload: true
//     })
//     try {
//       dispatch({ type: VideoActionTypes.FETCH_VIDEOS });
//       await getListResults(
//         searchTerm,
//         sortBy,
//         parseInt(maxResults, 10),
//         arrayPageTokens[page[0]]
//       ).then((response) => {
//         if (response) {
//           dispatch({
//             type: VideoActionTypes.SET_PAGES_TOKEN,
//             payload: [
//               response?.prevPageToken ?? "",
//               response?.nextPageToken ?? "",
//             ]
//           })
//           const {totalResults, resultsPerPage} = response?.pageInfo;
//           dispatch({
//             type: VideoActionTypes.SET_TOTAL_PAGES,
//             payload: Math.ceil(totalResults / resultsPerPage)
//           });
//           setVideos(response?.items);
//         }
//       });
//     } catch (errors) {
//       dispatch({
//         type: VideoActionTypes.FETCH_VIDEOS_ERROR,
//         payload: {
//           show: true,
//           text: errors.message,
//           type: "error"
//         }
//       });
//     } finally {
//       dispatch({
//         type: VideoActionTypes.SET_IS_LOADING,
//         payload: false
//       })
//     }
//   }}, '');

export function setSearchTerm(searchValue: string): Action {
  return {type: VideoActionTypes.SET_SEARCH_TERM, payload: searchValue};
}

export function setMaxResults(maxResults: string): Action {
  return {type: VideoActionTypes.SET_MAX_RESULTS, payload: maxResults};
}

export function setSortBy(sortBy: SortType): Action {
  return {type: VideoActionTypes.SET_SORT_BY, payload: sortBy};
}

export function setPage(page: number[]): Action {
  return {type: VideoActionTypes.SET_VIDEOS_PAGE, payload: page};
}

export function setVideos(videos: CardItem[]): Action {
  return {type: VideoActionTypes.FETCH_VIDEOS_SUCCESS, payload: videos};
}

export function setIsLoading(isLoading: boolean): Action {
  return {type: VideoActionTypes.SET_IS_LOADING, payload: isLoading};
}
export function setPageToken(response: VideosList): Action {
  return {
    type: VideoActionTypes.SET_PAGES_TOKEN,
    payload: [response?.prevPageToken ?? "", response?.nextPageToken ?? ""],
  };
}
