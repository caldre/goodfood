import React from "react";
import { useSelector } from "react-redux";
import FoodCartItem from "./FoodCartItem/FoodCartItem";

const FoodCart = () => {
  const items = useSelector((state) => state.foodCartReducer);
  const renderedFoodCart = items.map((item) => {
    return <FoodCartItem key={item.listId} item={item} />;
  });
  return <ul>{renderedFoodCart}</ul>;
};

export default FoodCart;
