import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import routes from "../../routes";

const HeaderNav = styled.header`
  padding: 1rem;
  background: #9af1ad;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

const MenuListItem = styled.li`
  margin-right: 5rem;
  &: last-of-type {
    margin-right: 0;
  }
`;

const Item = styled(NavLink).attrs(props => ({
  activeClassName: props.activeClassName || "activeLink"
}))`
  font-size: 3rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s linear;
  &:not(:first-of-type) {
    margin-left: 2rem;
  }
  &:hover {
    color: blue;
  }
`;

const Navigation = () => (
  <HeaderNav>
    <nav>
      <MenuList>
        <MenuListItem>
          <Item to={routes.home} exact>
            home
          </Item>
        </MenuListItem>
        <MenuListItem>
          <Item to={routes.movies}>movies</Item>
        </MenuListItem>
      </MenuList>
    </nav>
  </HeaderNav>
);

export default Navigation;
