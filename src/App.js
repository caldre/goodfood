import React from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import FoodCart from "./components/FoodCart/FoodCart";

const App = () => {
  return (
    <div>
      <FoodCart />
      <SearchBar />;
    </div>
  );
};

export default App;
