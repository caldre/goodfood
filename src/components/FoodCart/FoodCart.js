import React from "react";
import { useSelector } from "react-redux";

import "./FoodCart.css";

const FoodCart = () => {
  const fooditems = useSelector((state) => state.foodCartReducer);
  const renderedfooditems = fooditems.map((fooditem) => {
<<<<<<< HEAD
    return <div key={fooditem.listId}>{fooditem.name.fi}</div>;
=======
    return (
      <div key={fooditem.key}>
        <div>{fooditem.name}</div>
        <div>{fooditem.weight}</div>
      </div>
    );
>>>>>>> 5cbeb6b... välicommit
  });
  return <div className="List">{renderedfooditems}</div>;
};

export default FoodCart;
