import React from "react";
import {FaSearch} from "react-icons/fa";
import {SearchProps} from "../../core/types/search-props";
import {SortType} from "../../core/types/sort-type";
import "./style.scss";

export const SearchBar: React.FC<SearchProps> = ({
  placeholder,
  searchTerm,
  maxResults,
  sortBy,
  page,
  totalPages,
  onSearchTermChange,
  onMaxResultsChange,
  onSortOptionsChange,
  prevPageChange,
  nextPageChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="search-form">
        <input
          className="search-input"
          type="search"
          value={searchTerm}
          onChange={onSearchTermChange}
          placeholder={placeholder}
        />
        <button className="search-button" type="submit">
          <FaSearch className="search-icon" />
        </button>
      </div>
      <div className="radio-toolbar">
        <strong>Sort by:</strong>
        <label htmlFor="title">
          <input
            type="radio"
            name="sort"
            id="title"
            value={SortType.title}
            checked={sortBy === SortType.title}
            onChange={onSortOptionsChange}
          />
          title
        </label>
        <label htmlFor="rating">
          <input
            type="radio"
            name="sort"
            value={SortType.rating}
            checked={sortBy === SortType.rating}
            onChange={onSortOptionsChange}
          />
          rating
        </label>
        <label htmlFor="viewCount">
          <input
            type="radio"
            name="sort"
            value={SortType.viewCount}
            checked={sortBy === SortType.viewCount}
            onChange={onSortOptionsChange}
          />
          view count
        </label>
      </div>
      <div className="select">
        <label htmlFor="maxResult">
          Show
          <select
            name="maxResult"
            value={maxResults}
            onChange={onMaxResultsChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
          </select>
        </label>
        results on page.
        <input type="submit" value="Show" />
      </div>
      <div className="select">
        <p>
          Total pages:
          <strong>{page ? ` ${totalPages}` : ""}</strong>.
        </p>
        <br />
        <p>
          Change page
          <button
            type="button"
            disabled={page - 1 < 1}
            onClick={prevPageChange}
          >
            prev
          </button>{" "}
          {page}{" "}
          <button
            type="button"
            disabled={page + 1 > totalPages}
            onClick={nextPageChange}
          >
            next
          </button>
        </p>
      </div>
    </form>
  );
};
