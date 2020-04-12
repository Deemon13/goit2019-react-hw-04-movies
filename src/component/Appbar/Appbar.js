import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const Header = styled.header`
  width: 100%;
  box-shadow: 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.75);
  margin-bottom: 2rem;
`;

const AppBar = () => (
  <Header>
    <Navigation />
  </Header>
);

export default AppBar;
