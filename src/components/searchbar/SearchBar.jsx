import React from "react";
import "./searchbar.scss";

const SearchBar = props => {
  const { searchValue, onSearchChange } = props;
  return (
    <div className="container">
      <div className="form-group search-input">
        <i class="fas fa-search"></i>
        <label htmlFor="search">Hladaj prispevky</label>
        <input
          type="text"
          id="search"
          className="form-control search"
          value={searchValue}
          onChange={onSearchChange}
          placeholder="search"
        />
        <small class="form-text text-muted">Zadaj cast nazvu krajiny</small>
      </div>
    </div>
  );
};

export default SearchBar;
