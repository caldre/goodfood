import { ADD_ITEM, SWITCH_FOCUS } from "../actions/actionTypes";

export const foodCartReducer = (foodcart = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("red: adding item");
      return [...foodcart, action.payload];
    case SWITCH_FOCUS:
      console.log("focus");
      const newFoodCart = foodcart.map((item) => {
        if (item.listId === action.payload.id) {
          item.focus = item.focus ? false : true;
          return item;
        } else return item;
      });
      console.log(newFoodCart);
      return newFoodCart;
    default:
      return foodcart;
  }
};
