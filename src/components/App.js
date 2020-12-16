import React from "react";

import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../utils/colors";
import Navbar from "./Navbar";
import NewestScreen from "./NewestScreen";

import "typeface-roboto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    
  }
`;
const StyledMain = styled.main`
  margin-top: 72px;
  height: 100vh;
  background: rgb(192, 131, 2);
  background: linear-gradient(${colors.blue} 0%, ${colors.darkBlue} 100%);
  padding-top: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <StyledMain>
        <NewestScreen></NewestScreen>
      </StyledMain>
    </>
  );
};

export default App;
