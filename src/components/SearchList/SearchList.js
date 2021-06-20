import React from "react";
import { MainContent } from "../styled";
import SearchListItem from "./SearchListItem/SearchListItem";
import { useSelector } from "react-redux";

const SearchList = () => {
  const searchResultItems = useSelector((state) => state.searchResultsReducer);

  const renderedSearchResultItems = searchResultItems.map((item) => {
    return <SearchListItem key={item.id} item={item} />;
  });

  return (
    <MainContent>
      <ul>{renderedSearchResultItems}</ul>
    </MainContent>
  );
};

export default SearchList;
