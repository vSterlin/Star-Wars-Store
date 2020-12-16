import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// import {ReactComponent as Logo} from '../assets/sw-logo.svg';

import { Menu } from "@styled-icons/feather";

import { House, Search, Cart } from "@styled-icons/bootstrap";
import { colors } from "../utils/colors";
import NavLink from "./NavLink";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  color: ${colors.white};
  background-color: ${({ scrollLocation }) =>
    scrollLocation >= 5 ? colors.darkBlue : colors.blue};
  height: 72px;
  width: 100vw;
  align-items: center;
  padding: 0 20px;
  /* > * {
    border: 1px solid black;
  } */
  top: 0;
  position: fixed;
  ${({ scrollLocation }) =>
    scrollLocation >= 5 ? "box-shadow: 0 1px 10px #000;" : ""}
`;

const StyledMenuIcon = styled(Menu)`
  height: 30px;
  color: ${colors.white};
  &:hover {
    color: ${colors.orange};
  }
`;

const styledIcon = (Icon) => styled(Icon)`
  /* height: 40px; */
  height: 80%;
  margin-right: 10px;
`;

const NavLinks = styled.div`
  margin-left: 20px;
  display: flex;
  width: 40%;
  justify-content: space-around;
`;

const HomeIcon = styledIcon(House);
const SearchIcon = styledIcon(Search);
const CartIcon = styledIcon(Cart);

const Navbar = () => {
  const [scrollLocation, setScrollLocation] = useState(0);
  const onScroll = useCallback(() => {
    console.log(scrollLocation);
    setScrollLocation(window.scrollY);
  }, [scrollLocation]);

  useEffect(() => {
    window.addEventListener("scroll", () => onScroll());
    return window.removeEventListener("scroll", () => onScroll());
  }, [onScroll]);

  return (
    <StyledNavbar scrollLocation={scrollLocation}>
      <div>
        <StyledMenuIcon />
      </div>

      <NavLinks>
        <NavLink>
          <HomeIcon />
          <p>Home</p>{" "}
        </NavLink>

        <NavLink>
          <SearchIcon />
          <p>Search</p>
        </NavLink>

        <NavLink>
          <CartIcon />
          <p>Cart</p>
        </NavLink>
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;
