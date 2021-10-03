import React, {ChangeEvent, useState, SyntheticEvent} from "react";
import {SearchBar} from "../search-bar/SearchBar";
import {CardsList} from "../cards-list/CardsList";
import {CardItem} from "../../core/types/card-item";
import {getListResults} from "../../core/services/youtube.service";
import {InfoMessage} from "../../core/types/infoMessage";
import {SortType} from "../../core/types/sort-type";
import {Message} from "../message/Message";
import {Preloader} from "../preloader/preloader";
import "./style.scss";

export const Content: React.FC<unknown> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [maxResults, setMaxResults] = useState<string>("15");
  const [sortBy, setSortBy] = useState<SortType>(SortType.rating);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number[]>([1, 1]);
  const [videos, setVideos] = useState<CardItem[]>([]);
  const [arrayPageTokens, setArrayPageTokens] = useState<string[]>(["", ""]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<InfoMessage>({
    show: false,
    text: "",
    type: "message",
  });

  const setStateMessage = (show: boolean, text: string, type: string): void => {
    setMessage({
      show,
      text,
      type,
    });
  };

  const getNextPageData = async (): Promise<void> => {
    if (searchTerm) {
      setIsLoading(true);
      try {
        await getListResults(
          searchTerm,
          sortBy,
          parseInt(maxResults, 10),
          arrayPageTokens[page[0]]
        ).then((response) => {
          if (response) {
            setArrayPageTokens([
              response?.prevPageToken ?? "",
              response?.nextPageToken ?? "",
            ]);
            const {totalResults, resultsPerPage} = response?.pageInfo;
            setTotalPages(Math.ceil(totalResults / resultsPerPage));
            setVideos(response?.items);
          }
        });
      } catch (errors) {
        setStateMessage(true, errors.message, "error");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!searchTerm) setVideos([]);
  };

  const onMaxResultsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMaxResults(e.target.value);
  };

  const onSortOptionsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value as SortType);
    getNextPageData();
  };

  const prevPageChange = (e: SyntheticEvent) => {
    e.preventDefault();
    if (arrayPageTokens[0]) {
      setPage([0, page[1] - 1]);
      getNextPageData();
    }
  };

  const nextPageChange = (e: SyntheticEvent) => {
    e.preventDefault();
    if (arrayPageTokens[1]) {
      setPage([1, page[1] + 1]);
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
