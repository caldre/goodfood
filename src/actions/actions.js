import * as types from "./actionTypes";
import { v4 as uuid } from "uuid";

export const addItem = (item, amount) => {
  console.log("adding item");
  return {
    type: types.ADD_ITEM,
    payload: {
      id: item.id,
      name: item.name.fi,
      listId: uuid(),
      carbohydrate: (amount / 100) * item.carbohydrate,
      energyKcal: (amount / 100) * item.energyKcal,
      fat: (amount / 100) * item.fat,
      protein: (amount / 100) * item.protein,
      amount,
    },
  };
};

/* export const editItem = (id, item) => {
  return {
    type: types.EDIT_MESSAGE,
    payload: { id, item },
  };
};

export const deleteMessage = (id) => {
  return {
    type: types.DELETE_MESSAGE,
    payload: id,
  };
};
 */

export const populateSearchList = (searchList) => {
  console.log(`Action: Populating search list`);
  return {
    type: types.POPULATE_LIST,
    payload: searchList,
  };
};
