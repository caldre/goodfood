import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {}, [searchItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/searchitems", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchItem }),
    })
      .then((res) => res.json())
      .then((data) => setSearchResults(data));
  };

  const renderedSearchResults = searchResults.map((item) => {
    return <li key={item.id}>{item.name.fi}</li>;
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="submit">Hae hakusanalla</button>
      </form>
      <ul>{renderedSearchResults}</ul>
    </div>
  );
};

export default SearchBar;
