import {ChangeEventHandler, FormEventHandler, MouseEventHandler} from "react";
import {SortType} from "./sort-type";

export interface SearchProps {
  searchTerm?: string;
  maxResults: string;
  sortBy: SortType;
  placeholder: string;
  page: number;
  totalPages: number;
  onSearchTermChange: ChangeEventHandler;
  onMaxResultsChange: ChangeEventHandler;
  onSortOptionsChange: ChangeEventHandler;
  prevPageChange: MouseEventHandler;
  nextPageChange: MouseEventHandler;
  handleSubmit: FormEventHandler;
}
