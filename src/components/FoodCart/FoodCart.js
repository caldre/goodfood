import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFocus } from "../../actions/actions";

import "./FoodCart.css";

const FoodCart = () => {
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarboHydrate = 0;

  const foodItems = useSelector((state) => state.foodCartReducer);
  const dispatch = useDispatch();

  const renderedFoodItems = foodItems.map((foodItem) => {
    totalCalories += foodItem.energyKcal;
    totalProtein += foodItem.protein;
    totalCarboHydrate += foodItem.carbohydrate;

    const changeItemFocus = () => {
      dispatch(changeFocus(foodItem.listId));
    };

    const showFocus = () => {
      if (foodItem.focus === true) {
        return "true";
      } else return "false";
    };

    return (
      <div key={foodItem.listId}>
        <button onClick={changeItemFocus}>NAPPI</button>
        <div>{foodItem.name.fi}</div>
        <div className="kcal">kalorit :{Math.round(foodItem.energyKcal)}</div>
        <div>focus: {showFocus()}</div>
      </div>
    );
  });
  return (
    <div className="List">
      <div>{renderedFoodItems}</div>
      <div className="TotalCalories">
        kokonaiskalorit: {Math.round(totalCalories)}
      </div>
      <div className="TotalProtein">proteiini: {Math.round(totalProtein)}</div>
      <div className="TotalCarboHydrate">
        hiilihydraatit: {Math.round(totalCarboHydrate)}
      </div>
    </div>
  );
};

export default FoodCart;
