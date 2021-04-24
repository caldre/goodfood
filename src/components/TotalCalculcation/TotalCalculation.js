import React from "react";
import { useSelector } from "react-redux";

const TotalCalculation = () => {
  const initialstate = [{ carbohydrate: 0 }];
  const items = useSelector((state = initialstate) => state.foodCartReducer);

  const initialValue = 0;

  const totalProtein = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.protein,
    initialValue
  );
  const totalCarbohydrate = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.carbohydrate,
    initialValue
  );
  const totalFat = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.fat,
    initialValue
  );
  const totalEnergyKcal = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.energyKcal,
    initialValue
  );

  return items.length !== 0 ? (
    <table>
      <caption>Elintarviketiedot kaikista lisätyistä tuotteista</caption>
      <thead>
        <tr>
          <th>Proteiini (g)</th>
          <th>Hiilihydraatit (g)</th>
          <th>Rasva (g)</th>
          <th>Kilokalorit (kcal)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{totalProtein.toFixed(2)}</td>
          <td>{totalCarbohydrate.toFixed(2)}</td>
          <td>{totalFat.toFixed(2)}</td>
          <td>{totalEnergyKcal.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  ) : null;
};

export default TotalCalculation;
