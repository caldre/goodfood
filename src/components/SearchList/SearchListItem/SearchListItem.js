import React, { useState } from "react";
import { addItem } from "../../../actions/actions";
import { useDispatch } from "react-redux";

const SearchListItem = ({ item }) => {
  const [active, setActive] = useState(false);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleClickItem = () => {
    setActive(!active);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount(0);
    setActive(false);

    dispatch(addItem(item, amount));
  };

  return (
    <li>
      <h3 onClick={handleClickItem}>{item.name.fi}</h3>
      {active ? (
        <React.Fragment>
          <table>
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
                <td>{item.protein.toFixed(2)}</td>
                <td>{item.carbohydrate.toFixed(2)}</td>
                <td>{item.fat.toFixed(2)}</td>
                <td>{item.energyKcal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <form onSubmit={handleSubmit}>
            <label htmlFor="elintarvike">Paino (g)</label>
            <input
              name="elintarvike"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            <button type="submit">ADD ITEM TO LIST</button>
          </form>
        </React.Fragment>
      ) : null}
    </li>
  );
};

export default SearchListItem;
