import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import FoodCart from "./components/FoodCart/FoodCart";
import SearchList from "./components/SearchList/SearchList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TotalCalculation from "./components/TotalCalculcation/TotalCalculation";

import "./App.css";
import "./normalize.css";
import "./color-palette-1.css";

import styled from "@emotion/styled";

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <SearchBar />
            <SearchList />
          </Route>
          <Route path="/diary">
            <FoodCart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <TotalCalculation />
      </Container>
    </Router>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  background: var(--neutral-10);
`;
export default App;
