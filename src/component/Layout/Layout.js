import React from "react";
import styled from "styled-components";
import AppBar from "../Appbar/Appbar";

const Container = styled.div`
max-width: 1170,
margin-left: auto,
margin-right: auto,
padding-right: 12,
padding-left: 12,
`;

const Layout = ({ children }) => (
  <Container>
    <AppBar />
    <hr />
    {children}
  </Container>
);
export default Layout;
