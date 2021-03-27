import * as types from "./actionTypes";
import { v4 as uuid } from "uuid";

export const addItem = (item) => {
  console.log("adding item");
  return {
    type: types.ADD_ITEM,
    payload: { ...item, listId: uuid(), focus: false },
  };
};

export const changeFocus = (id) => {
  return {
    type: types.SWITCH_FOCUS,
    payload: { id },
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
