import React from "react";
import { MainContent } from "../styled";
import { useSelector } from "react-redux";
import FoodCartItem from "./FoodCartItem/FoodCartItem";

const FoodCart = () => {
  const items = useSelector((state) => state.foodCartReducer);
  const renderedFoodCart = items.map((item) => {
    return <FoodCartItem key={item.listId} item={item} />;
  });
  return (
    <MainContent>
      <h2>Diary</h2>
      <ul>{renderedFoodCart}</ul>
    </MainContent>
  );
};

export default FoodCart;
