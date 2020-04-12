import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import routes from "../../routes";

const HeaderNav = styled.nav`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 4rem 0;
  box-shadow: 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.75);
`;

const Item = styled(NavLink).attrs((props) => ({
  activeClassName: props.activeClassName || "activeLink",
}))`
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s linear;
  &:not(:first-of-type) {
    margin-left: 2rem;
  }
  &:hover {
    color: blue;
  }
`;

const NavigationCastReviews = ({ castMatch, reviewMatch }) => (
  <HeaderNav>
    <h2>Additional information</h2>
    <div>
      <Item to={castMatch}>cast</Item>
      <Item to={reviewMatch}>reviews</Item>
    </div>
  </HeaderNav>
);

export default NavigationCastReviews;
