import React from "react";
import { useSelector } from "react-redux";

const FoodCart = () => {
  const fooditems = useSelector((state) => state.foodCartReducer);
  const renderedfooditems = fooditems.map((fooditem) => {
    return <div key={fooditem.listId}>{fooditem.name.fi}</div>;
  });
  return renderedfooditems;
};

export default FoodCart;