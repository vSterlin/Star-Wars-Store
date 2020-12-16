import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import NewProductCard from './NewProductCard';
import { colors } from '../utils/colors';

const StyledSection = styled.section`
  height: 60%;
  width: 80%;
  margin:  auto;
  color: ${colors.white};
`;


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const NewestScreen = () => {
  return (
    <StyledSection>
      <h2 style={{marginBottom: 20}}>
        Newest Products
      </h2>
      {/* <Slider {...sliderSettings}>
        <div>
    adfadlfa
        </div>
        <div>
    adfadlfbbfabfjsa
        </div>
      </Slider> */}
      <NewProductCard />
    </StyledSection>
  )
}

export default NewestScreen
