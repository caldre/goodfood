import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Card } from "./styled";

const NavBar = () => {
  return (
    <Card>
      <LinksContainer>
        <Li>
          <Link to="/">Tuotehaku</Link>
        </Li>
        <Li>
          <Link to="/diary">Ruokapäiväkirja</Link>
        </Li>
        <Li style={{ alignSelf: "flex-end" }}>
          <Link to="/login">Log In</Link>
        </Li>
      </LinksContainer>
    </Card>
  );
};

const LinksContainer = styled.ul`
  display: flex;
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: flex-start;
  list-style: none;
`;

const Li = styled.li`
  margin: 0.5rem;
`;

export default NavBar;
