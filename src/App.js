import React from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import FoodCart from "./components/FoodCart/FoodCart";
import SearchList from "./components/SearchList/SearchList";
import TotalCalculation from "./components/TotalCalculcation/TotalCalculation";

import "./App.css";

const App = () => {
  return (
    <div>
      <FoodCart />
      <SearchBar />
      <SearchList />
      <TotalCalculation />
    </div>
  );
};

export default App;
