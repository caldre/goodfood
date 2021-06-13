import React from "react";
import styled from "@emotion/styled";

const NavBar = () => {
  const links = ["Etusivu", "Tuotehaku", "Ruokapäiväkirja", "Login/Sign Up"];

  const mappedLinks = links.map((link) => {
    return <Link href="#">{link}</Link>;
  });

  return <LinksContainer>{mappedLinks}</LinksContainer>;
};

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Link = styled.a``;

export default NavBar;
