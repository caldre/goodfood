import React from "react";
import SearchListItem from "./SearchListItem/SearchListItem";
import { useSelector } from "react-redux";

const SearchList = () => {
  const searchResultItems = useSelector((state) => state.searchResultsReducer);

  const renderedSearchResultItems = searchResultItems.map((item) => {
    return <SearchListItem key={item.id} item={item} />;
  });

  return <ul>{renderedSearchResultItems}</ul>;
};

export default SearchList;
