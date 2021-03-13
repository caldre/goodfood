import React, { useState } from "react";
import SearchList from "./SearchList/SearchList";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/searchitems", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchItem }),
    })
      .then((res) => res.json())
      .then((data) => setSearchResults(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="submit">Hae hakusanalla</button>
      </form>
      <SearchList items={searchResults} />
    </div>
  );
};

export default SearchBar;
