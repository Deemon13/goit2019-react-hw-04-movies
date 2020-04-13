import React from "react";
import styled from "styled-components";
import AppBar from "../Appbar/Appbar";

const Container = styled.div`
  max-width: 100vw;
`;

const WrapperViewPage = styled.section`
  margin: 0 auto 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 92vw;
  min-width: 30rem;
  max-width: 100%;
`;

const Layout = ({ children }) => (
  <Container>
    <AppBar />
    <WrapperViewPage>{children}</WrapperViewPage>
  </Container>
);
export default Layout;
