import { combineReducers } from "redux";
import { foodCartReducer } from "./foodCartReducer";
import { searchResultsReducer } from "./searchResultsReducer";

export default combineReducers({
  foodCartReducer,
  searchResultsReducer,
});
