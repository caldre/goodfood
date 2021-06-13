import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import FoodCart from "./components/FoodCart/FoodCart";
import SearchList from "./components/SearchList/SearchList";
import TotalCalculation from "./components/TotalCalculcation/TotalCalculation";

import "./App.css";
import "./normalize.css";
import "./color-palette-1.css";

import styled from "@emotion/styled";

const App = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <FoodCart />
      <SearchBar />
      <SearchList />
      <TotalCalculation />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export default App;
