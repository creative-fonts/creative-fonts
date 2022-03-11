import React, { useState } from "react";
import "./SearchBar.css";

import { NavLink } from "react-router-dom";

const SearchBar = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.fontName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="search">
      <div className="search-bar" id="search-bar-color">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          alt="search"
          id="search-icon"
        />
        <input
          autoComplete="off"
          id="ip"
          type="text"
          placeholder="Search a creative-font..."
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <NavLink
                to={`/preview/${value.fontId}`}
                className="dataItem"
                key={value.fontId}
              >
                <p>{value.fontName} </p>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
