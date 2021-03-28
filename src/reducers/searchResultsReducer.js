import { POPULATE_LIST } from "../actions/actionTypes";

export const searchResultsReducer = (searchResults = [], action) => {
  switch (action.type) {
    case POPULATE_LIST:
      console.log("REDUCER: Populating search list with fetched items");
      return action.payload;
    default:
      return searchResults;
  }
};
