import { ADD_ITEM } from "../actions/actionTypes";

export const foodCartReducer = (foodcart = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("red: adding item");
      return [...foodcart, action.payload];
    default:
      return foodcart;
  }
};
