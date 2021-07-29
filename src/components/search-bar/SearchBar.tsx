import React from "react";
import {FaSearch} from "react-icons/fa";
import {SearchProps} from "../../types/searchProps";

import "./style.scss";

const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  return e.target;
};

export const SearchBar: React.FC<SearchProps> = ({placeholder}) => {
  return (
    <form className="search-form">
      <input
        className="search-input"
        type="search"
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button className="search-button" type="submit">
        <FaSearch className="search-icon" />
      </button>
    </form>
  );
};
