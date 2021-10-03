import React, {ChangeEvent, SyntheticEvent} from "react";
import {useDispatch} from "react-redux";
import {SearchBar} from "../search-bar/SearchBar";
import {CardsList} from "../cards-list/CardsList";
import {SortType} from "../../core/types/sort-type";
import {getListResults} from "../../core/services/youtube.service";
import {Message} from "../message/Message";
import {Preloader} from "../preloader/preloader";
import "./style.scss";
import {
  setMaxResults,
  setPage,
  setSearchTerm,
  setSortBy,
  setVideos,
} from "../../store/actions/appAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {VideoActionTypes} from "../../store/types";

export const Content: React.FC<unknown> = () => {
  const {
    searchTerm,
    page,
    maxResults,
    sortBy,
    totalPages,
    isLoading,
    arrayPageTokens,
    message,
    videos,
  } = useTypedSelector((state) => state.video);
  // const {getNextPageData} = useActions();
  const dispatch = useDispatch();

  const getNextPageData = async (): Promise<void> => {
    if (searchTerm) {
      dispatch({
        type: VideoActionTypes.SET_IS_LOADING,
        payload: true,
      });
      try {
        await getListResults(
          searchTerm,
          sortBy,
          parseInt(maxResults, 10),
          arrayPageTokens[page[0]]
        ).then((response) => {
          if (response) {
            dispatch({
              type: VideoActionTypes.SET_PAGES_TOKEN,
              payload: [
                response?.prevPageToken ?? "",
                response?.nextPageToken ?? "",
              ],
            });
            const {totalResults, resultsPerPage} = response?.pageInfo;
            dispatch({
              type: VideoActionTypes.SET_TOTAL_PAGES,
              payload: Math.ceil(totalResults / resultsPerPage),
            });
            dispatch(setVideos(response?.items));
          }
        });
      } catch (errors) {
        dispatch({
          type: VideoActionTypes.FETCH_VIDEOS_ERROR,
          payload: {
            show: true,
            text: errors.message,
            type: "error",
          },
        });
      } finally {
        dispatch({
          type: VideoActionTypes.SET_IS_LOADING,
          payload: false,
        });
      }
    }
  };

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
    if (!searchTerm) setVideos([]);
  };

  const onMaxResultsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setMaxResults(e.target.value));
  };

  const onSortOptionsChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortBy(e.target.value as SortType));
    getNextPageData();
  };

  const prevPageChange = (e: SyntheticEvent) => {
    e.preventDefault();
    if (arrayPageTokens[0]) {
      dispatch(setPage([0, page[1] - 1]));
      getNextPageData();
    }
  };

  const nextPageChange = (e: SyntheticEvent) => {
    e.preventDefault();
    if (arrayPageTokens[1]) {
      dispatch(setPage([1, page[1] + 1]));
      getNextPageData();
    }
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    getNextPageData();
  };

  return (
    <div>
      <SearchBar
        placeholder="Search..."
        searchTerm={searchTerm}
        maxResults={maxResults}
        sortBy={sortBy}
        page={page[1]}
        totalPages={totalPages}
        onSearchTermChange={onSearchTermChange}
        onMaxResultsChange={onMaxResultsChange}
        onSortOptionsChange={onSortOptionsChange}
        prevPageChange={prevPageChange}
        nextPageChange={nextPageChange}
        handleSubmit={handleSubmit}
      />
      <Preloader isLoading={isLoading} />
      <CardsList data={videos} />
      <Message data={message} />;
    </div>
  );
};
