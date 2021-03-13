import React from "react";
import SearchListItem from "./SearchListItem/SearchListItem";

const SearchList = ({ items }) => {
  const renderedItems = items.map((item) => {
    return <SearchListItem item={item} />;
  });

  return <ul>{renderedItems}</ul>;
};

export default SearchList;
