import React from "react";

const SearchBar = props => {
  const { searchValue, onSearchChange } = props;
  return (
    <div className="form-group">
      <label htmlFor="search">Hladaj prispevky</label>
      <input
        type="text"
        id="search"
        className="form-control"
        value={searchValue}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
