import React, { useState } from "react";
import { addItem } from "../../../actions/actions";
import { useDispatch } from "react-redux";

const InputFoodItem = ({ item }) => {
  const [active, setActive] = useState(true);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleClickItem = () => {
    setActive(!active);
  };

  //dispatch(addItem(item));

  return (
    <li key={item.id} onClick={handleClickItem}>
      <h3>{item.name.fi}</h3>
      <h4>{item.carbohydrate}</h4>
    </li>
  );
};

export default InputFoodItem;
