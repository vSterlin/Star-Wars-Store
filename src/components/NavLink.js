import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../utils/colors";

const fontSize = 30;

const NavSectionWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  height: ${fontSize}px;
  font-size: ${fontSize}px;
  align-items: center;
  padding: 10px;
  position: relative;

  &::before {
    content: "";
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    border-radius: 5px;
    background-color: ${colors.orange};
    transition: right 0.2s linear, opacity 0.2s linear;
    right: 40%;
    opacity: 0;
    
  }
  &:hover {
    &::before {
      right: 0;
      opacity: 1;
    }
  }
`;

const NavLink = ({ children }) => {
  return <NavSectionWrapper>{children}</NavSectionWrapper>;
};

export default NavLink;
