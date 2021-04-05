import React, { useState } from "react";

const FoodCartItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li key={item.listId}>
      <h3 onClick={() => setShowDetails(!showDetails)}>{item.name}</h3>
      {showDetails ? (
        <table>
          <thead>
            <tr>
              <th>Proteiini (g)</th>
              <th>Hiilihydraatit (g)</th>
              <th>Rasva (g)</th>
              <th>Kilokalorit (kcal)</th>
              <th>Annoskoko (g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.protein.toFixed(2)}</td>
              <td>{item.carbohydrate.toFixed(2)}</td>
              <td>{item.fat.toFixed(2)}</td>
              <td>{item.energyKcal.toFixed(2)}</td>
              <td>{item.amount}</td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </li>
  );
};

export default FoodCartItem;
