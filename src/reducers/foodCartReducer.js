<<<<<<< HEAD
import { ADD_ITEM } from "../actions/actionTypes";

export const foodCartReducer = (foodcart = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("red: adding item");
      return [...foodcart, action.payload];
    default:
      return foodcart;
  }
=======
export const foodCartReducer = (
  foodcart = [
    { id: 1, name: "nakki", weight: 300 },
    { id: 2, name: "nakki", weight: 300 },
    { id: 3, name: "nakki", weight: 300 },
  ]
) => {
  return foodcart;
>>>>>>> 5cbeb6b... välicommit
};
