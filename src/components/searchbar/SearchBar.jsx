import React from "react";
import "./searchbar.scss";

const SearchBar = (props) => {
  const { searchValue, onSearchChange } = props;
  return (
    <div className="container">
      <div className="form-group search-input">
        <i class="fas fa-search"></i>
        <label htmlFor="search">Hľadaj príspevky</label>
        <input
          type="text"
          id="search"
          className="form-control search"
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Hľadaj"
        />
        <small class="form-text text-muted">Zadaj časť názvu miesta</small>
      </div>
    </div>
  );
};

export default SearchBar;
