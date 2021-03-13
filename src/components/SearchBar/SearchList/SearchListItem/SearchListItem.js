import React from "react";
import { addItem } from "../../../../actions/actions";
import { useDispatch } from "react-redux";

const SearchListItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClickItem = () => {
    dispatch(addItem(item));
  };

  return (
    <li key={item.id} onClick={handleClickItem}>
      {item.name.fi}
    </li>
  );
};

export default SearchListItem;
